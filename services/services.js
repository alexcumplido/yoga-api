require("dotenv").config();

const Database = require("better-sqlite3");
const dbLite = new Database("db/database.db", {
  verbose: console.log,
});

const baseURL = require("../resources/baseURL.json");

async function getBaseURL() {
  return baseURL;
}

async function getCategories() {
  const queryCount = dbLite.prepare(`SELECT id FROM categories`);
  const data = queryCount.all();
  const categories = [];
  data.forEach(async function (element) {
    try {
      const response = await getCategoryById(element.id);
      categories.push(response);
    } catch (error) {
      console.log(error);
    }
  });
  return categories;
}

const rootQuery = `SELECT * 
    FROM categories
    WHERE`;

const baseQuery = `SELECT 
    poses.id, category_name, english_name, sanskrit_name_adapted, sanskrit_name, translation_name, pose_description, pose_benefits, 
    url_svg, url_png, url_svg_alt 
    FROM poses 
      INNER JOIN transitive_poses ON poses.id = transitive_poses.pose_id 
      INNER JOIN categories ON categories.id = transitive_poses.category_id`;

async function getCategoryById(id) {
  const queryCategory = dbLite.prepare(`${rootQuery} categories.id = ?`);
  const rowsCategory = queryCategory.get(id);
  const queryPoses = dbLite.prepare(`${baseQuery} WHERE categories.id = ?`);
  const rowsPoses = queryPoses.all(rowsCategory.id);
  return { ...rowsCategory, poses: [...rowsPoses] };
}

async function getCategoryByName(name) {
  const queryCategory = dbLite.prepare(
    `${rootQuery} categories.category_name = ? COLLATE NOCASE`
  );
  const rowsCategory = queryCategory.get(name);
  const queryPoses = dbLite.prepare(
    `${baseQuery} WHERE categories.category_name = ?`
  );
  const rowsPoses = queryPoses.all(rowsCategory.category_name);
  return { ...rowsCategory, poses: [...rowsPoses] };
}

async function getPosesByCategoryAndDifficulty(category, difficulty) {
  const queryCategory = dbLite.prepare(
    `SELECT *
    FROM categories
    WHERE categories.category_name = ? COLLATE NOCASE`
  );
  const rowsCategory = queryCategory.get(category);
  const query = dbLite.prepare(
    `SELECT DISTINCT
    poses.id, category_name, difficulty_level, english_name, sanskrit_name_adapted, sanskrit_name, translation_name, pose_description pose_benefits,
    url_svg, url_png, url_svg_alt
    FROM poses
      INNER JOIN transitive_poses ON poses.id = transitive_poses.pose_id
      INNER JOIN categories ON categories.id = transitive_poses.category_id
	    INNER JOIN difficulty ON difficulty.id = transitive_poses.difficulty_id
      WHERE categories.category_name = ? COLLATE NOCASE 
	    AND difficulty.difficulty_level = ? COLLATE NOCASE
  `
  );
  const rows = query.all(rowsCategory.category_name, difficulty);
  return { ...rowsCategory, poses: [...rows] };
}

async function getPoses() {
  const query = dbLite.prepare(
    "SELECT * FROM poses ORDER BY poses.english_name ASC"
  );
  const rows = query.all();
  return rows;
}

async function getPosesByParams(params) {
  const { id, name, level } = params;
  let rows;
  if (level) {
    rows = await getPosesByLevel(level);
  } else if (id || name) {
    const queryId = id && `id = ${id}`;
    const queryName = name && `poses.english_name = '${name}' COLLATE NOCASE`;
    const query = dbLite.prepare(
      `SELECT * FROM poses WHERE ${queryId || queryName}`
    );
    rows = query.get();
  }
  return rows;
}

async function getPosesByLevel(level) {
  const queryDifficulty = dbLite.prepare(
    `SELECT * 
    FROM difficulty 
    WHERE difficulty.difficulty_level = ? COLLATE NOCASE`
  );
  const rowsDifficulty = queryDifficulty.get(level);
  const queryPoses = dbLite.prepare(
    `SELECT DISTINCT
    poses.id, difficulty_level, english_name, sanskrit_name_adapted, sanskrit_name, translation_name, pose_description, pose_benefits, 
    url_svg, url_png, url_svg_alt
    FROM poses
	    INNER JOIN transitive_poses ON poses.id = transitive_poses.pose_id
	    INNER JOIN difficulty ON difficulty.id = transitive_poses.difficulty_id
	    WHERE difficulty.difficulty_level = ? COLLATE NOCASE 
  `
  );
  const rowsPoses = queryPoses.all(rowsDifficulty.difficulty_level);
  return { ...rowsDifficulty, poses: [...rowsPoses] };
}

module.exports = {
  getBaseURL,
  getCategories,
  getCategoryByName,
  getPoses,
  getPosesByParams,
  getCategoryById,
  getPosesByCategoryAndDifficulty,
};

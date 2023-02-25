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
  const query = dbLite.prepare(
    `SELECT * 
    FROM categories`
  );
  const rows = query.all();
  return rows;
}
async function getCategoryById(id) {
  const queryCategory = dbLite.prepare(
    `SELECT * 
    FROM categories
    WHERE categories.id = ?`
  );
  const rowsCategory = queryCategory.get(id);
  const queryPoses = dbLite.prepare(
    `SELECT 
    poses.id, category_name, english_name, sanskrit_name_adapted, sanskrit_name, translation_name, pose_description pose_benefits, 
    url_svg, url_png, url_svg_alt 
    FROM poses 
      INNER JOIN transitive_poses ON poses.id = transitive_poses.pose_id 
      INNER JOIN categories ON categories.id = transitive_poses.category_id 
      WHERE categories.id = ?`
  );
  const rowsPoses = queryPoses.all(rowsCategory.id);
  return { ...rowsCategory, poses: [...rowsPoses] };
}

async function getCategoryByName(name) {
  const queryCategory = dbLite.prepare(
    `SELECT *
    FROM categories
    WHERE categories.category_name = ? COLLATE NOCASE`
  );
  const rowsCategory = queryCategory.get(name);
  const queryPoses = dbLite.prepare(
    `SELECT
    poses.id, category_name, english_name, sanskrit_name_adapted, sanskrit_name, translation_name, pose_description pose_benefits,
    url_svg, url_png, url_svg_alt
    FROM poses
      INNER JOIN transitive_poses ON poses.id = transitive_poses.pose_id
      INNER JOIN categories ON categories.id = transitive_poses.category_id
      WHERE categories.category_name = ?`
  );
  const rowsPoses = queryPoses.all(rowsCategory.category_name);
  return { ...rowsCategory, poses: [...rowsPoses] };
}

async function getPoses() {
  const query = dbLite.prepare("SELECT * FROM poses");
  const rows = query.all();
  return rows;
}

async function getPosesSorted() {
  const query = dbLite.prepare(
    "SELECT * FROM poses ORDER BY poses.english_name ASC"
  );
  const rows = query.all();
  return rows;
}

async function getPoseByName(name) {
  const query = dbLite.prepare(
    "SELECT * FROM poses WHERE poses.english_name = ? COLLATE NOCASE"
  );
  const row = query.get(name);
  return row;
}

async function getPoseById(id) {
  const query = dbLite.prepare("SELECT * FROM poses WHERE id = ?");
  const row = query.get(id);
  return row;
}

async function getPosesByDifficulty(level) {
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

async function getPosesByCategoryAndDifficulty(category, difficulty) {
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
  const rows = query.all(category, difficulty);
  return rows;
}

module.exports = {
  getBaseURL,
  getCategories,
  getCategoryByName,
  getPoses,
  getPosesSorted,
  getCategoryById,
  getPoseByName,
  getPoseById,
  getPosesByDifficulty,
  getPosesByCategoryAndDifficulty,
};

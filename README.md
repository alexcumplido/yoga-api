# Yoga API 🧘‍♀️

API Rest returning yoga categories and poses including basic info and images. If your response looks different, it is normal, modifications can happen.

This API is hosted on [Render](https://render.com/), and includes custom and already existing data from projects. Credits for the data to [rebeccaestes](https://github.com/rebeccaestes/yoga_api) - [chrisman](https://github.com/Stuwert/yoga-builder).

## Endpoints usage

**Request base URL:**

```
https://yoga-api-nzy4.onrender.com/v1/api
```

**Response:**

```json
{
  "baseURL": "https://yoga-api-nzy4.onrender.com/v1/api",
  "categories": "https://yoga-api-nzy4.onrender.com/v1/categories",
  "categoryById": "https://yoga-api-nzy4.onrender.com/v1/categories/:id",
  "categoryByName": "https://yoga-api-nzy4.onrender.com/v1/categories/catName/:name",
  "poses": "https://yoga-api-nzy4.onrender.com/v1/poses",
  "poseById": "https://yoga-api-nzy4.onrender.com/v1/poses/:id",
  "poseByName": "https://yoga-api-nzy4.onrender.com/v1/poses/poseName/:name",
  "posesAlphabetically": "https://yoga-api-nzy4.onrender.com/v1/poses?sort=true",
  "posesByLevel": "https://yoga-api-nzy4.onrender.com/v1/poses?level=beginner",
  "posesByCategoryAndLevel": "https://yoga-api-nzy4.onrender.com/v1/poses?category=name&level=difficulty"
}
```

The base URL is the root of the URL. If you ever make a request and you get back a 404 NOT FOUND response, then check the base URL first.

## Categories

### **Endpoints**

- `/categories` -- get all categories
- `/categories/:id` -- get poses from category by Id
- `/categories/catName/:name` -- get poses from category by Name

**Example request categories:**

```
https://yoga-api-nzy4.onrender.com/v1/categories
```

**Example response:**

```json
[
  {
    "id": 1,
    "category_name": "Core Yoga",
    "category_description": "Engage your abdominal muscles with core yoga poses that build a strong and stable center like Boat Pose, Dolphin Pose and Side Plank Pose."
  },
  {
    "id": 2,
    "category_name": "Seated Yoga",
    "category_description": " Yoga practice with seated poses that help you find better alignment, increase your flexibility, and relieve lower back pain and discomfort. Tone the belly, massage your internal organs, and relieve lower back pain in these seated yoga poses. "
  }
]
```

**Example request category by id or name:**

```
https://yoga-api-nzy4.onrender.com/v1/categories/4
https://yoga-api-nzy4.onrender.com/v1/categories/catName/Chest Opening Yoga
```

**Example response:**

```json
{
  "id": 4,
  "category_name": "Chest Opening Yoga",
  "category_description": "Open your heart and shoulders in chest opening yoga poses like Camel Pose, Fish Pose and Wild Thing.",
  "poses": [ {...}, {...}, {...}, {...}, {...}]

}
```

**Example category not found:**

```
HTTP/1.0 400 Bad request
Content-Type: application/json
```

```json
{
  "message": "category not found"
}
```

## Poses

### **Endpoints**

- `/poses` -- get all poses
- `/poses/poseId/:id` -- get pose by id
- `/poses/poseName/:name` -- get pose by name (name must be in english not in sanskrit)
- `/poses?sort=true` -- get poses sorted alphabetically by english name
- `/poses?level=difficulty` -- get poses by level replacing "difficulty" by: beginner, intermediate or expert
- `/poses?category=name&level=beginner` -- get poses by difficulty in a named category

**Example request poses:**

```
https://yoga-api-nzy4.onrender.com/v1/poses
```

**Example response:**

```json
[ {...}, {...}, {...}, {...}, {...}]
```

**Example request pose by Id or by name:**

```
https://yoga-api-nzy4.onrender.com/v1/poses/5
https://yoga-api-nzy4.onrender.com/v1/poses/poseName/butterfly
```

**Example response:**

```json
{
  "id": 5,
  "english_name": "Butterfly",
  "sanskrit_name_adapted": "Baddha Konasana",
  "sanskrit_name": "Baddha Koṇāsana",
  "translation_name": "baddha = bound, koṇa = angle, āsana = posture",
  "pose_description": "In sitting position, bend both knees and drop the knees to each side, opening the hips.  Bring the soles of the feet together and bring the heels as close to the groin as possible, keeping the knees close to the ground.  The hands may reach down and grasp and maneuver the feet so that the soles are facing upwards and the heels and little toes are connected.  The shoulders should be pulled back and no rounding of the spine.",
  "pose_benefits": "Opens the hips and groins.  Stretches the shoulders, rib cage and back.  Stimulates the abdominal organs, lungs and heart.",
  "url_svg": "https://res.cloudinary.com/dko1be2jy/image/upload/fl_sanitize/v1676483074/yoga-api/5_i64gif.svg",
  "url_png": "https://res.cloudinary.com/dko1be2jy/image/upload/fl_sanitize/v1676483074/yoga-api/5_i64gif.png",
  "url_svg_alt": "https://www.dropbox.com/s/3h2pts6xbn28dh7/butterfly%3F.svg?raw=1"
}
```

**Example pose not found:**

```
HTTP/1.0 400 Bad request
Content-Type: application/json
```

```json
{
  "message": "pose not found"
}
```

## Installation

```shell
    # Clone repo
    $ git clone git@github.com:alexcumplido/yoga-api.git
```

```shell
    # Install dependencies
    npm install
    yarn install
```

```shell
    # Run project
    npm start
    yarn start
```

## Contributing

1. Fork the repo
2. Create a new branch
3. Implement changes
4. Commit and submit a pull request with a description

## Contact

alexcubou@gmail.com

[https://www.linkedin.com/in/alexandrecb/](https://www.linkedin.com/in/alexandrecb/)

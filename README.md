# Yoga API 🧘‍♀️

🚧🚨🧘‍♀️ **_UPDATE: Migrating from MongoDB to a local SQLite database. Expect service interruptions._** 🧘‍♀️🚨🚧🧘

API Rest returning yoga categories and postures in a JSON format. If your response looks different, it is normal, modifications can happen.

This API is hosted on [Render](https://render.com/).Information for each pose as well as images can be found. Includes data from existing projects and new endpoints. Credits for the data to [rebeccaestes](https://github.com/rebeccaestes/yoga_api) - [chrisman](https://github.com/Stuwert/yoga-builder)

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
  "categoryName": "https://yoga-api-nzy4.onrender.com/v1/categories/:name",
  "poses": "https://yoga-api-nzy4.onrender.com/v1/poses",
  "posesAlphabetically": "https://yoga-api-nzy4.onrender.com/v1/poses?sort=true",
  "poseName": "https://yoga-api-nzy4.onrender.com/v1/poses/poseName/:name",
  "poseId": "https://yoga-api-nzy4.onrender.com/v1/poses/poseId/:id"
}
```

The base URL is the root of the URL. If you ever make a request and you get back a 404 NOT FOUND response, then check the base URL first.

## Categories

### **Endpoints**

- `/categories` -- get all categories
- `/categories/:name` -- get category

**Example request categories:**

```
https://yoga-api-nzy4.onrender.com/v1/categories
```

**Example response:**

```json
{
  "items": [
    {
      "id": 1,
      "name": "Core Yoga Poses",
      "short_name": "core_yoga_poses",
      "description": "Engage your abdominal muscles with core yoga poses that build a strong and stable center like Boat Pose",
      "yoga_poses": [
        {
          "id": 1,
          "sanskrit_name": "Navasana",
          "english_name": "Boat"
        }
      ]
    },
    {
      "id": 2,
      "name": "Seated Yoga Poses",
      "short_name": "seated_yoga_poses",
      "description": "Stay supple in your yoga practice with twisting asanas",
      "yoga_poses": []
    }
  ]
}
```

**Example request category by name:**

```
https://yoga-api-nzy4.onrender.com/v1/categories/core yoga poses
```

**Example response:**

```json
{
  "id": 1,
  "name": "Core Yoga Poses",
  "short_name": "core_yoga_poses",
  "description": "Engage your abdominal muscles with core yoga poses that build a strong and stable center like Boat Pose, Dolphin Pose and Side Plank Pose.",
  "yoga_poses": [
    {
      "id": 1,
      "sanskrit_name": "Navasana",
      "english_name": "Boat"
    }
  ]
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
- `/poses?sort=true` -- set optional query param and get poses sorted alphabetically by english name
- `/poses/poseName/:name` -- get pose by name (name must be in english not in sanskrit)
- `/poses/poseId/:id` -- get pose by id

**Example request poses:**

```
https://yoga-api-nzy4.onrender.com/v1/yoga/poses
```

**Example response:**

```json
{
  "poses": [
    {
      "pose_id": 1,
      "sanskrit_name": "Navasana",
      "english_name": "Boat",
      "difficulty": "Intermediate",
      "description": "From a seated position the feet are lifted up so that the thighs are angled about 45-50 degrees relative to the earth.",
      "benefits": "Strengthens the abdomen, hip flexors, and spine.  Stimulates the kidneys, thyroid and prostate glands, and intestines.",
      "img_url_svg": "https://res.cloudinary.com/dko1be2jy/image/upload/fl_sanitize/v1676483071/yoga-api/1_txmirf.svg",
      "img_url_jpg": "https://res.cloudinary.com/dko1be2jy/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1676483071/yoga-api/1_txmirf.jpg",
      "img_url_svg_alt": "https://www.dropbox.com/s/4m64ztxkj8a4dab/boatstraightlegs.svg?raw=1"
    }
  ]
}
```

**Example request pose by name:**

```
https://yoga-api-nzy4.onrender.com/v1/poses/poseName/boat
```

**Example response:**

```json
{
  "pose_id": 1,
  "sanskrit_name": "Navasana",
  "english_name": "Boat",
  "difficulty": "Intermediate",
  "description": "From a seated position the feet are lifted up so that the thighs are angled about 45-50 degrees relative to the earth.",
  "benefits": "Strengthens the abdomen, hip flexors, and spine.  Stimulates the kidneys, thyroid and prostate glands, and intestines.",
  "img_url_svg": "https://res.cloudinary.com/dko1be2jy/image/upload/fl_sanitize/v1676483071/yoga-api/1_txmirf.svg",
  "img_url_jpg": "https://res.cloudinary.com/dko1be2jy/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1676483071/yoga-api/1_txmirf.jpg",
  "img_url_svg_alt": "https://www.dropbox.com/s/4m64ztxkj8a4dab/boatstraightlegs.svg?raw=1"
}
```

**Example request pose by id:**

```
https://yoga-api-nzy4.onrender.com/v1/poses/poseId/1
```

**Example response:**

```json
{
  "pose_id": 1,
  "sanskrit_name": "Navasana",
  "english_name": "Boat",
  "difficulty": "Intermediate",
  "description": "From a seated position the feet are lifted up so that the thighs are angled about 45-50 degrees relative to the earth.",
  "benefits": "Strengthens the abdomen, hip flexors, and spine.  Stimulates the kidneys, thyroid and prostate glands, and intestines.",
  "img_url_svg": "https://res.cloudinary.com/dko1be2jy/image/upload/fl_sanitize/v1676483071/yoga-api/1_txmirf.svg",
  "img_url_jpg": "https://res.cloudinary.com/dko1be2jy/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1676483071/yoga-api/1_txmirf.jpg",
  "img_url_svg_alt": "https://www.dropbox.com/s/4m64ztxkj8a4dab/boatstraightlegs.svg?raw=1"
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

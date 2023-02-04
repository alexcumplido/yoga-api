# Yoga API 🧘‍♀️

API Rest returning yoga categories and postures in a JSON format. If your response looks different, it is normal, modifications can happen.

APIs about yoga hosted on Heroku went down due to policy changes. This one is hosted on [Render](https://render.com/). Includes data from existing projects and new endpoints. Credits for the data to [rebeccaestes](https://github.com/rebeccaestes/yoga_api) - [cc-smith](https://github.com/cc-smith/yoga-poses)

## Endpoints usage

**Request base URL:**

```
https://yoga-api-nzy4.onrender.com/v1/api
```

**Response:**

```json
{
  "baseURL": "https://yoga-api-nzy4.onrender.com/v1/api",
  "categories": "https://yoga-api-nzy4.onrender.com/api/v1/categories",
  "categoryName": "https://yoga-api-nzy4.onrender.com/v1/categories/:name",
  "poses": "https://yoga-api-nzy4.onrender.com/v1/poses",
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
- `/poses/poseName/:name` -- get pose by name (english name)
- `/poses/poseId/:id` -- get pose by id

**Example request poses:**

```
https://yoga-api-nzy4.onrender.com/v1/yoga/poses
```

**Example response:**

```json
{
  "items": [
    {
      "id": 1,
      "sanskrit_name": "Navasana",
      "english_name": "Boat",
      "yoga_categories": []
    },
    {
      "id": 2,
      "sanskrit_name": "Ardha Navasana",
      "english_name": "Half-Boat",
      "yoga_categories": []
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
  "id": 1,
  "sanskrit_name": "Navasana",
  "english_name": "Boat",
  "yoga_categories": []
}
```

**Example request pose by id:**

```
https://yoga-api-nzy4.onrender.com/v1/poses/poseId/4
```

**Example response:**

```json
{
  "id": 4,
  "sanskrit_name": "Setu Bandha Sarvangasana",
  "english_name": "Bridge",
  "yoga_categories": []
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

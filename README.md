# Yoga API 🧘‍♀️

An API returning yoga categories and postures in a JSON format. If your response looks different, it is normal. It is a work in progress, and modifications can happen. It is deployed live at [Render](https://render.com/).

After Heroku policy changes, several APIs providing data about yoga stopped working. Currently, I am plugging data from some of those APIs into this one creating new endpoints.

Credits to those developers: [rebeccaestes](https://github.com/rebeccaestes/yoga_api) - [cc-smith](https://github.com/cc-smith/yoga-poses)

## How can I use this API?

**Request base URL:**

```
https://yoga-api-nzy4.onrender.com/api/yoga
```

**Response:**

```
HTTP 200 OK
Content-Type: application/json

{
    "baseURL": "https://yoga-api-nzy4.onrender.com/api/yoga/",
    "categories": "https://yoga-api-nzy4.onrender.com/api/yoga/categories/",
    "categoryName": "https://yoga-api-nzy4.onrender.com/api/yoga/category/:categoryName/",
    "poses": "https://yoga-api-nzy4.onrender.com/api/yoga/poses/",
    "poseName": "https://yoga-api-nzy4.onrender.com/api/yoga/pose/:poseName/"
    "poseId": https://yoga-api-nzy4.onrender.com/api/yoga/poseId/:id/
}

```

The base URL is the root of the URL. If you ever make a request and you get back a 404 NOT FOUND response, then check the base URL first.

## Categories

### **Endpoints**

- `/categories/` -- get all categories
- `/category/:categoryName/` -- get specific category

**Example request categories:**

```
https://yoga-api-nzy4.onrender.com/api/yoga/categories/
```

**Example response:**

```
HTTP/1.0 200 OK
Content-Type: application/json

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
                    "english_name": "Boat",
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
https://yoga-api-nzy4.onrender.com/api/yoga/category/core yoga poses
```

**Example response:**

```
HTTP/1.0 200 OK
Content-Type: application/json

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

{
    "message": "category not found"
}
```

## Poses

### **Endpoints**

- `/poses/` -- get all poses
- `/pose/:poseName` -- get specific pose by english name
- `/poseId/:id` -- get specific pose by id

**Example request poses:**

```
https://yoga-api-nzy4.onrender.com/api/yoga/poses/
```

**Example response:**

```
HTTP/1.0 200 OK
Content-Type: application/json

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
https://yoga-api-nzy4.onrender.com/api/poses/boat/
```

**Example response:**

```
HTTP/1.0 200 OK
Content-Type: application/json

{
    "id": 1,
    "sanskrit_name": "Navasana",
    "english_name": "Boat",
    "yoga_categories": []
}
```

**Example request pose by id:**

```
https://yoga-api-nzy4.onrender.com/api/poseId/4
```

**Example response:**

```
HTTP/1.0 200 OK
Content-Type: application/json

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

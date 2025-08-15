# Yoga API 🧘‍♀️

🛠️ **UDPDATE** New Docker file and compose added. Faster setup locally using the docker. 🛠️
- [Check the usage section](#installation)

API Rest returning yoga categories and poses including details and images in SVG and png format. If your response looks different, it is normal, modifications can happen. Any new pose or suggestion feel free to reach out or open an issue. The base url is:

`https://yoga-api-nzy4.onrender.com/v1`

## Endpoints usage (get)

- `/categories` -- all categories
  - `/categories?id=value` -- category by id
  - `/categories?name=value` -- category by name
  - `/categories?id=value&level=value` -- category poses filtered by level
- `/poses` -- all poses
  - `/poses?id=value` -- pose by id
  - `/poses?name=value` -- pose name
  - `/poses?level=value` -- poses filtered by level

\* **level**: beginner, intermediate, expert

\* **name** : english and not sanskrit or adpated

\* nothing is case-sensitive

**Request base URL:**

```
https://yoga-api-nzy4.onrender.com/v1
```

**Response:**

```json
{
  "base": "https://yoga-api-nzy4.onrender.com/v1",
  "categories": "/categories",
  "category-by-id": "/categories?id=value",
  "category-by-name": "/categories?name=value",
  "category-byID-and-level": "/categories?id=value&level=value",
  "poses": "/poses",
  "pose-by-id": "/poses?id=value",
  "pose-by-name": "/poses?name=value",
  "poses-by-level": "/poses?level=value"
}
```

The base URL is the root of the URL. If you ever make a request and you get back a 404 NOT FOUND response, then check the base URL first.

## Categories

### **Endpoints**

- `/categories`
- `/categories?id=value`
- `/categories?name=value`
- `/categories?id=value&level=value`

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
    "category_description": "Engage your abdominal muscles with core yoga poses that build a strong and stable center like Boat Pose, Dolphin Pose and Side Plank Pose.",
    "poses": [ {...}, {...}, {...}, {...}, {...}]
  },
  {
    "id": 2,
    "category_name": "Seated Yoga",
    "category_description": " Yoga practice with seated poses that help you find better alignment, increase your flexibility, and relieve lower back pain and discomfort. Tone the belly, massage your internal organs, and relieve lower back pain in these seated yoga poses. ",
    "poses": [ {...}, {...}, {...}, {...}, {...}]
  }
]
```

**Example request category by id or name:**

```
https://yoga-api-nzy4.onrender.com/v1/categories?id=4
https://yoga-api-nzy4.onrender.com/v1/categories?name=Chest Opening Yoga
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

**Example request category poses filtered by level:**

```
https://yoga-api-nzy4.onrender.com/v1/categories?id=5&level=beginner
```

**Example response:**

```json
 {
  "id": 5,
  "category_name": "Backbend Yoga",
  "category_description": "Discover the powerful effects of yoga backbends with step-by-step instructions, sequences, and expert advice to keep your practice pain-free.",
  "poses": [
     {
      "id": 8,
      "category_name": "Backbend Yoga",
      "difficulty_level": "Beginner",
      "english_name": "Cow",
      "sanskrit_name_adapted": "Bitilasana",
      "sanskrit_name": "Bitilāsana",
      "translation_name": "bitil = cow, āsana = posture",
      "pose_benefits": "From  box neutral the ribcage is lifted with a gentle sway in the low back.  The tailbone lifts up into dog tilt.  The eyes are soft and the gaze is to the sky.",
      "url_svg": "https://res.cloudinary.com/dko1be2jy/image/upload/fl_sanitize/v1676483077/yoga-api/8_wi10sn.svg",
      "url_png": "https://res.cloudinary.com/dko1be2jy/image/upload/fl_sanitize/v1676483077/yoga-api/8_wi10sn.png",
      "url_svg_alt": "https://www.dropbox.com/s/neau4ceai1rskh6/cow.svg?raw=1"
    },
    {...},
    {...},
    {...}
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

- `/poses`
- `/poses?id=value`
- `/poses?name=value`
- `/poses?level=value`

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
https://yoga-api-nzy4.onrender.com/v1/poses?id=5
https://yoga-api-nzy4.onrender.com/v1/poses?name=butterfly
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

**Example request poses level:**

```
https://yoga-api-nzy4.onrender.com/v1/poses?level=intermediate
```

**Example response:**

```json
{
  "id": 2,
  "difficulty_level": "Intermediate",
  "poses": [ {...}, {...}, {...}, {...}, {...}]
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

# DOCKER

```
  # Build the image
  docker build -t yoga-api .

  # Run a container using the base image
  docker run --name dv-yoga-api -p 8000:8000 yoga-api

  # Or using docker compose
  docker compose up -d
```

# NPM or YARN

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

## Credits

This API includes custom data and info from already existing projects. Credits to:

- [rebeccaestes](https://github.com/rebeccaestes/yoga_api) (category description and alternative "url_svg_alt")
- [chrisman](https://github.com/Stuwert/yoga-builder) (poses details)

## Contact

📫 Reach me via [linkedin](https://www.linkedin.com/in/alexandrecb/)

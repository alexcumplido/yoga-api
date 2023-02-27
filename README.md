# Yoga API 🧘‍♀️

API Rest returning yoga categories and poses including basic info and images. If your response looks different, it is normal, modifications can happen.

## Get endpoints usage

- `https://yoga-api-nzy4.onrender.com/v1` -- Render deployment url (nothing there)
- `/api` -- get the base url
- `/categories` -- get all categories
- `/categories/:id` -- get a category by id
- `/categories/catName/:name` -- get a category by name
- `/poses` -- get all poses
- `/poses/:id` -- get a pose by id
- `/poses/poseName/:name` -- get a pose by name (name must be in english not in sanskrit)
- `/poses?sort=true` -- get all poses sorted alphabetically by english name
- `/poses?level=difficulty` -- get poses by level by query param: beginner, intermediate, expert
- `/poses?category=name&level=beginner` -- get poses by difficulty in a named category

**Request base URL:**

```
https://yoga-api-nzy4.onrender.com/v1/api
```

**Response:**

```json
{
  "base": "https://yoga-api-nzy4.onrender.com/v1/api",
  "categories": "https://yoga-api-nzy4.onrender.com/v1/categories",
  "category-by-id": "https://yoga-api-nzy4.onrender.com/v1/categories/:id",
  "category-by-name": "https://yoga-api-nzy4.onrender.com/v1/categories/name/:name",
  "poses": "https://yoga-api-nzy4.onrender.com/v1/poses",
  "pose-by-Id": "https://yoga-api-nzy4.onrender.com/v1/poses/:id",
  "pose-by-Name": "https://yoga-api-nzy4.onrender.com/v1/poses/name/:name",
  "poses-alphabetically": "https://yoga-api-nzy4.onrender.com/v1/poses?sort=true",
  "poses-by-Level": "https://yoga-api-nzy4.onrender.com/v1/poses?level=beginner",
  "poses-by-category-level": "https://yoga-api-nzy4.onrender.com/v1/poses?category=name&level=difficulty"
}
```

The base URL is the root of the URL. If you ever make a request and you get back a 404 NOT FOUND response, then check the base URL first.

## Categories

### **Endpoints**

- `/categories`
- `/categories/:id`
- `/categories/name/:name`

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
https://yoga-api-nzy4.onrender.com/v1/categories/4
https://yoga-api-nzy4.onrender.com/v1/categories/name/Chest Opening Yoga
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

- `/poses`
- `/poses/:id`
- `/poses/name/:name`
- `/poses?sort=true`
- `/poses?level=difficulty`
- `/poses?category=name&level=beginner`

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
https://yoga-api-nzy4.onrender.com/v1/poses/name/butterfly
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

## Credits

This API includes custom data and info from already existing projects. Credits to:

- [rebeccaestes](https://github.com/rebeccaestes/yoga_api) (category data the "url_svg_alt" image)
- [chrisman](https://github.com/Stuwert/yoga-builder) (poses details)

## Contact

📫 Reach me at alexcubou@gmail.com or via [linkedin](https://www.linkedin.com/in/alexandrecb/)

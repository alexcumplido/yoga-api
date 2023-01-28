# Yoga API 🧘‍♀️

Yoga API serves categories and yoga poses upon HTTP request. The API is hosted in [Render](https://render.com/). This documentation should help you use the endpoints. Currently, 12 categories and 48 postures can be requested. 

## Why Yoga Poses ?

After Heroku policy changes around November 2022 some working APIs providing data about yoga went down. To keep offering a reliable API I am pluging data from some of these projects into Yoga Api.

Credits to [cc-smith](https://github.com/cc-smith/yoga-poses) - [rebeccaestes](https://github.com/rebeccaestes/yoga_api) - [chrisman](https://github.com/Stuwert/yoga-builder)


## How can I use it?

Base URL for Yoga API is:

```
https://yoga-api-nzy4.onrender.com/api/yoga
```

```
HTTP 200 OK
Content-Type: application/json

{
    "categories": "https://yoga-api-nzy4.onrender.com/api/yoga/categories",
    "category": "https://yoga-api-nzy4.onrender.com/api/yoga/categories/core yoga poses",  
    "poses": "https://yoga-api-nzy4.onrender.com/api/yoga/poses", 
    "posture": "https://yoga-api-nzy4.onrender.com/api/yoga/poses/boat", 
}
```
The base url is the root of the url, if you ever make a request and you get back a 404 NOT FOUND response then check the Base URL first.


## Categories

### **Endpoint**
- ```/categories``` -- get all the categories including related postures for each one
- ```/categories/:nameCategory``` -- get a specific category including related postures

**Example request to get all :**
```
https://yoga-api-nzy4.onrender.com/api/yoga/categories
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
            "yoga_poses": [
                {
                    "id": 1,
                    "sanskrit_name": "Navasana",
                    "english_name": "Boat",
                }
            ]
        }
    ]
}

```
**Example request to get specific category:**
```
https://yoga-api-nzy4.onrender.com/api/yoga/categories/core yoga poses
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
        },
        {
            "id": 2,
            "sanskrit_name": "Ardha Navasana",
            "english_name": "Half-Boat"
        },
        {
            "id": 7,
            "sanskrit_name": "Marjaryasana",
            "english_name": "Cat"
        }
    ]
}
```

## Poses

### **Endpoint**
- ```/poses/``` -- get all the poses 
- ```/poses/:namePose``` -- get an individual pose

**Example request to get all poses:**
```
https://yoga-api-nzy4.onrender.com/api/yoga/poses/
```
**Example response :**
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
**Example request to get an individual pose :**
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
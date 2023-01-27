# Yoga API 🧘‍♀️

Yoga API will serve you yoga categories and postures. This documentation should help you use the endpoints with HTTP requests. At the moment 12 categories and 48 postures can be requested. 

This is a work in progress, be aware your response can look different. This is because changes can be made over time. 

## Why Yoga Poses ?

After Heroku policy changes around November, some active API about yoga went down. Currently, I am taking the data in some developed projects.

Credits for those project developers: 

[cc-smith](https://github.com/cc-smith/yoga-poses)

[rebeccaestes](https://github.com/rebeccaestes/yoga_api)

[chrisman](https://github.com/Stuwert/yoga-builder)


## Endpoints

### Categories endpoint

```
https://yoga-api-nzy4.onrender.com/api/yoga/categories
```

Endpoint to get all the yoga categories included associated postures in each one.

```
{
    "items": [
        {
            "id": 1,
            "name": "Core Yoga Poses",
            "short_name": "core_yoga_poses",
            "description": "Engage your abdominal muscles with core yoga poses that build a strong and stable center like Boat Pose",
            "parent_yoga_category_id": null
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
            "parent_yoga_category_id": null
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

### Poses endpoint
```
https://yoga-api-nzy4.onrender.com/api/yoga/poses
```

Endpoint to get all the yoga postures included and its associated categories.

```
"items": [
        {
            "id": 1,
            "sanskrit_name": "Navasana",
            "english_name": "Boat",
            "yoga_categories": [
                {
                    "id": 1,
                    "name": "Core Yoga Poses",
                    "short_name": "core_yoga_poses",
                    "description": "Engage your abdominal muscles with core yoga poses that build a strong and stable center like Boat Pose",
                    "parent_yoga_category_id": null
                }
            ]
        },
        {
            "id": 2,
            "sanskrit_name": "Ardha Navasana",
            "english_name": "Half-Boat",
            "yoga_categories": [
                {
                    "id": 1,
                    "name": "Core Yoga Poses",
                    "short_name": "core_yoga_poses",
                    "description": "Engage your abdominal muscles with core yoga poses that build a strong and stable center like Boat Pose",
                    "parent_yoga_category_id": null
                }
            ]
        },
```

### Single pose endpoint
```
https://yoga-api-nzy4.onrender.com/api/yoga/boat
```

Endpoint to a specific yoga posture and its associated categories. The name of the posture must be in English
Replace the last query parameter with the pose you want to query.

```
{
    "id": 1,
    "sanskrit_name": "Navasana",
    "english_name": "Boat",
    "yoga_categories": [
        {
            "id": 1,
            "name": "Core Yoga Poses",
            "short_name": "core_yoga_poses",
            "description": "Engage your abdominal muscles with core yoga poses that build a strong and stable center like Boat Pose",
            "parent_yoga_category_id": null
        },
        {
            "id": 2,
            "name": "Seated Yoga Poses",
            "short_name": "seated_yoga_poses",
            "description": "Stay supple in your yoga practice with twisting asanas"
            "parent_yoga_category_id": null
        }
    ]
}
```
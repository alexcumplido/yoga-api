# Yoga Poses

Welcome to Yoga Poses, the API for people interested in accessing categories and yoga postures. This documentation should help you using the endpoints with HTTP request. 

This is a work in progress, be aware your response can look different. This is because changes will be made and more data will be added. 

## Why Yoga Poses ?

It is difficult to find working API about the yoga ecosistem. Some of them went down after Heroku made policy changes around November. Si I am taking the data that existent, but not working, API about yoga offer. 

Credits to existent yoga projects. Here are the users and repositories from this project is based on:

[cc-smith](https://github.com/cc-smith/yoga-poses)

[rebeccaestes](https://github.com/rebeccaestes/yoga_api)

[chrisman](https://github.com/Stuwert/yoga-builder)


## Endpoints

```
https://yoga-poses-l5sh.onrender.com/api/yoga/categories
```

Endpoint to get all the yoga categories including associated postures in each one

```
{
    "items": [
        {
            "id": 1,
            "name": "Core Yoga Poses",
            "short_name": "core_yoga_poses",
            "description": "Engage your abdominal muscles with core yoga poses that build a strong and stable center like Boat Pose",
            "parent_yoga_category_id": null,
            "created_at": "2018-07-01T04:32:01.589Z",
            "updated_at": "2018-07-01T04:32:01.589Z",
            "yoga_poses": [
                {
                    "id": 1,
                    "sanskrit_name": "Navasana",
                    "english_name": "Boat",
                    "img_url": "https://www.dropbox.com/s/4m64ztxkj8a4dab/boatstraightlegs.svg?raw=1",
                    "created_at": "2018-07-01T04:32:01.698Z",
                    "updated_at": "2018-07-01T04:32:01.698Z"
                }
            ]
        },
        {
            "id": 2,
            "name": "Seated Yoga Poses",
            "short_name": "seated_yoga_poses",
            "description": "Stay supple in your yoga practice with twisting asanas",
            "parent_yoga_category_id": null,
            "created_at": "2018-07-01T04:32:01.596Z",
            "updated_at": "2018-07-01T04:32:01.596Z",
            "yoga_poses": [
                {
                    "id": 1,
                    "sanskrit_name": "Navasana",
                    "english_name": "Boat",
                    "img_url": "https://www.dropbox.com/s/4m64ztxkj8a4dab/boatstraightlegs.svg?raw=1",
                    "created_at": "2018-07-01T04:32:01.698Z",
                    "updated_at": "2018-07-01T04:32:01.698Z"
                }
            ]
        }
    ]
}

```

```
https://yoga-poses-l5sh.onrender.com/api/yoga/poses
```
Endpoint to get all the yoga postures and its associated categories

```
"items": [
        {
            "id": 1,
            "sanskrit_name": "Navasana",
            "english_name": "Boat",
            "img_url": "https://www.dropbox.com/s/4m64ztxkj8a4dab/boatstraightlegs.svg?raw=1",
            "created_at": "2018-07-01T04:32:01.698Z",
            "updated_at": "2018-07-01T04:32:01.698Z",
            "yoga_categories": [
                {
                    "id": 1,
                    "name": "Core Yoga Poses",
                    "short_name": "core_yoga_poses",
                    "description": "Engage your abdominal muscles with core yoga poses that build a strong and stable center like Boat Pose",
                    "parent_yoga_category_id": null,
                    "created_at": "2018-07-01T04:32:01.589Z",
                    "updated_at": "2018-07-01T04:32:01.589Z"
                }
            ]
        },
        {
            "id": 2,
            "sanskrit_name": "Ardha Navasana",
            "english_name": "Half-Boat",
            "img_url": "https://www.dropbox.com/s/1nx0r94msxjwvyp/boatbentlegs.svg?raw=1",
            "created_at": "2018-07-01T04:32:01.770Z",
            "updated_at": "2018-07-01T04:32:01.770Z",
            "yoga_categories": [
                {
                    "id": 1,
                    "name": "Core Yoga Poses",
                    "short_name": "core_yoga_poses",
                    "description": "Engage your abdominal muscles with core yoga poses that build a strong and stable center like Boat Pose",
                    "parent_yoga_category_id": null,
                    "created_at": "2018-07-01T04:32:01.589Z",
                    "updated_at": "2018-07-01T04:32:01.589Z"
                }
            ]
        },
```


```
https://yoga-poses-l5sh.onrender.com/api/yoga/boat
```

Endpoint to a specific yoga posture and all the categories associated. Be aware name of the posture must be in english

```
{
    "id": 1,
    "sanskrit_name": "Navasana",
    "english_name": "Boat",
    "img_url": "https://www.dropbox.com/s/4m64ztxkj8a4dab/boatstraightlegs.svg?raw=1",
    "created_at": "2018-07-01T04:32:01.698Z",
    "updated_at": "2018-07-01T04:32:01.698Z",
    "yoga_categories": [
        {
            "id": 1,
            "name": "Core Yoga Poses",
            "short_name": "core_yoga_poses",
            "description": "Engage your abdominal muscles with core yoga poses that build a strong and stable center like Boat Pose",
            "parent_yoga_category_id": null,
            "created_at": "2018-07-01T04:32:01.589Z",
            "updated_at": "2018-07-01T04:32:01.589Z"
        },
        {
            "id": 2,
            "name": "Seated Yoga Poses",
            "short_name": "seated_yoga_poses",
            "description": "Stay supple in your yoga practice with twisting asanas"
            "parent_yoga_category_id": null,
            "created_at": "2018-07-01T04:32:01.596Z",
            "updated_at": "2018-07-01T04:32:01.596Z"
        }
    ]
}

```
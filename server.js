const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const PORT = process.env.PORT;
const baseURL = require('./resources/baseURL.json');
const yogacategories = require('./resources/categories.json');
const yogaposes = require('./resources/poses.json');

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html');
}),

app.get('/api/yoga/', (request, response) => {
    response.json(baseURL);
});


app.get('/api/yoga/routeCategories/:categories/:nameCategory?', (request, response) => {
    const categories = request.params.categories;
    const category = request.params.nameCategory;
    console.log(request.params)
    if (categories && category === undefined) {
        response.json(yogacategories);  
    } else if (categories  && category) {
        const singleCategory = yogacategories.items.find(function (element) {
            return element.name.toLowerCase() === category.toLowerCase();
        });
        response.json(singleCategory);
    } 
});


app.get('/api/yoga/routePoses/:poses/:poseName?', (request, response) => {
    const poses = request.params.poses;
    const posture = request.params.poseName;
    console.log(request.params)
    if (poses && posture === undefined) {
        response.json(yogaposes);
    } else if (poses == 'poses' && posture) {
        const singlePose = yogaposes.items.find(function (element) {
                return element.english_name.toLowerCase() === posture.toLowerCase();
        });
        response.json(singlePose);
    }
});

app.listen(PORT || 8000, () => {
 console.log(`Server running in port number ${PORT || 8000}`)
})



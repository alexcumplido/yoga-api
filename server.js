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

app.get('/api/yoga/:filterby?/:category?/:posename?', (request, response) => {
    const params = request.params.filterby;
    const paramsCategory = request.params.category;
    const paramsPose = request.params.posename;
    console.log(request.params)

    if(params === undefined && paramsCategory == undefined && paramsPose === undefined){
        response.json(baseURL);
    } else if (params == 'categories' && paramsCategory === undefined) {
        response.json(yogacategories);  
    } else if (params == 'categories' && paramsCategory) {
        const category = yogacategories.items.find(function (element) {
            return element.name.toLowerCase() === paramsCategory.toLowerCase();
        });
        response.json(category);
    } else if (params == 'poses') {
        if(paramsPose === undefined) {
            response.json(yogaposes);
        } else if (paramsPose) {
            const pose = yogaposes.items.find( function (element) {
                return element.english_name.toLowerCase() === paramsPose.toLowerCase();
            });
            response.json(pose);
        }
    }
});

app.listen(PORT || 8000, () => {
 console.log(`Server running in port number ${PORT || 8000}`)
})



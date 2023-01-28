const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const PORT = process.env.PORT;
const yogacategories = require('./yogacategories.json');
const yogaposes = require('./yogaposes.json');
const baseURL = require('./yogaBaseUrl.json');

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html');
}),

app.get('/api/yoga/:filterby?/:category?/:posename?', (request, response) => {
    const params = request.params.filterby;
    const paramsPose = request.params.posename;
    console.log(request.params)
    if(params === undefined && paramsPose === undefined){
        response.json(baseURL);
    } else if (params == 'categories') {
        response.json(yogacategories);
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



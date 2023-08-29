//repository give method using these method we can actully use those models
//models->how tables or database will look like

const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');


const setupAndStartServer = async () => {
    const app = express();

    app.use(bodyParser.json());
    app.use(express.text());
    app.use(bodyParser.urlencoded({extended:true}));

   
    app.listen(PORT, async () => {
        console.log(`Server started at ${PORT}`);
         
    })

}
setupAndStartServer(); 
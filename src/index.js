const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');
const jobs = require('./utils/job');
const TicketController = require('./controllers/ticket-controller');
const setupAndStartServer = async () => {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.post('/api/v1/tickets',TicketController.create);
   
    app.listen(PORT, async () => {
        console.log(`Server started at ${PORT}`);
        jobs();
         
     })

}
setupAndStartServer(); 
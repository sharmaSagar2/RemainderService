const express = require('express');
const bodyParser = require('body-parser');

const { PORT , REMINDER_BINDING_KEY} = require('./config/serverConfig');
//const {createChannel} = require('./utils/messageQueue');
const {subscribeMessage,createChannel} = require('./utils/messageQueue');
const jobs = require('./utils/job');
const TicketController = require('./controllers/ticket-controller');
const EmailService = require('./services/email-service');
const setupAndStartServer = async () => {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.post('/api/v1/tickets',TicketController.create);
    const channel = await createChannel();
    subscribeMessage(channel,EmailService.subscribeEvents ,REMINDER_BINDING_KEY)
    app.listen(PORT, async () => {
        console.log(`Server started at ${PORT}`);
        //jobs();
         
     })

}
setupAndStartServer();  
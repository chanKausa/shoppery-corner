const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config()
const App = express();

const router = require('./routes');

// loading all mongoose models
require('./model');

// IIF
// eslint-disable-next-line no-undef
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('Mongodb Connection successful'))
    .catch(console.log);

App.use(express.static('uploads'));

App.use(bodyParser.json({ limit: '20mb' }));
App.use(bodyParser.urlencoded({ extended: true }));


App.use('/api', router);


// eslint-disable-next-line no-undef
const server = App.listen(process.env.PORT, () => {
    // eslint-disable-next-line no-undef
    console.log('App is listening to ' + process.env.PORT)
});
server.on('connection', (socket) => {
    console.log(socket);
    // eslint-disable-next-line no-undef
    socket.setTimeout(Number(process.env.SOCKET_TIMEOUT));
})
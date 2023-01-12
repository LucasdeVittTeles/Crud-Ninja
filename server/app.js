const express = require('express');
const cors = require('cors')
const routes = require('./router/routes')
require('./connection');

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes)

/*app.post('/', (req, res) => {
 res.json(req.body)
})*/

module.exports = app;


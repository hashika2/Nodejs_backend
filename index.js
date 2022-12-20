const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const page = require('./routes/page.router');
const cors = require('cors');
const db = require('./model');

const app = express();
const port = 3600

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use('/api', page);



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
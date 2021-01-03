const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userRoute = require('./routes/userRoute');
const PORT = 3000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

app.get('/', (req, res) => res.send('Hello, World!'));

app.use(bodyParser.urlencoded({ extended: false }))

userRoute(app);
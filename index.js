require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const usersRouter = require('./controller/users/router');
const errorHandler = require('./middlewares/errorHandler');
const controllerLogin = require('./controller/login');

const app = express();
app.use(bodyParser.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', usersRouter);
app.post('/login', controllerLogin.login);
app.use(errorHandler);

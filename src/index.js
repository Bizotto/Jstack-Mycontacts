const express = require('express');
require('express-async-errors');

const app = express();

const routes = require('./routes');

app.use(express.json());
app.use(routes);
app.use((error, request, response, next) => {
  console.log('#### error handler');
  console.log(error);
  response.sendStatus(500);
});

app.listen(6969, () =>
  console.log('🔥🔥 server started at http://localhost:6969'),
);

const express = require('express');

const app = express();

const routes = require('./routes');

app.use(routes);

app.listen(6969, () =>
  console.log('🔥🔥 server started at http://localhost:6969'),
);

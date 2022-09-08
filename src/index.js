const express = require('express');

const app = express();

app.get('/', (request, response) => {
  response.send('hello world');
});
app.listen(6969, () => console.log('server started at http://localhost:6969'));

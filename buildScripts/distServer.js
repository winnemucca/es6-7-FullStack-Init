import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';
/* eslint-disable no-console */

const port = 3000;
const app = express();
//compression not for actual production nor is teh fake data
app.use(compression());
app.use(express.static('dist'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', function(req, res) {
  res.json([
    {"id":1, "firstName": "Bob", "lastName":"Smith", "email": "bob@gmail.com"},
    {"id":2, "firstName": "Jon", "lastName":"Smith", "email": "jon@gmail.com"},
    {"id":3, "firstName": "Rob", "lastName":"Smith", "email": "rob@gmail.com"}
  ])
})

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  }
  else {
    open('http://localhost: ' + port);
  }
});

import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';
/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler,{
  noInfo: true,
  publicPath: config.output.publicPath
}))

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
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

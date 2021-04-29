var serveStatic = require('serve-static');
var express = require('express');

var staticBasePath = './static';
 
var app = express()
 
app.use(serveStatic(staticBasePath, {'index': false}))
app.listen(8080, ()=>{
  console.log(`server running on port 8080`);
})
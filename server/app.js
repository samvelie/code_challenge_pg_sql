var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 3000;

/*** Build out a module to manage our treats requests. ***/




// Get static files
app.use(express.static('./server/public'));

// Get index.html
app.get('/', function(req, res) {
  res.sendFile(path.resolve('./server/public/views/index.html'));
});


app.listen(port, function() {
  console.log('Server running on port: ', port);
});

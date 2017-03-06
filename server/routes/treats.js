var router = require('express').Router();
var pg = require('pg');

var config = {
  database: 'phi',
  host: 'localhost',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 15000
};

var pool = new pg.Pool(config);
router.get('/', function(req, res) {
console.log('hit my get treats route');

pool.connect(function(err, client, done) {
  if(err){
    console.log(err);
    res.sendStatus(500)
  } else {
    client.query('SELECT * FROM treats;', function (err, result) {
      done();
      if(err){
        console.log(err);
        res.sendStatus(500) // the server exploded
      } else {
        console.log(result.rows);
        res.status(200).send(result.rows);
      }
    }); // end client.query
  }//end else statement inside pool.connect
});//end pool.connect
});//end router.get

module.exports = router;

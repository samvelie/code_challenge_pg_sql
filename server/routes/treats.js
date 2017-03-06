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
      res.sendStatus(500);
    } else {
      client.query('SELECT * FROM treats;', function (err, result) {
        done();
        if(err){
          console.log(err);
          res.sendStatus(500);
        } else {
          console.log(result.rows);
          res.status(200).send(result.rows);
        }
      }); // end client.query
    }//end else statement inside pool.connect
  });//end pool.connect
});//end router.get

router.get('/:search', function(req, res) {
  console.log('hit my search route', req.params.search);
  var sqlSearchTerm = '%' + req.params.search + '%';
  pool.connect(function(err, client, done) {
    if(err){
      console.log(err);
      res.sendStatus(500);
    } else {
      client.query('SELECT * FROM treats WHERE name ILIKE $1 OR description ILIKE $1 or pic ILIKE $1;',
      [sqlSearchTerm],
      function (err, result) {
        done();
        if(err){
          console.log(err);
          res.sendStatus(500);
        } else {
          console.log(result.rows);
          res.status(200).send(result.rows);
        }
      }); // end client.query
    }//end else statement inside pool.connect
  });//end pool.connect
});//end router.get

router.post('/', function(req,res){
  console.log('hit my post treats route with', req.body);
  var treatObject = req.body;
  pool.connect(function(err, client, done) {
    if(err){
      console.log(err);
      res.sendStatus(500);
    } else {
      client.query('INSERT INTO treats (name, description, pic) VALUES ($1, $2, $3);',
      [treatObject.name, treatObject.description, treatObject.url],
      function (err, result) {
        done();
        if(err){
          console.log(err);
          res.sendStatus(500);
        } else {
          console.log(result.rows);
          res.sendStatus(201);
        }
      }); // end client.query
    }//end else statement inside pool.connect
  });//end pool.connect
});//end router.post

module.exports = router;

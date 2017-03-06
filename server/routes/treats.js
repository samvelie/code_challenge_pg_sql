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
res.sendStatus(200);
});//end router.get

module.exports = router;

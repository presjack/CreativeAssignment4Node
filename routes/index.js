var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('index.html', { root: 'public' });
});

var listList = [
  {"store": "Wal-Mart", 
   "list": ["cups", "bowls", "pastry dishes"] },
  {"store": "Smith\'s",
   "list": ["bannanas", "onion"]}
];

router.get('/getList', function(req, res, next) {
  res.status(200).json(listList);
})

router.get('/saveList', function(req, res, next) {
  listList = JSON.parse(req.query.obj);
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('index.html', { root: 'public' });
});

var listList = [
  {"name": "Wal-Mart", 
   "itemsToBuy": ["cups", "bowls", "pastry dishes"] },
  {"name": "Smith\'s",
   "itemsToBuy": ["bannanas", "onion"]}
];

router.get('/getList', function(req, res, next) {
  res.status(200).json(listList);
})

router.get('/saveList', function(req, res, next) {
  listList = JSON.parse(req.query.obj);
});

module.exports = router;

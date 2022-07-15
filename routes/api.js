let express = require('express');
let router = express.Router();
let relust_data = require('../utils/response_data');

/* GET users listing. */

router.get('/', function(req, res, next) {
  res.json(relust_data('200',{
    list: [
      {
        'name': '测试1',
        'age': 141
      },
      {
        'name': '测试2',
        'age': 142
      },
      {
        'name': '测试3',
        'age': 143
      }
    ]
  }))
});


router.get('/list', function(req, res, next) {
  res.json(relust_data('200',{
    list: [
      {
        'name': '测试1',
        'age': 141
      },
      {
        'name': '测试2',
        'age': 142
      },
      {
        'name': '测试3',
        'age': 143
      }
    ]
  }))
});

module.exports = router;

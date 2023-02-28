var express = require('express');
var router = express.Router();
var { catalogApi } = require('../square.connect');

/* GET home page. */
router.get('/list', async function(req, res, next) {
    try {
        const response = await catalogApi.catalogInfo();
        console.log(response.result);
      } catch(error) {
        console.log(error);
      }
});

module.exports = router;

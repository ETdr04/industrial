var express = require('express');
var router = express.Router();
var Controller = require('../controllers/account');
var controller = new Controller();

router.get('/:id?', (req, res) => {
  controller.balanceActual(req.params.id, (err, rows) => {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.get('/:id?/history', (req, res) => {
  controller.allHistory(req.params.id, (err, rows) => {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.post('/verify', function(req, res) {
  controller.verify(req.body, (err, rows) => {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.post('/transfer', (req, res) => {
  controller.transferSum(req.body, (err, rows) => {
    if (err) {
      res.json(err);
    } else {
      controller.transferMin(req.body, (err, rows) => {
        if (err) {
          res.json(err);
        } else {
          controller.transferHist(req.body, (err, rows) => {
            if (err) {
              res.json(err);
            } else {
              res.json(rows);
            }
          });
        }
      });
    }
  });
});

module.exports = router;

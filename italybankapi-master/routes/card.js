var express = require('express');
var router = express.Router();
var Controller = require('../controllers/card');
var controller = new Controller();

router.get('/:id?', (req, res) => {
  if (req.params.id) {
    controller.cardById(req.params.id, (err, rows) => {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  } else {
    controller.allCards((err, rows) => {
      if (err) {
          res.json(err);
      } else {
        res.json(rows);
      }
    });
  }
});

router.post('/', (req, res) => {
  controller.addCard(req.body, (err, count) => {
    if (err) {
      res.json(err);
    } else {
      res.json(req.body);
    }
  });
});

router.post('/card', (req, res) => {
  controller.card(req.body, (err, count) => {
    if (err) {
      res.json(err);
    } else {
      res.json(req.body);
    }
  });
});

router.put('/:id/addInvoice', (req, res) => {
  controller.addInvoice(req.params.id, req.body, (err, count) => {
    if (err) {
      res.json(err);
    } else {
      res.json(req.body);
    }
  });
});

router.delete('/:id', (req, res) => {
  controller.deleteCard(req.params.id, (err, count) => {
    if (err) {
      res.json(err);
    } else {
      res.json(count);
    }
  });
});

router.put('/:id', (req, res) => {
  controller.updateCard(req.params.id, req.body, (err, rows) => {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

module.exports = router;

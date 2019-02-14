var express = require('express');
var router = express.Router();
var Controller = require('../controllers/contact');
var controller = new Controller();

router.get('/:id?', (req, res) => {
  if (req.params.id) {
    controller.contactById(req.params.id, (err, rows) => {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  } else {
    controller.allContacts((err, rows) => {
      if (err) {
          res.json(err);
      } else {
        res.json(rows);
      }
    });
  }
});

router.get('/:id/notVinculed', (req, res) => {
  controller.contactsNotVinculed(req.params.id, (err, rows) => {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.post('/', (req, res) => {
  controller.addContact(req.body, (err, count) => {
    if (err) {
      res.json(err);
    } else {
      res.json(req.body);
    }
  });
});

router.post('/vinculation', (req, res) => {
  controller.vinculation(req.body, (err, count) => {
    if (err) {
      res.json(err);
    } else {
      res.json(req.body);
    }
  });
});


router.delete('/:id', (req, res) => {
  controller.deleteContact(req.params.id, (err, count) => {
    if (err) {
      res.json(err);
    } else {
      res.json(count);
    }
  });
});

module.exports = router;

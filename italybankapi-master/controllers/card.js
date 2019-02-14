
var Model = require('../models/card');
var model = new Model();

class Card {
	allCards(callback) {
		return model.allCards(callback);
  }

  cardById(id, callback) {
		return model.cardById(id, callback);
  }

  addCard(card, callback) {
		return model.addCard(card, callback);
  }

  deleteCard(id, callback) {
		return model.deleteCard(id, callback);
  }

  updateCard(id, card, callback) {
		return model.updateCard(id, card, callback);
  }

  addInvoice(id, invoice, callback) {
    return model.addInvoice(id, invoice, callback);
  }
}

module.exports = Card;

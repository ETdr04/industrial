var db = require('../connections/mysql');

class Card {
  allCards(callback) {
    return db.query("select * from cartao_credito", callback);
  }

  cardById(id, callback) {
    return db.query("select * from cartao_credito where id_cliente_cc=?", [id], callback);
  }

  addCard(card, callback) {
    return db.query("insert into cartao_credito(id_cliente_cc, limite, fatura, bandeira, vencimento, numero) values(?,?,?,?,?,?)", [card.id_cliente_cc, card.limite, card.fatura, card.bandeira, card.vencimento, card.numero], callback);
  }

  deleteCard(id, callback) {
    return db.query("delete from cartao_credito where id=?", [id], callback);
  }

  updateCard(id, card, callback) {
    return db.query("update cartao_credito set id_cliente_cc=?,limite=?,fatura=?,bandeira=?,vencimento=?,numero=? where id=?", [card.id_cliente_cc, card.limite, card.fatura, card.bandeira, card.vencimento, card.numero, id], callback);
  }

  addInvoice(id, card, callback) {
    return db.query("update cartao_credito set fatura=? where id=?", [card.valor, id], callback);
  }
}

module.exports = Card;

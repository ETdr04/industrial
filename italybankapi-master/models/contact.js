var db = require('../connections/mysql');

class Contact {
  allContacts(callback) {
    return db.query("select * from contatos", callback);
  }

  contactById(id, callback) {
    return db.query("select cc.nome, cc.id from contatos c inner join clientes cc on cc.id = c.amigo where c.cliente =?", [id], callback);
  }

  contactsNotVinculed(id, callback) {
    return db.query("select cc.nome, cc.id from contatos c inner join clientes cc on cc.id = c.amigo where c.amigo !=? and cc.id!=?", [id, id], callback);
  }

  vinculation(data, callback) {
    return db.query("insert into contatos(cliente, amigo) values(?,?)", [data.cliente, data.amigo], callback);
  }

  addContact(contact, callback) {
    return db.query("insert into contatos(cliente, amigo) values(?,?)", [contact.cliente, contact.amigo], callback);
  }

  deleteContact(id, callback) {
    return db.query("delete from contatos where id=?", [id], callback);
  }
}

module.exports = Contact;

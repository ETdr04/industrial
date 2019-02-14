
var Model = require('../models/contact');
var model = new Model();

class Contact {
	allContacts(callback) {
		return model.allContacts(callback);
  }

  contactById(id, callback) {
		return model.contactById(id, callback);
  }

  addContact(contact, callback) {
		return model.addContact(contact, callback);
  }

  vinculation(data, callback) {
		return model.vinculation(data, callback);
  }

  deleteContact(id, callback) {
		return model.deleteContact(id, callback);
  }

  contactsNotVinculed(id, callback) {
    return model.contactsNotVinculed(id, callback);
  }

}

module.exports = Contact;

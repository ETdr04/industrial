
var Model = require('../models/account');
var model = new Model();

class Account {
  balanceActual(id, callback) {
		return model.balanceActual(id, callback);
  }

  transferSum(data, callback) {
    return model.transferSum(data, callback);
  }

  transferMin(data, callback) {
    return model.transferMin(data, callback);
  }

  transferHist(data, callback) {
    return model.transferHist(data, callback);
  }

  verify(data, callback) {
    return model.verify(data, callback);
  }

  allHistory(id, callback) {
    return model.allHistory(id, callback);
  }
}

module.exports = Account;

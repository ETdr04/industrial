var db = require('../connections/mysql');
var moment = require('moment');

class Account {
  balanceActual(id, callback) {
    return db.query("select saldo, nome from clientes where id=?", [id], callback);
  }

  transferSum(data, callback) {

    // Atualiza o saldo do cliente que recebeu a tranfêrencia
    return db.query("update clientes set saldo=saldo+? where id=?", [data.valor, data.idRecebedor], callback);
  }

  transferMin(data, callback) {
      //Atualiza o saldo do cliente que fez a tranfêrencia
    return db.query("update clientes set saldo=saldo-? where id=?", [data.valor, data.idEnviador], callback);
  }

  transferHist(data, callback) {
     // Cria o histórico da transfêrencia
    return db.query("insert into historico(tipo, id_cliente, id_contato, valor) values (?,?,?,?)", [data.tipo, data.idEnviador, data.idRecebedor, data.valor], callback);
  }

  verify(data, callback) {
    return db.query("select * from clientes where id=? and senha=?", [data.id, data.senha], callback);
  }

  allHistory(id, callback) {
    return db.query("select * from historico where id_cliente=?",[id], callback);
  }
}

module.exports = Account;

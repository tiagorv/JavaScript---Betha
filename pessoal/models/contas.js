var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var modelo = new Schema({
  banco: {
    type: String,
    required: [true, 'Banco da Conta deve ser informado']
  },

  titular: {
    type: String,
    required: [true, 'Titular da Conta deve ser informado']
  },

  saldo: {
    type: Number,
    required: [true, 'Saldo da Conta deve ser informado']
  }
});

mongoose.model('contas', modelo);
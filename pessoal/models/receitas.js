var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var modelo = new Schema({
  descricao: {
    type: String,
    required: [true, 'Descrição da Receita deve ser informado']
  },

  valor: {
    type: Number,
    required: [true, 'Valor da Receita deve ser informado']
  },

  data_recebimento: {
    type: Date
  },

  mes: {
    type: Number,
    required: [true, 'Mês da Receita deve ser informado']
  },

  ano: {
    type: Number,
    required: [true, 'Ano da Receita deve ser informado']
  },

  situacao: {
    type: String,
    required: [true, 'Situação da Receita deve ser informado']
  },

  conta:{
    type: Schema.Types.ObjectId,
    ref: 'contas'
  }  
});

mongoose.model('receitas', modelo);
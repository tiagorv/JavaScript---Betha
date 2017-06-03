var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var modelo = new Schema({
  descricao: {
    type: String,
    required: [true, 'Descrição da Despesa é obrigatória']
  },

  valor: {
    type: Number,
    required: [true, 'Valor da Despesa é obrigatória']
  },

  data_vencimento: {
    type: Date,
    required: [true, 'Data de vencimento da Despesa deve ser informado']
  },  

  data_pagamento: {
    type: Date
  },

  parcela: {
    type: Number,
    required: [true, 'Número da Parcela da despesa deve ser informado']
  },  

  qtd_parcela: {
    type: Number,
    required: [true, 'Quantidade de Parcelas da despesa deve ser informado']
  },    

  mes: {
    type: Number,
    required: [true, 'Mês da Despesa deve ser informado']
  },

  ano: {
    type: Number,
    required: [true, 'Ano da Despesa deve ser informado']
  },

  situacao: {
    type: String,
    required: [true, 'Situação da Despesa deve ser informado']
  },

  conta:{
    type: Schema.Types.ObjectId,
    ref: 'contas'
  }  
});

mongoose.model('despesas', modelo);
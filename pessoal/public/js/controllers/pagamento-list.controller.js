(function () {
  'use strict';

  angular
    .module('app')
    .controller('PagamentoListController', PagamentoListController);

  PagamentoListController.$inject = ['DespesaService', '$location']
  function PagamentoListController(DespesaService, $location) {
    var vm = this;
    vm.despesas = [];
    vm.busca = ''

    vm.pagamento = pagamento;
    vm.buscar = activate;

    activate();

    ////////////////

    function activate() {
      var query = {}

      DespesaService.find(query)
        .success(function (data) {

          data.forEach(function(element) {
            element.data_pagamento = new Date();
          }, this);

          vm.despesas = data.filter(function(despesa){
              return despesa.situacao == 'Aberta' || despesa.situacao == 'Aberto';
          });
        });
    }

    function pagamento(despesa) {
      confirmBox('Deseja realmente pagar a despesa "' + despesa.descricao + '"', function () {

        despesa.situacao = 'Paga';

      DespesaService.save(despesa)
        .success(function () {
          $location.path('/despesas')
        })
      });
    }
  }
})();
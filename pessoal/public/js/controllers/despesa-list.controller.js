(function () {
  'use strict';

  angular
    .module('app')
    .controller('DespesaListController', DespesaListController);

  DespesaListController.$inject = ['DespesaService']
  function DespesaListController(DespesaService) {
    var vm = this;
    vm.despesas = [];
    vm.busca = ''

    vm.remover = remover;
    vm.buscar = activate;

    activate();

    ////////////////

    function activate() {
      var query = vm.busca ? { $text: {$search: vm.busca } } : {}

      DespesaService.find(query)
        .success(function (data) {

          vm.despesas = data;
        });
    }

    function remover(despesa) {
      confirmBox('Deseja realmente remover a despesa "' + despesa.descricao + '"', function () {
        DespesaService.remove(despesa._id)
          .success(function () {
            activate();
          });
      });
    }

  }
})();
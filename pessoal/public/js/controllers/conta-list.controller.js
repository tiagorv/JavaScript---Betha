(function () {
  'use strict';

  angular
    .module('app')
    .controller('ContaListController', ContaListController);

  ContaListController.$inject = ['ContaService']
  function ContaListController(ContaService) {
    var vm = this;
    vm.contas = [];
    vm.busca = ''

    vm.remover = remover;
    vm.buscar = activate;

    activate();

    ////////////////

    function activate() {
      var query = vm.busca ? { $text: {$search: vm.busca } } : {}

      ContaService.find(query)
        .success(function (data) {
          vm.contas = data;
        });
    }

    function remover(conta) {
      confirmBox('Deseja realmente remover a conta "' + conta.titular + '"', function () {
        ContaService.remove(conta._id)
          .success(function () {
            activate();
          });
      });
    }

  }
})();
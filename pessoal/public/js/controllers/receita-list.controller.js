(function () {
  'use strict';

  angular
    .module('app')
    .controller('ReceitaListController', ReceitaListController);

  ReceitaListController.$inject = ['ReceitaService']
  function ReceitaListController(ReceitaService) {
    var vm = this;
    vm.receitas = [];
    vm.busca = ''

    vm.remover = remover;
    vm.buscar = activate;

    activate();

    ////////////////

    function activate() {
      var query = vm.busca ? { $text: {$search: vm.busca } } : {}

      ReceitaService.find(query)
        .success(function (data) {
          vm.receitas = data;
        });
    }

    function remover(receita) {
      confirmBox('Deseja realmente remover a receita "' + receita.descricao + '"', function () {
        ReceitaService.remove(receita._id)
          .success(function () {
            activate();
          });
      });
    }

  }
})();
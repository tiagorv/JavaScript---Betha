(function () {
  'use strict';

  angular
    .module('app')
    .controller('DespesaFormController', DespesaFormController);

  DespesaFormController.$inject = ['DespesaService', '$location', '$routeParams'];
  function DespesaFormController(DespesaService, $location, $routeParams) {
    var vm = this;
    vm.despesa = {};
    vm.titulo = 'Nova Despesa';

    vm.salvar = salvar;

    activate();

    ////////////////

    function activate() {
      if ($routeParams.id) {
        DespesaService.findById($routeParams.id)
          .success(function (data) {

            console.log(data);

            vm.despesa = data;
            vm.titulo = 'Editando Despesa'
          });
      }
    }

    function salvar() {
      DespesaService.save(vm.despesa)
        .success(function () {
          $location.path('/despesas')
        })
    }
  }
})();
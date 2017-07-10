(function () {
  'use strict';

  angular
    .module('app')
    .controller('ContaFormController', ContaFormController);

  ContaFormController.$inject = ['ContaService', '$location', '$routeParams'];
  function ContaFormController(ContaService, $location, $routeParams) {
    var vm = this;
    vm.conta = {};
    vm.titulo = 'Nova Conta';

    vm.salvar = salvar;

    activate();

    ////////////////

    function activate() {
      if ($routeParams.id) {
        ContaService.findById($routeParams.id)
          .success(function (data) {
            vm.conta = data;
            vm.titulo = 'Editando Conta'
          });
      }
    }

    function salvar() {
      ContaService.save(vm.conta)
        .success(function () {
          $location.path('/contas')
        })
    }
  }
})();
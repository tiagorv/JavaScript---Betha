(function () {
  'use strict';

  angular
    .module('app')
    .controller('ReceitaFormController', ReceitaFormController);

  ReceitaFormController.$inject = ['ReceitaService', '$location', '$routeParams'];
  function ReceitaFormController(ReceitaService, $location, $routeParams) {
    var vm = this;
    vm.receita = {};
    vm.titulo = 'Nova Receita';

    vm.salvar = salvar;

    activate();

    ////////////////

    function activate() {
      if ($routeParams.id) {
        ReceitaService.findById($routeParams.id)
          .success(function (data) {
            vm.receita = data;
            vm.titulo = 'Editando Receita'
          });
      }
    }

    function salvar() {
      ReceitaService.save(vm.receita)
        .success(function () {
          $location.path('/receitas')
        })
    }
  }
})();
(function () {
  'use strict';

  angular
    .module('app')
    .controller('RecebimentoListController', RecebimentoListController);

  RecebimentoListController.$inject = ['ReceitaService', '$location']
  function RecebimentoListController(ReceitaService, $location) {
    var vm = this;
    vm.receitas = [];
    vm.busca = ''

    vm.recebimento = recebimento;
    vm.buscar = activate;

    activate();

    ////////////////

    function activate() {
      var query = {}

      ReceitaService.find(query)
        .success(function (data) {

          console.log(data);

          data.forEach(function(element) {
            element.data_recebimento = new Date();
          }, this);

          console.log(data);

          vm.receitas = data.filter(function(receita){
              return receita.situacao == 'Aberta' || receita.situacao == 'Aberto';
          });

          console.log('receitas');
          console.log(vm.receitas);
        });
    }

    function recebimento(receita) {
      confirmBox('Deseja realmente pagar a receita "' + receita.descricao + '"', function () {

        receita.situacao = 'Paga';

      ReceitaService.save(receita)
        .success(function () {
          $location.path('/receitas')
        })
      });
    }
  }
})();
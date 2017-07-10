(function() {
  'use strict';

  angular.module('app', [
    'ngRoute',
    'ui.bootstrap',
    'mgo-angular-wizard'
  ]).config(AppConfig);

  AppConfig.$inject = ['$routeProvider'];
  function AppConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main.html',
        controller: 'MainController',
        controllerAs: 'vm'
      })
      .when('/wizard', {
        templateUrl: 'partials/wizard.html',
        controller: 'WizardController',
        controllerAs: 'vm'
      })
      .when('/recebimentos', {
        templateUrl: 'partials/recebimento-list.html',
        controller: 'RecebimentoListController',
        controllerAs: 'vm'
      })      
      .when('/pagamentos', {
        templateUrl: 'partials/pagamento-list.html',
        controller: 'PagamentoListController',
        controllerAs: 'vm'
      })
      .when('/contas', {
        templateUrl: 'partials/conta-list.html',
        controller: 'ContaListController',
        controllerAs: 'vm'
      })
      .when('/contas/new', {
        templateUrl: 'partials/conta-form.html',
        controller: 'ContaFormController',
        controllerAs: 'vm'
      })
      .when('/contas/:id', {
        templateUrl: 'partials/conta-form.html',
        controller: 'ContaFormController',
        controllerAs: 'vm'
      })
      .when('/despesas', {
        templateUrl: 'partials/despesa-list.html',
        controller: 'DespesaListController',
        controllerAs: 'vm'
      })
      .when('/despesas/new', {
        templateUrl: 'partials/despesa-form.html',
        controller: 'DespesaFormController',
        controllerAs: 'vm'
      })
      .when('/despesas/:id', {
        templateUrl: 'partials/despesa-form.html',
        controller: 'DespesaFormController',
        controllerAs: 'vm'
      })
      .when('/receitas', {
        templateUrl: 'partials/receita-list.html',
        controller: 'ReceitaListController',
        controllerAs: 'vm'
      })
      .when('/receitas/new', {
        templateUrl: 'partials/receita-form.html',
        controller: 'ReceitaFormController',
        controllerAs: 'vm'
      })
      .when('/receitas/:id', {
        templateUrl: 'partials/receita-form.html',
        controller: 'ReceitaFormController',
        controllerAs: 'vm'
      })
      .otherwise('/');
  }
})();
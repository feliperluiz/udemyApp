angular.module('primeiraApp').config([
	'$stateProvider',  //serve para as navegações
	'$urlRouterProvider', //faz parte do ui-router
	function($stateProvider, $urlRouterProvider) { //função que vai receber os dois objetos
		$stateProvider.state('dashboard', {
			url: "/dashboard",
			templateUrl: "dashboard/dashboard.html"

		}).state('billingCycle', {
			url: "/billingCycles",
			templateUrl: "billingCycle/tabs.html"
		})

		$urlRouterProvider.otherwise('/dashboard') //estado padrão!
	

	}				


])
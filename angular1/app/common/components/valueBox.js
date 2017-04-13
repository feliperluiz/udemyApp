angular.module('primeiraApp').component('valueBox', {
	bindings: {
		grid: '@',
		colorClass: '@',
		value: '@',
		text: '@',
		iconClass: '@', //entradas do tipo String
	},
	controller: [ //inserir comportamentos dentro do componente
		'gridSystem', //recebeu por injeção de dependência uma factory	
		function(gridSystem) {
			this.$onInit = () => this.gridClasses = gridSystem.toCssClasses(this.grid)
			//apenas quando todos os bindings tiverem sido setados o onInit será executado
		}

	],
	template: `
	<div class="{{ $ctrl.gridClasses }}">
		<div class="small-box {{ $ctrl.colorClass }}">
			<div class="inner">
				<h3> {{ $ctrl.value }} </h3>
				<p> {{ $ctrl.text }} </p>
			</div>
			<div class="icon">
				<i class="fa {{ $ctrl.iconClass }}"></i>
			</div>
		</div>
	</div> 
	`

	


})
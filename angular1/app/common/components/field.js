(function() {
	angular.module('primeiraApp').component('field', {
		bindings: {
			id: '@',
			label: '@',
			grid: '@',
			placeholder: '@',
			type: '@',
			model: '=',

			/* as modificações serão refletidas, enxergadas, pelo parent
bind de duas direções, tudo que for alterado no controller será refletido no componente e vice-versa
consegue passar uma referência para um atributo do meu model e quando eu mudar no componente 
vai ser refletido no controller */

		},
		controller: [
			'gridSystem', 
			function(gridSystem) {
				this.$onInit = () => this.gridClasses = gridSystem.toCssClasses(this.grid)
			}
		],
		template: `
		<div class="{{ $ctrl.gridClasses }}">
			<div class="form-group">
				<label for="{{ $ctrl.id }}"> {{ $ctrl.label }}</label>
				<input id="{{ $ctrl.id }}" class="form-control" placeholder="{{ $ctrl.placeholder }}" 
				type="{{ $ctrl.type }}" ng-model="$ctrl.model" />
			</div>
		</div>
		`
	})

})()
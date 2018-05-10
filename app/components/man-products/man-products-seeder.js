
tutorialApp.factory('ProductsSeederService', [function ($scope) {
	'use strict';

	$scope.Products = {
		product1: {
			valid: true
		},
		product2: {
			valid: false
		},
		product3: {
			valid: false
		},
		product4: {
			valid: true
		}
	};

	var getProducts = function(){
		return this.Products;
	};

	return {
		getProducts: getProducts()
	}
}]);
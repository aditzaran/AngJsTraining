tutorialApp.directive('manProducts', function(){
	return {
		restrict: 'A',
		controller: 'ManProductsController',
		templateUrl: './components/man-products/man-products.html',
		replace: true
	};
});
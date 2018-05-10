tutorialApp.directive('tutorialWomenOuterwear', function(){
	return {
		restrict: 'A',
		controller: 'WomenOuterwearController',
		templateUrl: './components/tutorial-women-outerwear/tutorial-women-outerwear.html',
		replace: true
	};
});
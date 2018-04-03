
tutorialApp.directive('tutorialHeader', function(){
	return {
		restrict: "A",
		controller: "TutorialHeaderController",
      	templateUrl: "./components/tutorial-header/tutorial-header.html",
      	replace: true
	};
});


var CR_Animation = angular.module('CR_Animation', [
	'ngRoute'
]);

CR_Animation.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: './views/home.html'
	})
	.when('/youtube', {
		templateUrl: './views/youtube.html',
		controller: 'youtubeCtrl'
	})
	.when('/html-video', {
		templateUrl: './views/html-video.html'
	})
	.when('/gifs', {
		templateUrl: './views/gifs.html'
	})
	.when('/css-animation', {
		templateUrl: './views/css-animation.html'
	})
	.when('/parallax', {
		templateUrl: './views/parallax.html'
	})
	.when('/svg-animation', {
		templateUrl: './views/svg-animation.html'
	})
	.when('/canvas', {
		templateUrl: './views/canvas.html'
	})
	.otherwise({
		redirectTo: '/'
	})
}]);


/**
 * User: Michael Lazarev <mihailaz.90@gmail.com>
 * Date: 18.05.16
 * Time: 14:42
 */

var ata = angular.module('angularTestApp', ['ngRoute', 'ngMaterial']).config(function($routeProvider, $ngMaterial){
	$routeProvider.when('/catalog', {
		templateUrl:'views/catalog.html',
		controller:'CatalogController'
	});
	//$routeProvider.when('/book/:id', {
	//	templateUrl:'views/book.html',
	//	controller:'BookController'
	//});
	$routeProvider.otherwise({redirectTo: '/catalog'});
});
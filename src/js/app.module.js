/**
 * User: Michael Lazarev <mihailaz.90@gmail.com>
 * Date: 18.05.16
 * Time: 14:42
 */

angular.module('booksCatalogApp', ['ngRoute']).config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/', {
		templateUrl:'views/catalog.html',
		controller:'CatalogController'
	}).when('/book/:id', {
		templateUrl:'views/book.html',
		controller:'BookController'
	}).otherwise({redirectTo: '/'});
}]);
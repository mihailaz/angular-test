/**
 * User: Michael Lazarev <mihailaz.90@gmail.com>
 * Date: 25.05.16
 * Time: 11:24
 */

(function(){
	"use strict";

	angular.module('app.catalog').config(['$routeProvider', function($routeProvider){
		$routeProvider
			.when('/', {
				templateUrl:'views/catalog/catalog.tpl.html',
				controller:'CatalogCtrl'
			})
			.when('/book/:id', {
				templateUrl:'views/catalog/book.tpl.html',
				controller:'BookCtrl'
			})
			.otherwise({redirectTo: '/'});
	}]);
})();
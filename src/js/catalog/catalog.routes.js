/**
 * User: Michael Lazarev <mihailaz.90@gmail.com>
 * Date: 25.05.16
 * Time: 11:24
 */

(function(){
	"use strict";

	angular.module('app.catalog').config(function($stateProvider, $urlRouterProvider){
		$stateProvider
			.state('catalog', {
				url        : '/catalog',
				templateUrl: 'views/catalog/catalog.tpl.html',
				controller : 'CatalogCtrl'
			})
			.state('book', {
				url        : '/catalog/:id',
				templateUrl: 'views/catalog/book.tpl.html',
				controller : 'BookCtrl'
			});

		$urlRouterProvider.when('', '/catalog');
	});
})();
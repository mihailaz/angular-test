/**
 * User: Michael Lazarev <mihailaz.90@gmail.com>
 * Date: 18.05.16
 * Time: 16:45
 */

(function(){
	"use strict";

	var books = {};

	angular.module('app.catalog').controller('BookCtrl', function($scope, $routeParams, Catalog){
		var id = $routeParams.id;

		if (!books.id){
			books.id = Catalog.get({id: id});
		}
		$scope.book = books.id;
	});
})();
/**
 * User: Michael Lazarev <mihailaz.90@gmail.com>
 * Date: 18.05.16
 * Time: 16:45
 */

(function(){
	"use strict";

	angular.module('app.catalog').controller('BookCtrl', function($scope, $routeParams, Catalog){
		$scope.book = Catalog.get({id: $routeParams.id});
	});
})();
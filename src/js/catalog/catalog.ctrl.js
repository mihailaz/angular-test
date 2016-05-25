/**
 * User: Michael Lazarev <mihailaz.90@gmail.com>
 * Date: 18.05.16
 * Time: 16:45
 */

(function(){
	"use strict";

	angular.module('app.catalog').controller('CatalogCtrl', function($scope, Catalog){
		$scope.catalog = Catalog.query();
	});
})();
/**
 * User: Michael Lazarev <mihailaz.90@gmail.com>
 * Date: 18.05.16
 * Time: 16:45
 */

(function(){
	"use strict";

	var catalog;

	angular.module('app.catalog').controller('CatalogCtrl', function($scope, Catalog){
		if (!catalog){
			catalog = Catalog.query();
		}
		$scope.catalog = catalog;
	});
})();
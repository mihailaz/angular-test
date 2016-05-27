/**
 * User: Michael Lazarev <mihailaz.90@gmail.com>
 * Date: 18.05.16
 * Time: 16:45
 */

(function(){
	"use strict";

	var catalog;

	angular.module('app.catalog').controller('CatalogCtrl', function($scope, Catalog, $location){
		if (!catalog){
			catalog = Catalog.query();
		}
		$scope.catalog   = catalog;
		$scope.randGrid  = function(min, max, book){
			if (!book.grid){
				book.grid = {
					col: rand(min, max),
					row: rand(min, max)
				};
			}
			return book.grid;
		};
		$scope.bookClick = function(book){
			$location.path('book/' + book.id);
		};

		function rand(min, max){
			return (Math.random() * (max - min) + min).toFixed(0);
		}
	});
})();
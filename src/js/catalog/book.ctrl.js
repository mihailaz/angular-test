/**
 * User: Michael Lazarev <mihailaz.90@gmail.com>
 * Date: 18.05.16
 * Time: 16:45
 */

(function(){
	"use strict";

	var books = {};

	angular.module('app.catalog').controller('BookCtrl', function($scope, $stateParams, Catalog){
		var id = $stateParams.id;

		if (!books[id]){
			books[id] = {
				book   : Catalog.get({id: id}),
				bundles: Catalog.query({id: id, type: 'bundles'})
			};
		}
		$scope.book    = books[id].book;
		$scope.bundles = books[id].bundles;
	});
})();
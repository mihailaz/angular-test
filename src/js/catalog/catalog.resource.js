/**
 * User: Michael Lazarev <mihailaz.90@gmail.com>
 * Date: 25.05.16
 * Time: 14:15
 */

(function(){
	"use strict";

	angular.module('app.catalog').factory('Catalog', ['$resource', function($resource){
		return $resource('https://ds.aggregion.com/api/public/catalog/:id', {}, {cache: true});
	}]);
})();
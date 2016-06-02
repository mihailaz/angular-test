/**
 * User: Michael Lazarev <mihailaz.90@gmail.com>
 * Date: 25.05.16
 * Time: 11:24
 */

(function(){
	"use strict";

	angular.module('app.core').config(function($stateProvider, $urlRouterProvider){
		$stateProvider
			.state('404', {
				url        : '/404',
				templateUrl: 'views/core/404.tpl.html'
			});

		//$urlRouterProvider.otherwise('/404');
	});
})();
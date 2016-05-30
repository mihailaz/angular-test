/**
 * User: Michael Lazarev <mihailaz.90@gmail.com>
 * Date: 27.05.16
 * Time: 17:44
 */

(function(){
	'use strict';

	angular.module('app.core').directive('errSrc', function() {
		return {
			link: function(scope, element, attrs) {
				element.bind('error', function() {
					if (attrs.src != attrs.errSrc) {
						attrs.$set('src', attrs.errSrc);
					}
				});
			}
		}
	});
})();
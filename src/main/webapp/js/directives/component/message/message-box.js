'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('sbAdminApp')
    .directive('stats',function() {
    	return {
  		templateUrl:'js/directives/component/message/message-box.html',
  		restrict:'E',
  		replace:true,
  		scope: {
        'model': '=',
        'comments': '@',
        'time': '@',
        'name': '@',
        'colour': '@',
        'type':'@',
        'goto':'@'
  		}
  		
  	}
  });

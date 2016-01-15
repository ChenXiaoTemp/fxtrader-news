'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description # adminPosHeader
 */
angular
		.module('sbAdminApp')
		.directive(
				'message-comment',
				function() {
					return {
						templateUrl : 'js/directives/component/message/comment-comment/message-comment.html',
						restrict : 'E',
						replace : true,
						scope : {
							'model' : '=',
							'content' : '@',
							'images' : '='
						},
						controller : function($scope) {
							console.log($scope.url);
						}

					}
				});
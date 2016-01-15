'use strict';
/**
 * @ngdoc overview
 * @name sbAdminApp
 * @description
 * # sbAdminApp
 *
 * Main module of the application.
 */
angular
  .module('sbAdminApp', [
    'oc.lazyLoad',
    'ui.router',
    'ui.bootstrap',
    'angular-loading-bar','ui.bootstrap.datetimepicker'
  ])
  .config(['$stateProvider','$urlRouterProvider','$ocLazyLoadProvider',function ($stateProvider,$urlRouterProvider,$ocLazyLoadProvider) {
    $ocLazyLoadProvider.config({
      debug:false,
      events:true,
    });

    $urlRouterProvider.otherwise('/dashboard/home');

    $stateProvider
      .state('dashboard', {
        url:'/dashboard',
        templateUrl: 'views/dashboard/main.html',
        resolve: {
            loadMyDirectives:function($ocLazyLoad){
                return $ocLazyLoad.load(
                {
                    name:'sbAdminApp',
                    files:[
                    'js/directives/header/header.js',
                    'js/directives/header/header-notification/header-notification.js',
                    'js/directives/sidebar/sidebar.js',
                    'js/directives/sidebar/sidebar-search/sidebar-search.js'
                    ]
                }),
                $ocLazyLoad.load(
                {
                   name:'toggle-switch',
                   files:["js/lib/angular-toggle-switch/angular-toggle-switch.min.js",
                          "css/lib/angular-toggle-switch/angular-toggle-switch.css"
                      ]
                }),
                $ocLazyLoad.load(
                {
                  name:'ngAnimate',
                  files:['js/lib/angular-animate/angular-animate.min.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngCookies',
                  files:['js/lib/angular-cookies/angular-cookies.min.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngResource',
                  files:['js/lib/angular-resource/angular-resource.min.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngSanitize',
                  files:['js/lib/angular-sanitize/angular-sanitize.min.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngTouch',
                  files:['js/lib/angular-touch/angular-touch.min.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ui.bootstrap',
                  files:['js/lib/angular-bootstrap/ui-bootstrap.min.js']
                })
                
            }
        }
    })
      .state('dashboard.home',{
        url:'/home',
        controller: 'MainCtrl',
        templateUrl:'views/dashboard/home.html',
        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'sbAdminApp',
              files:[
              'js/controllers/main.js',
              'js/directives/timeline/timeline.js',
              'js/directives/notifications/notifications.js',
              'js/directives/chat/chat.js',
              'js/directives/dashboard/stats/stats.js',
              'js/directives/component/message/message-box.js'
              ]
            })
          }
        }
      })
      .state('dashboard.form',{
        templateUrl:'views/form.html',
        url:'/form'
    })
      .state('dashboard.blank',{
        templateUrl:'views/pages/blank.html',
        url:'/blank'
    })
      .state('login',{
        templateUrl:'views/pages/login.html',
        url:'/login'
    })
      .state('dashboard.chart',{
        templateUrl:'views/chart.html',
        url:'/chart',
        controller:'ChartCtrl',
        resolve: {
          loadMyFile:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'chart.js',
              files:[
                'js/lib/angular-chart.js/angular-chart.min.js',
                'css/lib/angular-chart.js/angular-chart.min.css'
              ]
            }),
            $ocLazyLoad.load({
                name:'sbAdminApp',
                files:['scripts/controllers/chartContoller.js']
            })
          }
        }
    })
      .state('dashboard.table',{
        templateUrl:'views/table.html',
        url:'/table'
    })
      .state('dashboard.panels-wells',{
          templateUrl:'views/ui-elements/panels-wells.html',
          url:'/panels-wells'
      })
      .state('dashboard.buttons',{
        templateUrl:'views/ui-elements/buttons.html',
        url:'/buttons'
    })
      .state('dashboard.notifications',{
        templateUrl:'views/ui-elements/notifications.html',
        url:'/notifications'
    })
      .state('dashboard.typography',{
       templateUrl:'views/ui-elements/typography.html',
       url:'/typography'
   })
      .state('dashboard.icons',{
       templateUrl:'views/ui-elements/icons.html',
       url:'/icons'
   })
      .state('dashboard.grid',{
       templateUrl:'views/ui-elements/grid.html',
       url:'/grid'
   })
    .state('dashboard.messageBox',{
        url:'/message-box',
        controller: 'MainCtrl',
        templateUrl:'views/component/message/message-box.html',
        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'sbAdminApp',
              files:[
              'js/controllers/main.js',
              'js/directives/timeline/timeline.js',
              'js/directives/notifications/notifications.js',
              'js/directives/chat/chat.js',
              'js/directives/dashboard/stats/stats.js',
              'js/directives/component/message/message-box.js',
              'js/directives/component/message/message-comment/message-comment.js'
              ]
            })
          }
        }
    })
    
    .state('dashboard.dailyReport',{
        url:'/daily-report',
        controller: 'MainCtrl',
        templateUrl:'views/daily-report/daily-report.html',
        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'sbAdminApp',
              files:[
              'js/controllers/main.js',
              'js/directives/dashboard/stats/stats.js'
              ]
            })
          }
        }
    })
    
    .state('dashboard.historyDailyReport',{
        url:'/history-daily-report',
        controller: 'MainCtrl',
        templateUrl:'views/daily-report/history-daily-report.html',
        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'sbAdminApp',
              files:[
              'js/controllers/main.js',
              'js/directives/dashboard/stats/stats.js',
              "js/controllers/historyDailyReport.js"
              ]
            })
          }
        }
    })
  }]);

    

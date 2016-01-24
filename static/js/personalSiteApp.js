var personalSiteApp = angular.module('personalSiteApp', ['ngRoute']);
    
personalSiteApp.config(['$routeProvider', function ($routeProvider) {
       
    $routeProvider
        
    .when('/', {
        templateUrl: 'static/pages/about.html'
        })

    .when('/skills', {
        templateUrl: 'static/pages/skills.html'
    })
        
    .when('/projects', {
        templateUrl: 'static/pages/projects.html'
    })
        
    .when('/contact', {
        templateUrl: 'static/pages/contact.html'
    })
        
}]);

// personalSiteApp.directive('sun-burst', function($parse){
    
// })
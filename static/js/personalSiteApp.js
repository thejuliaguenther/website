var personalSiteApp = angular.module("personalSiteApp", ['ngRoute']);
    
personalSiteApp.config(['$routeProvider', function ($routeProvider) {
       
    $routeProvider
        
    .when('/', {
        templateUrl: 'static/pages/home.html'
        // controller: 'homeController'
        })
        
    .when('/about', {
        templateUrl: 'static/pages/about.html'
        // controller: 'aboutController'
    })
        
    .when('/projects', {
        templateUrl: 'static/pages/projects.html'
        // controller: 'projectsController'
    })
        
    .when('/contact', {
        templateUrl: 'static/pages/contact.html'
        // controller: 'projectsController'
    })
        
}]);
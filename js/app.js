angular.module('cans',['ui.router','ui.bootstrap','cans.controllers'])
    .config(function($stateProvider,$urlRouterProvider){
        $stateProvider
            .state('home',{
                url: '/',
                templateUrl: 'templates/home.html',
                controller: 'HomeCtrl'
            })

            .state('contact',{
                url: '/',
                templateUrl: 'templates/contact.html',
                controller: 'ContactCtrl'
            });
        $urlRouterProvider.otherwise('home')
    })

    .constant('SERVER', {
        // Local server
        url: 'http://localhost:8100'

        // Public Heroku server
        //url: 'https://ionic-songhop.herokuapp.com'
    })
    .run()
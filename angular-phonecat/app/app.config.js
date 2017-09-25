angular.
module('phonecatApp').
config(['$stateProvider','$urlRouterProvider',
    function config($stateProvider,$urlRouterProvider) {

        var listState={
            name:'list',
            url:'/phones',
            template:'<phone-list></phone-list>'
        }
        var phoneDataState={
            name:'phoneData',
            url:'/phones/{phoneId}',
            template: '<phone-detail></phone-detail>'
        }

        $stateProvider.state(listState);
        $stateProvider.state(phoneDataState);
        $urlRouterProvider.when('','/phones')
      }
]);

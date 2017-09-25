angular
    .module('phonecatApp')
    .factory('phoneService',function phoneService($http){
    function getAll() {
        return   $http.get('phones/phones.json')
    }
    function getSingle(phoneId){
        return   $http.get('phones/'+phoneId+'.json')

    }
    // expose a public API
    return {
        getAll: getAll,
        getSingle:getSingle
    };
})
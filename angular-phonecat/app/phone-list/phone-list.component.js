angular.
module('phoneList').
directive('phoneList', [function() {
 return    {
        // Note: The URL is relative to our `index.html` file
     templateUrl: 'phone-list/phone-list.template.html',
     controllerAs : 'ctrl',
     controller: function($http, phoneService,$mdDialog) {
            var self = this;
            self.orderProp = 'age';
            phoneService.getAll().then(function (response) {
                self.phones = response.data;
            });
           self.maxLength=5;
            self.getPhones=function(){
                return self.phones.slice(0,Math.min(self.maxLength, self.phones.length));
            }
         self.more=function(){
                self.maxLength+=5;
         }
         self.moreEnable=function(){
             return self.maxLength<self.phones.length
         }
         self.dialogController=function(self, $mdDialog) {
             self.hide = function() {
                 $mdDialog.hide();
             };

             self.cancel = function() {
                 $mdDialog.cancel();
             };

             self.answer = function(answer) {
                 $mdDialog.hide(answer);
             };
         }
         self.showAddMenu = function(ev) {
             $mdDialog.show({
                  //controller: 'phoneForm',
                  template: '<phone-form></phone-form>',
                // templateUrl:'../phone-form/phone-form.template.html',
                 //contentElement:'<phone-form></phone-form>',
                 parent: angular.element(document.body),
                 targetEvent: ev,
                 clickOutsideToClose:true
             })
                 .then(function(answer) {
                     self.status = 'You said the information was "' + answer + '".';
                 }, function() {
                     self.status = 'You cancelled the dialog.';
                 });
         };
     }
    }
}
]);

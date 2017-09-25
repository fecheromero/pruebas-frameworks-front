angular.
module('phoneForm').
directive('phoneForm', [function() {
 return    {

     templateUrl: 'phone-form/phone-form.template.html',
     controllerAs : 'ctrl',
     controller: function() {
         self.name="";
         self.imgUrl="";
         self.description="";
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

     }
    }
}
]);

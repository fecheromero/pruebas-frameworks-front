angular.
module('phoneDetail').
directive('phoneDetail',function(){return  {
    templateUrl: 'phone-detail/phone-detail.template.html',
    controllerAs:'ctrl',
    controller: ['$stateParams','phoneService','$window',

        function PhoneDetailController($stateParams,phoneService,$window) {
            var self = this;
            self.setImage = function setImage(imageUrl) {
                self.mainImageUrl = imageUrl;
                $window.scrollTo(0, 0);
            };

            phoneService.getSingle($stateParams.phoneId).then(function(response){
                self.phone =  response.data;
                self.setImage(self.phone.images[0]);
            })
       }
    ]
}});
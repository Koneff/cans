angular.module('cans.controllers',[])

.controller('ToggleCtrl',function($scope){
        $scope.showMe = true;
        $scope.toggleShowMe = function() {
            $scope.showMe = $scope.showMe === false ? true: false;
        };
    })

.controller('ModalWindowCtrl',function($scope){
        $scope.showModalWindow = true;
        $scope.toggleModalWindow = function(){
            $scope.showModalWindow = $scope.showModalWindow === false ? true: false;
            console.log($scope.showModalWindow)
        }

    })
angular.module('cans.controllers',[])

.controller('ToggleCtrl',function($scope){
        $scope.showMe = true;
        $scope.toggleShowMe = function() {
            $scope.showMe = $scope.showMe === false ? true: false;
        };
    })

.controller('ModalWindowCtrl',function($scope,$modal){
        $scope.showModalWindow = true;
        $scope.toggleModalWindow = function(){
            $scope.showModalWindow = $scope.showModalWindow === false ? true: false;
            console.log($scope.showModalWindow)
        }

    })

.controller('CarouselCtrl',function($scope){
        $scope.slideInterval = 7000;
        var slides = $scope.slides = [];
        $scope.addSlide = function(){
            var newWidth = slides.length + 1;
            console.log(newWidth);
            slides.push({
                image: 'img/' + newWidth + '.jpg',
                text: ['Скумбрия в томатном соку','Толстолобик маринованный','Сельдь с лимоном'][slides.length%3]
            })

        }
        for (var i=0;i<3;i++){
            $scope.addSlide()
        }


    })
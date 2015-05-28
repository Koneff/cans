angular.module('cans.controllers',['cans.services'])

.controller('ToggleCtrl',function($scope){
        $scope.showMe = true;
        $scope.toggleShowMe = function() {
            $scope.showMe = $scope.showMe === false ? true: false;
        };
    })


.controller('CarouselCtrl',function($scope){
        $scope.slideInterval = 7000;
        var slides = $scope.slides = [];
        $scope.addSlide = function(){
            var newQuantity = slides.length + 1;
            slides.push({
                image: 'img/' + newQuantity + '.jpg',
                text: ['Скумбрия в томатном соку','Толстолобик маринованный','Сельдь с лимоном'][slides.length%3]
            })

        }
        for (var i=0;i<3;i++){
            $scope.addSlide()
        }


    })

.controller('ScrollCtrl',function($scope,$location,anchorSmoothScroll){
        $scope.goToAnchor = function(sID){

            $location.hash(sID);

            // call $anchorScroll()
            anchorSmoothScroll.scrollTo(sID);
            $location.search(sID, null);
            }
        })

.controller('ProductCtrl',function($scope,$http,Products){
            Products.getProducts()
            .then(function(){
                $scope.allProducts = Products.queue;
                console.log($scope.allProducts)
            });

    });
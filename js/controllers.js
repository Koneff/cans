angular.module('cans.controllers',['cans.services'])

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
            var newQuantity = slides.length + 1;
            console.log(newQuantity);
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
        $scope.submitLoading = function(){Products.getProducts()
            .then(function(){
                $scope.allProducts = Products.queue;
                console.log($scope.allProducts)
            });
        }

        /*$scope.dataLoaded = false;

        $scope.submitLoading = function(){
            Products.getProducts().then(function(successResponse){
                $scope.dataLoaded = true;
                $scope.productInfo = Products.queue;
                console.log($scope.productInfo);
            },function(failureResponse){
                $scope.dataLoaded = false;
                console.log(failureResponse);
            })
        }*/
    });
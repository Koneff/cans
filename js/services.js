angular.module('cans.services',[])
    .service('anchorSmoothScroll', function(){

        this.scrollTo = function(sID) {

            var startY = currentYPosition();
            var stopY = sectionYPosition(sID);
            var distance = stopY > startY ? stopY - startY : startY - stopY;
            if (distance < 100) {
                scrollTo(0, stopY); return;
            }
            var speed = Math.round(distance / 100);
            if (speed >= 20) speed = 20;
            var step = Math.round(distance / 25);
            var leapY = stopY > startY ? startY + step : startY - step;
            var timer = 0;
            if (stopY > startY) {
                for ( var i=startY; i<stopY; i+=step ) {
                    setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
                    leapY += step; if (leapY > stopY) leapY = stopY; timer++;
                } return;
            }
            for ( var i=startY; i>stopY; i-=step ) {
                setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
                leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
            }

            function currentYPosition() {
                // Firefox, Chrome, Opera, Safari
                if (self.pageYOffset) return self.pageYOffset;
                // Internet Explorer 6 - standards mode
                if (document.documentElement && document.documentElement.scrollTop)
                    return document.documentElement.scrollTop;
                // Internet Explorer 6, 7 and 8
                if (document.body.scrollTop) return document.body.scrollTop;
                return 0;
            }

            function sectionYPosition(sID) {
                var section = document.getElementById(sID);
                var y = section.offsetTop;
                var node = section;
                while (node.offsetParent && node.offsetParent != document.body) {
                    node = node.offsetParent;
                    y += node.offsetTop;
                } return y;
            }

        };

    })

    .factory('Products',function($http,$q){
        var o = {
            queue: []
        }
        o.getProducts = function(){
           // var deferred = $q.defer();
            return $http({
                method: 'Get',
                url: 'data/data.json',
                dataType: 'json',
                headers: {
                    'Accept': 'application/json, text/javascript',
                    'Content-Type': 'application/json; charset=utf-8'
                }
            }).success(function(data){
                //console.log('success',successResponse);
                angular.forEach(data, function (item) {
                    o.queue.push({
                        id: item.id,
                        name: item.name,
                        image: item.image,
                        description: item.text,
                        price: item.price,
                        oldPrice: item['old-price']
                    })
                });
                //deferred.resolve(successResponse);

            });
        };
        return o;

    })

    .factory('Mandrill',function($http,KEYS){
        var messagePost={
            key: '',
            message: {
                from_email:'email',
                from_name:'email_name',
                headers:{
                    Reply-To:'email'
                }
            }
        }

    })

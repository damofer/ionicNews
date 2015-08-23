angular.module('starter.controllers', ['ionic'])

.config(['$ionicConfigProvider', function($ionicConfigProvider) {

    $ionicConfigProvider.tabs.position('bottom'); // other values: top

}])






.controller('DashCtrl', function($scope) {})


.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})
.controller('MainDetailCtrl', function($scope, $stateParams, Chats) {
  
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('IntroCtrl', function($scope, $state, $ionicSlideBoxDelegate) {
 
  // Called to navigate to the main app
  $scope.startApp = function() {
    $state.go('main');
  };
  $scope.next = function() {
    $ionicSlideBoxDelegate.next();
  };
  $scope.previous = function() {
    $ionicSlideBoxDelegate.previous();
  };

  // Called each time the slide changes
  $scope.slideChanged = function(index) {
    $scope.slideIndex = index;
  };
})
/*
.controller('MainCtrl', function($scope, $state, $http, $q) {
  console.log('MainCtrl');
  
  $scope.init = function(){
    $scope.page = 1;
    $scope.getImages()
    .then(function(res){
      // success
      console.log('Images: ', res)
      $scope.imageList = res.shots;
    }, function(status){
      // err
      $scope.pageError = status;
    })
  }

  $scope.setActive = function(index){
    angular.forEach($scope.imageList, function(image){
      image.active = false;
    })

    $scope.imageList[index].active = true
  }


  $scope.getImages = function(){
    var defer = $q.defer();

   $http.jsonp('http://api.dribbble.com/shots/everyone?page=' + $scope.page +  '&callback=JSON_CALLBACK')
  // $http.jsonp('https://videogamesrating.p.mashape.com/get.php?count='+$scope.page+'&callback=JSON_CALLBACK')
    .success(function(res){
      defer.resolve(res)
    })
    .error(function(status, err){
      defer.reject(status)
    })

    return defer.promise;
  }

  $scope.nextPage = function(){
    $scope.page += 1;

    $scope.getImages()
    .then(function(res){
      if($scope.imageList[0]){
        $scope.imageList = $scope.imageList.concat(res.shots)
      }
      else{
        $scope.imageList = res.shots;
      }
      console.log('nextPage: ', $scope.imageList)
      $scope.$broadcast('scroll.infiniteScrollComplete');
    })
  }

  function showMyVideos(data) {
  var feed = data.feed;
  var entries = feed.entry || [];
  var html = ['<ul>'];
  for (var i = 0; i < entries.length; i++) {
    var entry = entries[i];
    var title = entry.title.$t;
    html.push('<li>', title, '</li>');
  }
  html.push('</ul>');
  document.getElementById('videos').innerHTML = html.join('');
} 

  $scope.init();
 

}) */

.service("MainService", function($http,$q){
 var deferred = $q.defer();

var index ={};
  
  $http.get('json/news.json').then(function (data) 
  {
    deferred.resolve(data);

    console.log(data.data);
  });

  this.getPlayers = function()
{
  return deferred.promise;
}
this.setPosition =function(position){

this.index = position;
}





})


.controller('MainCtrl', function($scope, MainService, $state, $http, $q,$ionicHistory) 
{

 

  var promise = MainService.getPlayers();
  promise.then(function(data)
  {

$scope.imageList = data.data;
  })
 
$scope.position;

  $scope.SetNew =function(position){

   $scope.position=parseInt(position,10);
   MainService.setPosition($scope.position);
    //$scope.position=position;
    console.log(MainService.index);

  }
   $scope.ReturnNew =function(){
    console.log(MainService.index);
   return  MainService.index;
 }
    

 
  $scope.myGoBack = function() {
    $ionicHistory.goBack();
  }




  


})






angular.module('starter.controllers', ['firebase'])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope,$firebaseArray,$firebaseObject) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  var chat = this;
  console.log("chat");

  var chatRef = firebase.database().ref('/user');
  chat.users = $firebaseArray(chatRef);
  console.log(chat.users);
   
  for(i=0;i<chat.users.length;i++){

  console.log(chat.users.$id);

  } 
  

  
  
})
.controller('ChatDetailCtrl', function($scope, $stateParams) {
  //$scope.chat = Chats.get($stateParams.chatId);
})
    .controller('loginCtrl', function($scope,$stateParams,$state,$firebaseObject,auth,$firebaseArray) {
        var login = this;
        console.log("LogIn");



         var rootRef = firebase.database().ref();
         var userRef = rootRef.child("user");
         login.users = $firebaseArray(userRef);  

      

         
         login.google = google;
         login.facebook = facebook;

         function google(){
        var promise = auth.$signInWithPopup("google");  
        promise.then(function(result){
         console.log(result);
         login.users.$add({"name":result.user.displayName,"mail":result.user.email,"img":result.user.photoURL});
    
                              
          $state.go('tab.account');
    }).catch(function(err){
     console.log(err);
    });

  }

        function facebook(){
    var promise = auth.$signInWithPopup("facebook");  
    promise.then(function(result){
       console.log(result);
        login.users.$add({"name":result.user.displayName,"mail":result.user.email,"img":result.user.photoURL});
       $state.go('tab.account');
        }).catch(function(err){
     console.log(err);
    });

  }

  this.loginmenu=function () {
            console.log("page change");
            $state.go('tab.chats');

        }
   
    })

.controller('AccountCtrl', function($scope,person) {
  $scope.settings = {
    enableFriends: true,
  };
  var account = this;
  console.log(person);
  account.user = person

});

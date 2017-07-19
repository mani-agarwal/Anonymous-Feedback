angular.module('starter.services', [])

.factory("auth",function($firebaseAuth){
  return $firebaseAuth();
})


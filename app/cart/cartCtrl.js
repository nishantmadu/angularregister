(function() {


  function cartCtrl($scope) {
    $scope.cartItems = 0;
    $scope.$on("ITEM_ADDED", function(evt, args) {
      console.log(args);
      $scope.cartItems++;
    });
  }
  angular.module("cart", []).controller("cartCtrl", ["$scope", cartCtrl]);
})();

(function() {


  function cartCtrl($scope, cartSvc) {
    $scope.cartItems = cartSvc.getItem().length;
    // $scope.$on("ITEM_ADDED", function(evt, args) {
    //   // $scope.cartItems = $scope.cartCount;
    //   console.log(args);
    //   // $scope.cartItems++;
    //
    // });
  }
  angular.module("cart").controller("cartCtrl", ["$scope", "cartSvc", cartCtrl]);
})();

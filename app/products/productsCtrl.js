(function() {

  function productsCtrl($scope, $rootScope) {
    // $geolocation.getCurrentPosition({
    //   timeout: 1000
    // }).then(function(position) {
    //   $scope.myPosition = position;
    //   console.log(position);
    // });

    $scope.addToCart = function(item) {
      $rootScope.$broadcast("ITEM_ADDED", {
        product: item
      });
    }
  }
  angular.module("products", []).controller("productsCtrl", ["$scope", "$rootScope", productsCtrl]);
})();

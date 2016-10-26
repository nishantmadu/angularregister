(function() {

  function gadgetsCtrl($scope, gadgetSvc) {
    // $scope.gadgetItems = gadgetSvc.gadgetList();
    gadgetSvc.gadgetApi()
      .then(function(response) {
        $scope.gadgetObj = response;
        $scope.gadgetItems = $scope.gadgetObj.data.gadgets;
        console.log(response);
      })
      .catch(function() {
        console.log("Error please check");
        console.log(response);
      })
  }

  angular.module("gadgets", []).controller("gadgetsCtrl", ["$scope", "gadgetSvc", gadgetsCtrl]);
})();

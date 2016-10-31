(function() {

  function gadgetsCtrl($scope, gadgetSvc, $geolocation) {
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

    $geolocation.getCurrentPosition({
      timeout: 1000
    }).then(function(position) {
      $scope.myPosition = position;
      console.log(position);
    });

  }

  angular.module("gadgets", []).controller("gadgetsCtrl", ["$scope", "gadgetSvc", "$geolocation", gadgetsCtrl]);
})();

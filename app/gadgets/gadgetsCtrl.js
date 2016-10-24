(function() {

  function gadgetsCtrl($scope, gadgetSvc) {
    $scope.gadgetItems = gadgetSvc.gadgetList();
  }

  angular.module("gadgets", []).controller("gadgetsCtrl", ["$scope", "gadgetSvc", gadgetsCtrl]);
})();

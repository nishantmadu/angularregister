(function() {

  function gadgetSvc($q, $http) {
    // this.gadgetList = function() {
    //   var gadgets = [{
    //     imageUrl: "app/gadgets/images/1.jpg",
    //     gadgetTitle: "Apple Watch",
    //     gadgetPrice: "$949"
    //   }, {
    //     imageUrl: "app/gadgets/images/2.jpg",
    //     gadgetTitle: "Sony QX10 Lens",
    //     gadgetPrice: "$230"
    //   }, {
    //     imageUrl: "app/gadgets/images/3.jpg",
    //     gadgetTitle: "DJI-Inspire 1",
    //     gadgetPrice: "$1999"
    //   }, {
    //     imageUrl: "app/gadgets/images/4.jpg",
    //     gadgetTitle: "Oculus Rift-VR",
    //     gadgetPrice: "$549"
    //   }];
    //   return gadgets;
    // };

    this.gadgetApi = function() {
      var dfd = $q.defer();
      $http.get('app/api/gadgets.json')
        .then(function(response) {
          dfd.resolve(response);
        })
        .catch(function(response) {
          dfd.reject(response);
        })

      return dfd.promise;
    }
  }

  angular.module("gadgets").service("gadgetSvc", ["$q", "$http", gadgetSvc]);
})();

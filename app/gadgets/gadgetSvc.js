(function() {

  function gadgetSvc() {
    this.gadgetList = function() {
      var gadgets = [{
        imageUrl: "app/gadgets/images/1.jpg",
        gadgetTitle: "Apple Watch",
        gadgetPrice: "$949"
      }, {
        imageUrl: "app/gadgets/images/2.jpg",
        gadgetTitle: "Sony QX10 Lens",
        gadgetPrice: "$230"
      }, {
        imageUrl: "app/gadgets/images/3.jpg",
        gadgetTitle: "DJI-Inspire 1",
        gadgetPrice: "$1999"
      }, {
        imageUrl: "app/gadgets/images/4.jpg",
        gadgetTitle: "Oculus Rift-VR",
        gadgetPrice: "$549"
      }];
      return gadgets;
    };
  }

  angular.module("gadgets").service("gadgetSvc", [gadgetSvc]);
})();

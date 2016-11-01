(function() {

  function cartSvc() {
    var cartItems = [];
    this.addItems = function(data) {
      cartItems.push(data);
    };
    this.getItem = function() {
      return cartItems;
    };
  }

  angular.module("cart").service("cartSvc", cartSvc);
})();

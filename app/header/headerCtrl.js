(function() {

  function headerCtrl($scope) {
    $scope.brandName = "nike";
    $scope.headerUrl = "app/header/header.html";
    $scope.navText = [{
      name: "Home",
      templateUrl: ""
    }, {
      name: "Login",
      templateUrl: "app/login/login.html"
    }, {
      name: "Register",
      templateUrl: "app/register/register.html"
    }, {
      name: "Products",
      templateUrl: "app/products/products.html"
    }, {
      name: "Gadgets",
      templateUrl: "app/gadgets/gadgets.html"
    }, {
      name: "Cart",
      templateUrl: "app/cart/cart.html"
    }];

    $scope.productList = [{
        modelName: "Moto E3 Power(Black, 16GB)",
        imageUrl: "app/products/images/1.jpeg",
        modelPrice: "7,999",
        featureList: ["2 GB RAM | 16 GB ROM | Expandable Upto 32 GB", "5 inch HD Display", "8MP Primary Camera | 5MP Front", "3500 mAh Battery", "MT6735p 64-bit Processor", "1 Year Manufacturer Warranty"]
      },

      {
        modelName: "Apple iPhone 6 (Space Grey, 16 GB)",
        imageUrl: "app/products/images/2.jpeg",
        modelPrice: "36,990",
        featureList: ["1 GB RAM | 16 GB ROM |", "4.7 inch Retina HD Display", "8MP Primary Camera | 1.2MP Front", "Li-Ion Battery", "A8 Chip with 64-bit Architecture and M8 Motion Co-processor Processor", "1 Year Manufacturer Warranty"]
      },

      {
        modelName: "Apple iPhone 5S (Silver, 16 GB)",
        imageUrl: "app/products/images/3.jpeg",
        modelPrice: "20,990",
        featureList: ["1 GB RAM | 16 GB ROM |", "4 inch Retina Display", "8MP Primary Camera | 1.2MP Front", "1560 mAh Li-Ion Battery", "A7 Chip with 64-bit Architecture and M7 Motion Coprocessor Processor", "1 Year Manufacturer Warranty"]
      },

      {
        modelName: "LeEco Le 2 (Gold, 32 GB)",
        imageUrl: "app/products/images/4.jpeg",
        modelPrice: "11,999",
        featureList: ["3 GB RAM | 32 GB ROM |", "5.5 inch Full HD Display", "16MP Primary Camera | 8MP Front", "3000 mAh Li-Ion Polymer Battery", "Qualcomm MSM8976 Snapdragon 652 Processor", "1 Year Manufacturer Warranty"]
      }
    ];

    // $scope.gadgetItems = lookupSvc.gadgetList();


    $scope.loadPage = function(item) {
      $scope.contentUrl = item.templateUrl;
    }
  }


  angular.module("header", []).controller("headerCtrl", headerCtrl);
})();

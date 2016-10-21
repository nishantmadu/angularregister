(function(){

function headerCtrl($scope){
      $scope.brandName="nike";
      $scope.headerUrl="app/header/header.html";
      $scope.navText=[{name:"Home",templateUrl:""},
        {name:"Login",templateUrl:"app/login/login.html"},
        {name:"Register",templateUrl:"app/register/register.html"},
        {name:"Product",templateUrl:""}];
      $scope.loadPage=function(item){
        $scope.contentUrl=item.templateUrl;
      }
}


angular.module("header",[]).controller("headerCtrl",headerCtrl);
})();

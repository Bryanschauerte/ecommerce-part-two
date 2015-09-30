var app = angular.module('eCommerce').controller('mainCtrl', function($scope, productService){

$scope.showAddForm = false;
$scope.showAddFormButton = true;
$scope.showEditButton = true;
$scope.showEditForm = false;

$scope.productId = '';
$scope.searchName = ''
$scope.gotId = false;

$scope.getId = function(name){
  $scope.showEditButton = false;
  $scope.showEditForm = false;

  productService.findName(name).then(function(response){
    console.log(282828, response);
    $scope.productId = response;
  })
}


$scope.editButton = function(){
  $scope.showEditButton = !$scope.showEditButton;
  $scope.showEditForm = !$scope.showEditForm;
}

$scope.removeProduct = function(targetId){
  console.log(targetId);
  productService.removeProduct(targetId).then(function(response){
    // console.log('this' +response.data+"removeddddd")

    $scope.targetToDelete = '';

  });

}


$scope.toggleAddForm = function(){
  $scope.showAddForm = !$scope.showAddForm;
  $scope.showAddFormButton = !$scope.showAddFormButton;
  }

  $scope.getProducts = function(){
		productService.getProducts().then(function(response){
			$scope.products = response.data;


		})
	};

$scope.getProducts();

$scope.addProduct = function(name, price, description) {
  productService.addProduct(name, price, description).then(function(response){
    console.log(response.data)
    $scope.products = response.data;
    $scope.toggleAddForm();


  });

};


$scope.editAnItem = function(productId, name, price, description) {
  productService.editProducts(productId, name, price, description).then(function(response){
    $scope.products = response.data;
    $scope.showEditButton = true;
    $scope.showEditForm = false;
    $scope.productId ='';

  });

};


})

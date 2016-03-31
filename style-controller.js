var angularStyle = angular.module("angularStyle", []);
angularStyle.controller("styleController", function($scope){//($http, $cookies, $routes, $compile...)

var NewStudent = function(name, former){
	this.name = name;
	this.former = former;
} 

var items = [];

$scope.items = items;

$scope.items.push(new NewStudent("Tristan", "Stock Guy"));
$scope.items.push(new NewStudent("Joshua", "ios Student"));
$scope.items.push(new NewStudent("Bogdon", "mechanic"));
$scope.items.push(new NewStudent("Lazlo", "KGB"));
$scope.items.push(new NewStudent("Keith", "Geologist"));
$scope.items.push(new NewStudent("Will", "Ski Ninja"));
$scope.items.push(new NewStudent("Curtis", "IT Master"));
$scope.items.push(new NewStudent("Joe", "The Controller"));
$scope.items.push(new NewStudent("Kochan", "Demon Deacon"));
$scope.items.push(new NewStudent("Patrick", "Outlaw"));
$scope.items.push(new NewStudent("Jonaton", "Boring Linguist"));
$scope.items.push(new NewStudent("Jeremy", "Magnum PI"));


console.log(items);

})
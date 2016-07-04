angular.module('broadcastApp')

.controller('ProductsCtrl', ['$scope',
	'$http',
	'$location',
	'$cookieStore',
	'selectionService',
	function($scope, $http, $location, $cookieStore, selectionService) {
		var vm = this,
			customerId = $cookieStore.get('customerId');
		// data for the basket view
		$scope.selections = [];

		// request to api
		$http({
			method: 'GET',
			url: '/customer/find?identifier=' + customerId
		}).success(function(customer) {

			if (typeof customer !== 'undefined' && customer.length > 0) {
				$http({
					method: 'GET',
					url: '/product/getProducts?location=' + customer[0].location.id
				}).success(function(products) {

					var sports = [],
						news = [];
					products.forEach(function(index) {
						//category 1 is sports
						if (index.category === 1) {
							sports.push(index);
							//category 2 is news
						} else if (index.category === 2) {
							news.push(index);
						}
					})
					$scope.news = news;
					$scope.sports = sports;
				});
			} else {
				window.alert('There was a problem retrieving customer information');
				document.location.href = '/';
				return false;
			}

		});

		//view methods
		$scope.addRemoveFromBasket = function addRemoveFromBasket(value, product) {
			value ? vm.addToBasket(product) : vm.removeFromBasket(product);
		};

		$scope.enableBtn = function enableBtn() {
			return $scope.selections.length < 1;
		};

		$scope.go = function go(path) {
			selectionService.setSelection($scope.selections);
			$location.path(path);
		};
		vm.addToBasket = function addToBasket(product) {
			$scope.selections.push(product);
		};
		vm.removeFromBasket = function removeFromBasket(product) {
			var index = $scope.selections.indexOf(product);
			$scope.selections.splice(index, 1);
		};

	}
]);
angular.module('broadcastApp')

.controller('ConfirmationCtrl', ['$scope', '$http', 'selectionService', '$cookieStore', function($scope, $http, selectionService, $cookieStore) {
	$scope.customerId = $cookieStore.get('customerId');

	$scope.$watch(function() {
		$scope.selections = selectionService.getSelection();
	}, function(newValue, oldValue) {
		if (newValue !== oldValue) $scope.selections = newValue;
	});
}]);
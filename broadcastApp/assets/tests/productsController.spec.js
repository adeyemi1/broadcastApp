/*
 * Unit tests for product controller
 *
 */
describe('ProductController', function() {
	var scope, controller;
	beforeEach(module('broadcastApp'));

	beforeEach(inject(function($rootScope, _$controller_, $location) {
		scope = $rootScope.$new();
		$controller = _$controller_;
		controller = $controller('ProductsCtrl', {
			$scope: scope
		});
	}));
	describe('$scope.selections', function() {
		it('should type of array', function() {
			expect(typeof scope.selections).toBe('object');
		});
		it('should be empty at start', function() {
			expect(scope.selections.length).toBe(0);
		});
	});

	describe('$scope.addRemoveFromBasket', function() {
		it('should invoke addToBasket method if value is true', function() {
			var value = true;
			spyOn(controller, 'addToBasket');

			scope.addRemoveFromBasket(value, 'Test TV');

			expect(controller.addToBasket).toHaveBeenCalled();
		});

		it('should invoke removeFromBasket method if value is false', function() {
			spyOn(controller, 'removeFromBasket');
			var value = false;
			scope.addRemoveFromBasket(value, 'Test TV');

			expect(controller.removeFromBasket).toHaveBeenCalled();
		});
	});

	describe('$scope.enableBtn', function() {
		it('should return true, if the length of selections is less than 1', function() {
			scope.selections = [];
			var result = scope.enableBtn();

			expect(result).toBe(true);
		});

	});

	describe('vm.addToBasket', function() {
		it('should add item to basket', function() {
			scope.selections = [];
			controller.addToBasket('Test Sky TV');

			expect(scope.selections.length).toBeGreaterThan(0);
		});

	});

	describe('vm.removeFromBasket', function() {
		it('should remove item to basket', function() {
			scope.selections = [];
			controller.addToBasket('Test Sky TV');
			controller.removeFromBasket('Test Sky TV');

			expect(scope.selections.length).toBe(0);
		});

	});

});
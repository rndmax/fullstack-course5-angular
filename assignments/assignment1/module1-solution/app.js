(function() {
    'use strict';

    angular
        .module('LunchCheck', [])
        .controller('LunchCheckController', LunchChek);
    LunchChek.$inject = ['$scope'];

    function LunchChek($scope) {
        $scope.checkInput = function() {
            let items = $scope.text ? $scope.text.split(',') : '';
            if (items.length === 0) $scope.message = 'Please enter data first';
            else if (items.length <= 3) $scope.message = 'Enjoy!';
            else $scope.message = 'Too much!';
        };
    }
})();
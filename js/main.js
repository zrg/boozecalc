(function(angular) {
    'use strict';
    angular.module('bc', [])
    .controller('Controller', ['$scope', '$filter', function($scope, $filter) {
        $scope.boozes = [];
        $scope.addBooze = function() {
            $scope.boozes.push({});
        };
        $scope.addBooze();
        $scope.sortBooze = function() {
            $scope.boozes = $filter('orderBy')(
                $filter('filter')($scope.boozes, function(element){
                    if (element.volume && element.proof) {
                        return true;
                    } else {
                        return false;
                    }
                }), $scope.getDollarPerProof);
            if ($scope.boozes.length === 0) {
                $scope.addBooze();
            }
        }
        $scope.getDollarPerProof = function(booze) {
            var dollarPerLiter = (booze.cost / booze.volume) * 1000;
            var dollarPerProof = dollarPerLiter / booze.proof
            return dollarPerProof;
        }
    }]);
})(window.angular);

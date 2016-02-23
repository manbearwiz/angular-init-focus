(function(angular) {
  'use strict';

  angular.module('app')
    .directive('initFocus', function() {
      return {
        restrict: 'A', // only activate on element attribute
        link: function(scope, element, attrs) {
          element.focus();
        }
      };
    });

})(window.angular);

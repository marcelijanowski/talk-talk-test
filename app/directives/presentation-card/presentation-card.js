export default ngModule => {

  if (ON_TEST) {
    require('./presentation-card.test')(ngModule);
  }

  ngModule.directive('presentationCard', function () {
    require('./presentation-card.scss');
    return {
      restrict: 'E',
      replace: true,
      scope: {
        content: '='
      },
      template: require('./directive-partial.html'),
      controllerAs: 'vm',
      controller: function ($scope) {
        const vm = this;

        vm.content = $scope.content;
      }
    };
  });
};
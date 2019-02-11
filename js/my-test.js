angular
  .module('my-test', [])
  .component('prmActionContainerAfter', {
  bindings: { parentCtrl: '<' },
    controller: function controller($scope) {
        this.$onInit = function() {
          console.log("my test!");

        };

    },
  template: '<div>My test - updated for patch!</div>'
});

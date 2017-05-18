angular
.module('thisApp')
.controller('TasksEditCtrl', TasksEditCtrl);

TasksEditCtrl.$inject = ['$stateParams', 'Task', '$state'];
function TasksEditCtrl($stateParams, Task, $state){
  const vm  = this;
  vm.task = Task.get($stateParams);
  vm.update = tasksUpdate;

  console.log(vm.task);

  vm.postcodeValidate = /^(([gG][iI][rR] {0,}0[aA]{2})|((([a-pr-uwyzA-PR-UWYZ][a-hk-yA-HK-Y]?[0-9][0-9]?)|(([a-pr-uwyzA-PR-UWYZ][0-9][a-hjkstuwA-HJKSTUW])|([a-pr-uwyzA-PR-UWYZ][a-hk-yA-HK-Y][0-9][abehmnprv-yABEHMNPRV-Y]))) {0,}[0-9][abd-hjlnp-uw-zABD-HJLNP-UW-Z]{2}))$/;

  function tasksUpdate(){
    if (vm.editForm.$valid) {
      Task
      .update({id: $stateParams.id }, vm.task)
      .$promise
      .then(() => {
        $state.go('tasksIndex');
      });
    }
  }
}

angular
.module('thisApp')
.controller('TasksNewCtrl', TasksNewCtrl);

TasksNewCtrl.$inject = ['$state', 'Task', 'CurrentUserService'];
function TasksNewCtrl($state, Task, CurrentUserService){
  const vm = this;
  vm.create = taskCreate;

  vm.user = CurrentUserService.currentUser;
  vm.postcodeValidate = /^(([gG][iI][rR] {0,}0[aA]{2})|((([a-pr-uwyzA-PR-UWYZ][a-hk-yA-HK-Y]?[0-9][0-9]?)|(([a-pr-uwyzA-PR-UWYZ][0-9][a-hjkstuwA-HJKSTUW])|([a-pr-uwyzA-PR-UWYZ][a-hk-yA-HK-Y][0-9][abehmnprv-yABEHMNPRV-Y]))) {0,}[0-9][abd-hjlnp-uw-zABD-HJLNP-UW-Z]{2}))$/;

  function taskCreate(){
    if (vm.taskForm.$valid) {
      vm.task.createdBy = vm.user._id;
      Task
      .save(vm.task)
      .$promise
      .then(() => {
        $state.go('tasksIndex');
      });
    }
  }
}

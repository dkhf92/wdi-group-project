angular
.module('thisApp')
.controller('TasksShowCtrl', TasksShowCtrl);

TasksShowCtrl.$inject = ['$stateParams', 'Task', 'CurrentUserService', 'Charity'];
function TasksShowCtrl($stateParams, Task, CurrentUserService, Charity){
  const vm  = this;

  vm.user = CurrentUserService.currentUser;

  vm.task = Task.get($stateParams);

  vm.canRequest = (array, object) => {
    if(array) {
      if(array.find(x => x.user._id === object.user._id)) return true;
    }
    return false;
  };



  function getCharities() {
    vm.charities = [];
    Charity
      .query()
      .$promise
      .then(charities => {
        charities.forEach(charity => {
          if (charity.favouritedBy.includes(vm.user._id)) {
            vm.charities.push(charity);
          }
        });
      });
  }
  getCharities();

  vm.request = () => {
    if ((vm.task.requestedBy.find(x => x.user._id === vm.user._id)) || (vm.task.createdBy === vm.user._id)) {
      return console.log('Sorry you can\'t request this job - you either created it, or have already requested it.');
    } else if (!vm.charity) {
      return console.log('please select a charity');
    }

    vm.task.requestedBy.push({user: vm.user._id, charity: vm.charity});
    Task
      .update({ id: $stateParams.id }, vm.task)
      .$promise
      .then(() => {
        vm.task = Task.get($stateParams);
      });
  };

  vm.assign = (user, charity, $index) => {
    if (vm.task.assignedTo.find(x => x._id === user._id)) {
      return console.log('Sorry that user is already assigned to this task.');
    }
    vm.task.assignedTo.push(user._id);
    if (!vm.task.charity) vm.task.charity = charity._id;
    vm.task.requestedBy.splice($index, 1);
    Task
      .update({ id: $stateParams.id }, vm.task)
      .$promise
      .then(() => {
        vm.task = Task.get($stateParams);
      });
  };

  vm.reject = (user, charity, $index) => {
    vm.task.requestedBy.splice($index, 1);
    Task
      .update({ id: $stateParams.id }, vm.task)
      .$promise
      .then(() => {
        vm.task = Task.get($stateParams);
      });
  };

}

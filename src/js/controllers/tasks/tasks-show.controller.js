angular
.module('thisApp')
.controller('TasksShowCtrl', TasksShowCtrl);

TasksShowCtrl.$inject = ['$stateParams', 'Task', 'CurrentUserService', 'Charity'];
function TasksShowCtrl($stateParams, Task, CurrentUserService, Charity){
  const vm  = this;

  vm.user = CurrentUserService.currentUser;

  vm.task = Task.get($stateParams);

// Trying to store charity and user ID as a request when the user clicks the request button. Problem is that the .populate() in the back-end (in controllers/tasks) is no longer populating (I think) because the model now contains multiple schemas.
// We are storing the id's correctly, so we can do a get request to find the user and charity info, but it seems like a long-winded solution...

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
        console.log(vm.charities);
      });
  }
  getCharities();

  vm.request = () => {
    if ((vm.task.requestedBy.find(x => x.user === vm.user._id)) || (vm.task.createdBy === vm.user._id)) {
      return console.log('Sorry you can\'t request this job - you either created it, or have already requested it.');
    }
    console.log('clicked');
    console.log(vm.charity);
    vm.task.requestedBy.push({user: vm.user._id, charity: vm.charity});
    Task
      .update({ id: $stateParams.id }, vm.task)
      .$promise
      .then(() => {
        vm.task = Task.get($stateParams);
      });
  };

  vm.assign = (user) => {
    if (vm.task.assignedTo.find(x => x._id === user._id)) {
      return console.log('Sorry that user is already assigned to this task.');
    }
    vm.task.assignedTo.push(user._id);
    Task
      .update({ id: $stateParams.id }, vm.task)
      .$promise
      .then(() => {
        vm.task = Task.get($stateParams);
      });
  };

}

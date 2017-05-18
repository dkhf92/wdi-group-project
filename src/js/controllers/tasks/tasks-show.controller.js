angular
.module('thisApp')
.controller('TasksShowCtrl', TasksShowCtrl);

TasksShowCtrl.$inject = ['$stateParams', 'Task', 'CurrentUserService', 'Charity', '$rootScope'];
function TasksShowCtrl($stateParams, Task, CurrentUserService, Charity, $rootScope){
  const vm  = this;

  vm.user = CurrentUserService.currentUser;
  console.log(vm.user);
  vm.task = Task.get($stateParams);

  vm.canRequest = (array, object) => {
    if(array) {
      if(array.find(x => x.user._id === object.user._id)) return true;
    }
    return false;
  };


  $rootScope.$on('charitySaved', () => {
    vm.getCharities();
  });

  vm.getCharities = () => {
    if (vm.charities) vm.charities.length = 0;
    vm.charities = [];
    Charity
      .query()
      .$promise
      .then(charities => {
        charities.forEach(charity => {
          if ((charity.favouritedBy.includes(vm.user._id)) && !(vm.charities.find(x => x._id === charity._id))) {
            vm.charities.push(charity);
          }
        });
      });
  };
  vm.getCharities();

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
        vm.modalText = 'Thanks for requesting this task, we\'ll be in touch if the creator accepts your request!';
        vm.showModal();
        vm.task = Task.get($stateParams);
      });
  };

  vm.assign = (user, charity, $index) => {
    if (vm.task.assignedTo.find(x => x._id === user._id)) {
      vm.modalText = 'Sorry that user is already assign to this task.';
      vm.showModal();
      return console.log('Sorry that user is already assigned to this task.');
    }
    vm.task.assignedTo.push(user._id);
    if (!vm.task.charity) vm.task.charity = charity._id;
    vm.task.requestedBy.splice($index, 1);
    Task
      .update({ id: $stateParams.id }, vm.task)
      .$promise
      .then(() => {
        vm.modalText = 'User successfully assigned.';
        vm.showModal();
        vm.task = Task.get($stateParams);
      });
  };

  vm.showModal = () => {
    vm.requestModal.style.display = 'block';
  };
  window.onclick = function(event) {
    if (event.target == vm.requestModal) {
      vm.requestModal.style.display = 'none';
    }
  };

  vm.closeModal = () => {
    vm.requestModal.style.display = 'none';
  };

  vm.requestModal = document.getElementById('requestModal');

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

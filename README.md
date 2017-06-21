<h3>WDI - Group Project</h3>
<h4>My third project for WDI in London</h4>

<h4>FeelGood</h4>

<img src ="https://raw.githubusercontent.com/dkhf92/wdi-group-project/master/src/images/homepage.png">


This was our first group project completed for the WDI-26 course at General Assembly London. Our group consisted of Matteo Morandini, Horace Keating, Didrik Forsberg and Imran Mughal.


Our project brief was to create a full-stack RESTful application, that includes authentication using Express and Mongo, whilst using the Angular framework on the clientside.


How the project came and how it works Many of us want to make the world we live in a better place, and positive contributions to our society certainly is a way that can be achieved. So, we thought wouldnt it be a great idea for our group project to be something more than just a technical exercise. Something that would allow us to positively impact the lives of others.


FeelGood is an online platform that allows users to post jobs that they'd want to be done and pledge a given amount to charity on completion of that job. Other users are then able to browse available jobs that have been posted and can request to complete them. The job creator can then approve or reject the job request.


Any money pledged is then given to the job completers charity of choice.


After logging in the User is directed to the tasks index page where they are presented with all available tasks that can be browsed. The task, it's location and the sum pledged are viewable by the user. The User can then request the task for themeselves, but only after they select a charity that they would like to use.


<h3>Planning</h3>

With a project of this magnitude we knew that from the start things had to be meticulously planned in order to prevent any problems from effecting us later on. We used the project management tool Trello to keep track of developments and list any backlog. And used Balsamiq to create wireframes of how we wanted the app to be presented visually.


<h3>Challenges faced</h3>

We faced many obstacles in the making of this project. We decided that as a group we were going to try and use a different CSS framework in order to challenge ourselves and learn, and found the Tachyons CSS framework to be ideal. We found working as a group at first to be different and unusual.

<h3>The code</h3>

```

    createdTasks();
    availableTasks();
    requestedTasks();
    assignedTasks();
  }
  $rootScope.$on('taskCreated', () => {
    filterTasks();
  });

  function availableTasks() {
    const params = { createdBy: '!' + vm.user._id };
    Task
    .query()
    .$promise
    .then(tasks => {
      const all = filterFilter(tasks, params);
      const available = [];
      all.forEach(task => {
        if (task.requestedBy.length === 0) {
          available.push(task);
        } else {
          if (task.requestedBy.find(x => x.user._id === vm.user._id)) {
            console.log('Task already requested by user ', task);
          } else available.push(task);
        }
      });
      vm.available = available;
    });
  }

  function createdTasks() {
    const params = { createdBy: vm.user._id };
    Task
    .query()
    .$promise
    .then(tasks => {
      vm.created = filterFilter(tasks, params);
    });
  }

  function requestedTasks() {
    Task
    .query()
    .$promise
    .then(tasks => {
      const requested = [];
      tasks.forEach(task => {
        if(task.requestedBy.find(x => x.user._id === vm.user._id)) {
          requested.push(task);
        }
      });
      vm.requested = requested;
    });
  }
  
  function assignedTasks() {
    Task
    .query()
    .$promise
    .then(tasks => {
      const assigned = [];
      tasks.forEach(task => {
        if(task.assignedTo.find(x => x === vm.user._id)) {
          assigned.push(task);
        }
      });
      vm.assigned = assigned;
    });
  }
  
```
<h3>How we overcame the problems</h3>

We found that the easiest way to associate our tasks with different users in different ways was to reference users in multiple fields in the task model. This then led to some difficulties in filtering tasks for our index page: in the 'Available tasks' section we wanted to only display tasks that the user had neither requested nor created, while in the 'Created tasks' we wanted to show all tasks the user had created, but with different information displayed depending on whether the task had been requested by another user.

This led to a fairly long set of functions to create different arrays based on these varying conditions. Due to the limitations of Angular when making requests to the back-end we struggled to always access the necessary tasks in the different sections of the Tasks Index. In the end we used a combination of ng-filter and .find() functions to narrow down our task queries to get the results we needed.

Late on Thursday this method for storing user ids in the task model gave us a bit of a problem: because the request was removed from the requestedBy field when a user was assigned to a task, they were no longer able to find the tasks they had requested once had been assigned to them. This proved fairly straightforward to fix by writing another task filtering function, this time looking inside the assignedTo field and searching for the current user's id.

<h3>Biggest wins</h3>
 TDD, Tachyons, Angular superpowers.



<h3>How we'd make it more awesome!</h3>

Sadly we were not able to implement all the features that we wanted to when brainstorming. Though we had implemented certain features to increase the user experience, such as creating tabs on the jobs index. That allowed the user to flawlessly navigate through the different sections with relative ease and comfort.

<h3>Packages and Dependencies used</h3>

Express
Node
Mongo
Mongoose
Bcrypt
Angular
Angular-ui-router
Angular-messages
Angular-jwt
Angular-animate
BodyParser
Bluebird
Cors

<h3>Credit</h3>

GA instructors Alex Chin, Rane Gowan, Natalie Huitson and Edmund Compton.

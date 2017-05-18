angular
.module('thisApp')
.directive('googleMap', googleMap);

googleMap.$inject = ['$window','$http', '$timeout', 'API'];
function googleMap($window, $http, $timeout, API){
  return{
    restrict: 'E',
    replace: 'true',
    template: '<div class="google-map">GOOGLE MAP GOES HERE</div>',
    scope: {
      tasks: '='
    },
    link(scope, element){
      const map = new $window.google.maps.Map(element[0], {
        zoom: 10,
        center: { lat: 51.5, lng: -0.07 }
      });

      $timeout(function() {
        for (var i = 0; i < scope.tasks.length; i++) {
          geocode(scope.tasks[i]);
        }
      }, 300);

      function geocode(task){
        $http
        .get(`http://maps.googleapis.com/maps/api/geocode/json?&address=${task.location.postcode}`)
        .then(data => {
          var coords = (data.data.results[0].geometry.location);
          const marker = new google.maps.Marker({
            position: coords,
            map: map
          });
          const url = `${window.location.origin}/tasks`;
          const contentString = '<div class="content ba">'+
          '<div class="bg-black-70 white">'+
          `<h1 id="firstHeading" class="f4">${task.name}</h1>`+
          '</div>'+
          '<div id="bodyContent">'+
          `<p>${task.location.streetName}, <span class="ttu">${task.location.postcode}</span></p>`+
          `<a href="${url}/${task._id}" class="f7">More...</a>`+
          '</div>'+
          '</div>';

          const infowindow = new google.maps.InfoWindow({
            content: contentString
          });
          marker.addListener('click', function() {
            infowindow.open(map, marker);
          });

        });
      }
    }
  };
}

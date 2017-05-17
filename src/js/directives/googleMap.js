angular
.module('thisApp')
.directive('googleMap', googleMap);

googleMap.$inject = ['$window','$http', '$timeout'];
function googleMap($window, $http, $timeout){
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
      }, 200);

      function geocode(task){
        $http
        .get(`http://maps.googleapis.com/maps/api/geocode/json?&address=${task.location.postcode}`)
        .then(data => {
          var coords = (data.data.results[0].geometry.location);
          console.log(coords);
          new google.maps.Marker({
            position: coords,
            map: map
          });
        });
      }
    }
  };
}

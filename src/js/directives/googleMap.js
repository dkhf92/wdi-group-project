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
          const contentString = '<article class="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">'+
          `<img ng-src="${task.name}" class="db w-100 br2 br--top" alt="">`+
          '<div class="pa2 ph3-ns pb3-ns">'+
          '<div class="dt w-100 mt1">'+
          '<div class="dtc">'+
          `<h1 id="" class="f5 f4-ns mv0">${task.name}</h1>`+
          '</div>'+
          '<div class="dtc tr">'+
          `<h2 class="f5 mv0">£${task.price}</h2>`+
          '</div>'+
          '</div>'+
          '<div id="" class="f6 lh-copy measure mt2 mid-gray">'+
          `<p>${task.location.streetName}, <span class="ttu">${task.location.postcode}</span></p>`+
          `<a href="${url}/${task._id}" class="f7">More...</a>`+
          '</div>'+
          '</div>'+
          '</article>';

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

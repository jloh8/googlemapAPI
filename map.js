function initMap() {
      var map;
      var directionsService = new google.maps.DirectionsService;
      var directionsDisplay = new google.maps.DirectionsRenderer;
      var centerControlDiv = document.getElementById('LocationVal');
      var centerControlDiv2 = document.getElementById('home');
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        center: {lat: 41.85, lng: -87.65},
        mapTypeControl: false
      });
       map.controls[google.maps.ControlPosition.LEFT_CENTER].push(centerControlDiv);
       map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv2);



//display route onto map
      function onChangeHandler() {
               calculateAndDisplayRoute(directionsService, directionsDisplay);
              directionsDisplay.setMap(map);
             }


      function calculateAndDisplayRoute(directionsService, directionsDisplay) {
          directionsService.route({
          origin: document.getElementById('origin').value,
          destination: document.getElementById('destination').value,
          travelMode: 'DRIVING'
              }, function(response, status) {
                  if (status === 'OK') {
                  directionsDisplay.setDirections(response);
                  }
                    else {
                   window.alert('Directions request failed due to ' + status);
                 }

               });
             }


//display route on map when submit button is initiated
    document.getElementById('distance_form').addEventListener('submit', onChangeHandler);

      }


    $(document).ready(
			function() {


            var from_places = new google.maps.places.Autocomplete(document.getElementById('from_places'));
            var to_places = new google.maps.places.Autocomplete(document.getElementById('to_places'));

            google.maps.event.addListener(from_places, 'place_changed', function () {
                var from_place = from_places.getPlace();
                var from_address = from_place.formatted_address;
                $('#origin').val(from_address);
            });

            google.maps.event.addListener(to_places, 'place_changed', function () {
                var to_place = to_places.getPlace();
                var to_address = to_place.formatted_address;
                $('#destination').val(to_address);
            });


        // calculate distance
        function calculateDistance() {
            var origin = $('#origin').val();
            var destination = $('#destination').val();
            var service = new google.maps.DistanceMatrixService();
            service.getDistanceMatrix(
                {
                    origins: [origin],
                    destinations: [destination],
                    travelMode: google.maps.TravelMode.DRIVING,
                    unitSystem: google.maps.UnitSystem.IMPERIAL, // miles and feet.
                    // unitSystem: google.maps.UnitSystem.metric, // kilometers and meters.
                    avoidHighways: false,
                    avoidTolls: false
                }, callback);

        }
        // get distance results
        function callback(response, status) {
            if (status != google.maps.DistanceMatrixStatus.OK) {
                $('#result').html(err);
            } else {
                var origin = response.originAddresses[0];
                var destination = response.destinationAddresses[0];
                if (response.rows[0].elements[0].status === "ZERO_RESULTS") {
                    $('#result').html("Better get on a plane. There are no roads between "  + origin + " and " + destination);
                 }
                 else {

										console.log(response.rows[0].elements[0].distance);
										console.log( google.maps.DistanceMatrixStatus.OK);
										const distance = response.rows[0].elements[0].distance.text;
                    const r = distance.replace("mi", "");
                    const x = r.replace(",","");

										const cost_x = x*1.5; //parses argument and returns only integer
										const cost_xl = x*2.5;//parses argument and returns only integer
										const cost_lux = x*3.5;//parses argument and returns only integer
                    $('#in_mile').html(distance);
										$('#cost_x').html('$'+ cost_x);
										$('#cost_xl').html('$'+ cost_xl);
										$('#cost_lux').html('$'+ cost_lux);
                    $("#result").show("slow");

                }

            }
        }



        // print results on submit the form
        $('#distance_form').submit(function(e){
            e.preventDefault();
           calculateDistance();

      });
});

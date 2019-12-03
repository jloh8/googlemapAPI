Google Map APIs
===============

[![Build Status](https://travis-ci.org/googlemaps/google-maps-services-python.svg?branch=master)](https://travis-ci.org/googlemaps/google-maps-services-python)
[![codecov](https://codecov.io/gh/googlemaps/google-maps-services-python/branch/master/graph/badge.svg)](https://codecov.io/gh/googlemaps/google-maps-services-python)
[![PyPI version](https://badge.fury.io/py/googlemaps.svg)](https://badge.fury.io/py/googlemaps)
![PyPI - Downloads](https://img.shields.io/pypi/dd/googlemaps)
![GitHub contributors](https://img.shields.io/github/contributors/googlemaps/google-maps-services-python)

# Project Title
The goal of this project is to build a replica of UBER shareride web application with a few APIs that googlemap offers.  


# About
A complete Web application similar to UBER's "Fare_Estimator" service using the googlemap javascript API (Autocomplete Widget, Distance matrix services, and direction services)

## Description

this project requires a google account to generate an API key.  

Keep in mind that the same [terms and conditions](https://developers.google.com/maps/terms) apply
to usage of the APIs when they're accessed through this library.

## Requirements
 - Text Editor
 - A Googlemap API key.

## Enable API key

Each Google Maps Web Service request requires an API key or client ID. API keys
are generated in the 'Credentials' page of the 'APIs & Services' tab of [Google Cloud console](https://console.cloud.google.com/apis/credentials).

Check to enable:
 - Directions API
 - Distance Matrix API
 - Places API

## Usage

This example uses the Place, Distance Matrix and Directions API with an API key:

Target id name origin & destination, returning place predictions in response to an HTTP request made by user.
```Javascript
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
```
 Access the Distance Matrix service via the google.maps.DistanceMatrixService constructor object.
```Javascript

      function calculateDistance() {
          var origin = $('#origin').val();
          var destination = $('#destination').val();
          var service = new google.maps.DistanceMatrixService();
```
service.getDistanceMatrix method initiates a request to the Distance Matrix service, passing it a DistanceMatrixRequest object literal containing the origins, destinations, and travel mode, as well as a callback method to execute upon receipt of the response.

```Javascript

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

```




## Documentation & resources
### Getting started
- [Get Started with Google Maps Platform](https://developers.google.com/maps/gmp-get-started)
- [Generating/restricting an API key](https://developers.google.com/maps/gmp-get-started#api-key)
- [Authenticating with a client ID](https://developers.google.com/maps/documentation/directions/get-api-key#client-id)

### API docs
- [Google Maps Platform web services](https://developers.google.com/maps/apis-by-platform#web_service_apis)
- [Directions API](https://developers.google.com/maps/documentation/directions/)
- [Distance Matrix API](https://developers.google.com/maps/documentation/distancematrix/)
- [Places API](https://developers.google.com/places/)







>### UBER version


![uber_getpriceestimate](https://user-images.githubusercontent.com/40499312/52683745-69ef1c80-2f09-11e9-8fa4-653d38cb7c57.JPG)






>### googlemap version

![googlemap_getpriceestimate](https://user-images.githubusercontent.com/40499312/52683743-68255900-2f09-11e9-960e-dbd3008c26e0.JPG)

$(document).ready(function() {

    $('#setFavorite').click(function(){

        var name = $("#address").val();
        localStorage.setItem("name", name);


    });

    $('#useFavorite').click(function(){

        $("#address").val(localStorage.getItem("name"));


    });

    $('#getCoordinates').click(function() {

        var address = $('#address').val();

        $.ajax({

            url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + address + '&key=AIzaSyAeAcyGjlRTONh60CTO9klRZcOuyjWuWms',
            type: 'GET', // GET because we're passing parameters in the URL
            data: {
                format: 'json'
            },

            success: function(response) {

                for (var i = 0; i < response["results"].length; i++) {

                    var location = response["results"][i]["geometry"]["location"];
                    var locationName = response["results"][i]["formatted_address"];

                    $('#success').append(JSON.stringify(locationName) + ":");
                    $('#success').append("<br>");
                    $('#success').append("Latitude: " + JSON.stringify(location["lat"]));
                    $('#success').append("<br>");
                    $('#success').append("Longitude: " + JSON.stringify(location["lng"]));
                    $('#success').append("<br>");
                    $('#success').append("<br>");

                }

                console.log(response)

            },

            error: function() {
                $('#errors').text("There was an error processing your request. Please try again.")
            }

        }); // end of ajax function

    }); //end of click function

    $('#back').click(function(){

        $("#success").text("");

    });

}); //end of document.ready() function

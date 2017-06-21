function initMap() {

    var resLocation = {

      lat: 40.8054491,
      lng: -73.9654415
    };


  // map
    var map = new google.maps.Map(document.getElementById('map'), {
      center: resLocation,
      zoom: 16,  //level of map zoom
      scrollwheel: false  
    });
    
  // marker
    var marker = new google.maps.Marker({
    position: resLocation,
    map: map,
  title: "Monk's Cafe" 
    });
  
}

// jquery ui datepicker
$( function() {
    $( "#datepicker" ).datepicker();
  } );
var church = {
  position: new google.maps.LatLng(51.552170,-0.084933),
  text: 'Newington Green Unitarian Church'
}

var abney_hall = {
  position: new google.maps.LatLng(51.561996, -0.078103),
  text: 'Abney Public Hall'
}

function initialize() {
  var mapOptions = {
    zoom: 13,
    center: church.position,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("map-canvas"),
      mapOptions);

  setMarker(church, map);
  setMarker(abney_hall, map);
}


function setMarker(loc, map) {
  loc.marker = new google.maps.Marker({
      position: loc.position,
      map: map
  });
  loc.infowindow = new google.maps.InfoWindow({
      content: loc.text
  });
  google.maps.event.addListener(loc.marker, 'click', function() {
    loc.infowindow.open(map,loc.marker);
  });
}

google.maps.event.addDomListener(window, 'load', initialize);

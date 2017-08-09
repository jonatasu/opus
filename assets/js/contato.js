function googleMapsAPI_init(){

  var point = new google.maps.LatLng(-25.4234426, -49.2567078);

  var myMapOptions = {
    zoom: 18,
    center: point,
    scrollwheel: false,
    navigationControl: false,
    mapTypeControl: false,
    scaleControl: false,
    mapTypeId: google.maps.MapTypeId.HYBRID
  };

  var map = new google.maps.Map(document.getElementById("map"),myMapOptions);

  var image = new google.maps.MarkerImage(
    'assets/img/marker-images/image.png',
    new google.maps.Size(64,86),
    new google.maps.Point(0,0),
    new google.maps.Point(32,86)
  );

  var shadow = new google.maps.MarkerImage(
    'assets/img/marker-images/shadow.png',
    new google.maps.Size(111,86),
    new google.maps.Point(0,0),
    new google.maps.Point(32,86)
  );

  var shape = {
    coord: [39,0,43,1,45,2,47,3,49,4,50,5,51,6,53,7,54,8,55,9,56,10,56,11,57,12,58,13,59,14,59,15,60,16,60,17,61,18,61,19,62,20,62,21,62,22,62,23,63,24,63,25,63,26,63,27,63,28,63,29,63,30,63,31,63,32,63,33,63,34,63,35,63,36,63,37,63,38,63,39,62,40,62,41,62,42,62,43,61,44,61,45,60,46,60,47,59,48,59,49,58,50,57,51,57,52,56,53,55,54,54,55,54,56,53,57,52,58,51,59,51,60,50,61,49,62,48,63,48,64,47,65,46,66,45,67,45,68,44,69,43,70,43,71,42,72,41,73,40,74,40,75,39,76,38,77,37,78,37,79,36,80,35,81,34,82,34,83,33,84,32,85,31,85,32,84,32,83,32,82,33,81,33,80,33,79,34,78,34,77,34,76,35,75,35,74,35,73,36,72,36,71,36,70,36,69,37,68,37,67,37,66,38,65,30,64,23,63,20,62,18,61,16,60,14,59,13,58,11,57,10,56,9,55,8,54,7,53,7,52,6,51,5,50,4,49,4,48,3,47,3,46,2,45,2,44,1,43,1,42,1,41,1,40,0,39,0,38,0,37,0,36,0,35,0,34,0,33,0,32,0,31,0,30,0,29,0,28,0,27,0,26,0,25,0,24,1,23,1,22,1,21,1,20,2,19,2,18,3,17,3,16,4,15,4,14,5,13,6,12,7,11,7,10,8,9,9,8,10,7,12,6,13,5,14,4,16,3,18,2,20,1,24,0,39,0],
    type: 'poly'
  };

  var marker = new google.maps.Marker({
    draggable: true,
    raiseOnDrag: false,
    icon: image,
    shadow: shadow,
    shape: shape,
    map: map,
    position: point
  });

}
$(window).on("load", function(){
  googleMapsAPI_init();
});

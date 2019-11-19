var map;
function initMap() {
    var position = {lat: 53.052957, lng: 18.579301};
    map = new google.maps.Map(document.getElementById('googleMap'), {
    center: position,
    zoom: 17,
  });

    var marker = new google.maps.Marker({
    position: position,
    map: map,
    title: 'Usługi remontowo-budowlane. Paweł Piechowski. Sadowa 34'
  });
}
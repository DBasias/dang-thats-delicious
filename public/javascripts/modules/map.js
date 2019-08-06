import axios from 'axios';

const mapOptions = {
  center: { lat: 43.2, lng: -79.8 },
  zoom: 8
};

function loadPlaces(map, lat = 43.2, lng = -79.8) {}

function makeMap(mapDiv) {
  if (!mapDiv) return;

  const map = new google.maps.Map(mapDiv, mapOptions);
}

export default makeMap;

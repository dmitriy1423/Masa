import L from '../../vendor/leaflet';

function initMap() {
  L.Control.prototype._refocusOnMap = function _refocusOnMap(ev) {
    if (this._map && ev && ev.screenX > 0 && ev.screenY > 0) {
      this._map.getContainer().focus({preventScroll: true});
    }
  };

  const mapOptions = {
    center: [55.028522, 82.928281],
    zoom: 14,
  };

  const mapContainer = document.querySelector('#map');

  if (mapContainer) {
    const map = new L.map('map', mapOptions);

    const layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

    map.addLayer(layer);

    const iconOptions = {
      iconUrl: './img/sprite/icon-pin.svg',
    };

    const customIcon = L.icon(iconOptions);

    const markerOptions = {
      title: 'MyLocation',
      clickable: true,
      draggable: false,
      icon: customIcon,
    };

    const marker = new L.Marker([55.028522, 82.928281], markerOptions);

    marker.addTo(map);
  }
}

export default initMap;

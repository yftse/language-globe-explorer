
import mapboxgl from 'mapbox-gl';

// Set the Maptiler API key directly
mapboxgl.accessToken = 'pk.dummy'; // Required to prevent Mapbox errors

export const createMaptilerMap = (container: HTMLDivElement): mapboxgl.Map => {
  return new mapboxgl.Map({
    container,
    style: `https://api.maptiler.com/maps/streets-v2/style.json?key=gyNfeRRGKgZuqBD5plxn`,
    center: [0, 20],
    zoom: 2,
    projection: 'globe'
  });
};

export const addNavigationControl = (map: mapboxgl.Map): void => {
  map.addControl(new mapboxgl.NavigationControl(), 'top-right');
};

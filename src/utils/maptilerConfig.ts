
import mapboxgl from 'mapbox-gl';

// Set a dummy access token to prevent Mapbox authentication errors when using Maptiler
mapboxgl.accessToken = 'pk.dummy';

export const createMaptilerMap = (container: HTMLDivElement): mapboxgl.Map => {
  return new mapboxgl.Map({
    container,
    style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${import.meta.env.VITE_MAPTILER_API_KEY || 'gyNfeRRGKgZuqBD5plxn'}`,
    center: [0, 20],
    zoom: 2,
    projection: 'globe'
  });
};

export const addNavigationControl = (map: mapboxgl.Map): void => {
  map.addControl(new mapboxgl.NavigationControl(), 'top-right');
};

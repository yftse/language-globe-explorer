
import maplibregl from 'maplibre-gl';
import { Language } from '@/types/language';

export const createMapEventHandlers = (
  map: maplibregl.Map,
  languages: Language[],
  onLanguageClick: (language: Language) => void
) => {
  // Single reusable popup for hover tooltips
  let hoverPopup: maplibregl.Popup | null = null;

  const getRegionName = (feature: maplibregl.MapGeoJSONFeature) =>
    (feature.properties?.name as string) || (feature.properties?.name_en as string);

  const languageMatchesRegion = (
    langCountry: string,
    feature: maplibregl.MapGeoJSONFeature,
    regionName?: string
  ) => {
    const iso = feature.properties?.iso_a2 as string | undefined;
    const parent = feature.properties?.level_0 as string | undefined;

    return (
      // Exact country or region name match
      (!!regionName && langCountry === regionName) ||
      (!!parent && langCountry === parent) ||
      // ISO-based country checks (extend as needed)
      (iso === 'DZ' && langCountry === 'Algeria') ||
      (iso === 'CN' && langCountry === 'China') ||
      (iso === 'IN' && langCountry === 'India') ||
      (iso === 'FR' && langCountry === 'France') ||
      (iso === 'ES' && langCountry === 'Spain') ||
      (iso === 'GB' && langCountry === 'United Kingdom') ||
      (iso === 'US' && langCountry === 'United States')
    );
  };

  const handleAreaClick = (
    e: maplibregl.MapMouseEvent & { features?: maplibregl.MapGeoJSONFeature[] }
  ) => {
    const features = map.queryRenderedFeatures(e.point, {
      layers: ['language-countries', 'language-subdivisions'],
    });

    if (features && features[0]) {
      const feature = features[0];
      const regionName = getRegionName(feature);

      // Find the first matching language (click selects primary)
      const language = languages.find((lang) =>
        languageMatchesRegion(lang.country, feature, regionName)
      );

      if (language) {
        onLanguageClick(language);
      }
    }
  };

  const setCursorPointer = () => {
    map.getCanvas().style.cursor = 'pointer';
  };

  const setCursorDefault = () => {
    map.getCanvas().style.cursor = '';
  };

  const renderTooltipHtml = (language: string) => {
    return `
      <div aria-live="polite" style="font-weight:600;">${language}</div>
    `;
  };

  const handleMouseMove = (
    e: maplibregl.MapMouseEvent & { features?: maplibregl.MapGeoJSONFeature[] }
  ) => {
    const features = map.queryRenderedFeatures(e.point, {
      layers: ['language-countries'],
    });

    if (!features || !features[0]) return;

    const feature = features[0];
    const regionName = getRegionName(feature) || 'Region';

    // Collect all languages associated with this region/country
    const matched = languages
      .filter((lang) => languageMatchesRegion(lang.country, feature, regionName))
      .map((l) => l.name);

    if (matched.length === 0) return;

    const primary = matched[0];
    const html = renderTooltipHtml(primary);
    if (!hoverPopup) {
      hoverPopup = new maplibregl.Popup({
        closeButton: false,
        closeOnClick: false,
        maxWidth: '260px',
        className: 'language-tooltip',
      });
    }

    hoverPopup.setLngLat(e.lngLat).setHTML(html).addTo(map);
  };

  const handleMouseLeave = () => {
    if (hoverPopup) {
      hoverPopup.remove();
    }
  };

  const addEventListeners = () => {
    // Click handlers
    map.on('click', 'language-countries', handleAreaClick);
    map.on('click', 'language-subdivisions', handleAreaClick);

    // Cursor feedback
    map.on('mouseenter', 'language-countries', setCursorPointer);
    map.on('mouseenter', 'language-subdivisions', setCursorPointer);
    map.on('mouseleave', 'language-countries', () => {
      setCursorDefault();
      handleMouseLeave();
    });
    map.on('mouseleave', 'language-subdivisions', () => {
      setCursorDefault();
      handleMouseLeave();
    });

    // Hover tooltips
    map.on('mousemove', 'language-countries', handleMouseMove);
  };

  const removeEventListeners = () => {
    // Click handlers
    map.off('click', 'language-countries', handleAreaClick);
    map.off('click', 'language-subdivisions', handleAreaClick);

    // Cursor feedback
    map.off('mouseenter', 'language-countries', setCursorPointer);
    map.off('mouseenter', 'language-subdivisions', setCursorPointer);
    map.off('mouseleave', 'language-countries', setCursorDefault);
    map.off('mouseleave', 'language-subdivisions', setCursorDefault);

    // Hover tooltips
    map.off('mousemove', 'language-countries', handleMouseMove);
    map.off('mousemove', 'language-subdivisions', handleMouseMove);

    // Cleanup popup
    if (hoverPopup) {
      hoverPopup.remove();
      hoverPopup = null;
    }
  };

  return {
    addEventListeners,
    removeEventListeners,
  };
};

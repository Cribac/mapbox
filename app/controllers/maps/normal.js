import Controller from '@ember/controller';

const defaultMarker = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: { type: 'Point', coordinates: [ -96.7969879, 32.7766642 ] }
    }
  ]
};

export default Controller.extend({
  marker: defaultMarker,

  actions: {
    mapClicked({ target: map, point }) {
      console.log(map, point);
    }
  }
});

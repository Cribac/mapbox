module.exports = function(env) {
  return {
    clientAllowedKeys: ['MAPBOX_KEY'],
    // Fail build when there is missing any of clientAllowedKeys environment variables.
    // By default false.
    failOnMissingKey: false,
  };
};

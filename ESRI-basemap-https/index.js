(function() {
  var base_layer, body, height, map, mbAttr, mbUrl, width;

  body = d3.select('body');

  width = body.node().getBoundingClientRect().width;

  height = body.node().getBoundingClientRect().height;

  d3.select('#map').style({
    width: width,
    height: height
  });

  mbAttr = 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community';

  mbUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';

  base_layer = L.tileLayer(mbUrl, {
    id: 'mapbox.streets',
    attribution: mbAttr
  });

  map = L.map('map', {
    center: [30, 0],
    zoom: 2,
    layers: [base_layer]
  });

}).call(this);

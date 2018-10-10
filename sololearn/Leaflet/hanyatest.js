<script>

var map = L.map('map', {
		zoom: 12,
		center: L.latLng([42.4918,12.4992]),
		attributionControl: false,
		maxBounds: L.latLngBounds([[42.41281,12.28821],[42.5589,12.63805]]).pad(0.5)
	}),
	osmLayer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

map.addLayer(osmLayer);

var baseLayers = [
	{
		name: "Open Street Map",
		layer: osmLayer
	},
	{
		name: "Hiking",
		layer: L.tileLayer("http://toolserver.org/tiles/hikebike/{z}/{x}/{y}.png")
	},
	{
		name: "Aerial",
		layer: L.tileLayer('http://otile{s}.mqcdn.com/tiles/1.0.0/{type}/{z}/{x}/{y}.{ext}', {
			type: 'sat',
			ext: 'jpg',
			attribution: 'Tiles Courtesy of <a href="http://www.mapquest.com/">MapQuest</a> &mdash; Portions Courtesy NASA/JPL-Caltech and U.S. Depart. of Agriculture, Farm Service Agency',
			subdomains: '1234'
		})
	},
	{
		group: "Road Layers",
		collapsed: true,
		layers: [
			{
				name: "Open Cycle Map",
				layer: L.tileLayer('http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png')
			},
			{
				name: "Transports",
				layer: L.tileLayer('http://{s}.tile2.opencyclemap.org/transport/{z}/{x}/{y}.png')
			}
		]
	}
];

var overLayers = [
	{
		group: "GeoJSON Layers",
		layers: [
			{
				active: true,
				name: "Drinking Water",
				icon: '<i class="icon icon-drinking_water"></i>',
				layer: L.geoJson(Drinking_water)
			},
			{
				active: true,
				name: "River",
				layer: (function() {
					var l = L.geoJson();
					$.getJSON('data/river.json', function(j) {
						l.addData(j);
					});
					return l;
				}())
			},
		]
	},
	{
		group: "WMS Layers",
		layers: [
			{
				active: true,
				name: "Isolines",
				layer: {
					type: "tileLayer.wms",
					args: ["https://siat.regione.umbria.it/arcgis/services/public/DBT_05_Orografia/MapServer/WMSServer", {
							layers: '13',
							format: 'image/png',
							transparent: true,
							//minZoom: 13
						}
					]
				}
			},
			{
				active: true,
				name: "Streams",
				layer: {
					type: "tileLayer.wms",
					args: ["https://siat.regione.umbria.it/arcgis/services/public/DBT_04_Idrografia/MapServer/WMSServer", {
							layers: '6',
							format: 'image/png',
							transparent: true,
						}
					]
				}
			}
		]
	}
];

var panelLayers = new L.Control.PanelLayers(baseLayers, overLayers, {
	//compact: true,
	//collapsed: true,
	collapsibleGroups: true
});

map.addControl(panelLayers);

</script>

var wms_layers = [];
var baseLayer = new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
});
var baseLayer2 = new ol.layer.Tile({
      'title': 'MapBox',
      'type': 'base',
      source: new ol.source.XYZ({
        url: 'https://api.mapbox.com/styles/v1/versitani/cjznhzxit03h51cofrb1lfw2f/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidmVyc2l0YW5pIiwiYSI6ImNqeWUxM3BrODB5MDIzbXA4NzQzOW9idGMifQ.MUiosR2LCaSTV9q6ry4GWw',
        crossOrigin:"anonymous"
      })
    });
var format_Peta_Geologi_0 = new ol.format.GeoJSON();
var features_Peta_Geologi_0 = format_Peta_Geologi_0.readFeatures(json_Peta_Geologi_0,
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Peta_Geologi_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});

function LegendHide() {
      var x = document.getElementById("maplegend");
      if (x.style.display === "none") {
          x.style.display = "block";
      } else {
          x.style.display = "none";
      }
  }

jsonSource_Peta_Geologi_0.addFeatures(features_Peta_Geologi_0);var lyr_Peta_Geologi_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Peta_Geologi_0,
                style: style_Peta_Geologi_0,
    title: '<b onclick="LegendHide()">Peta Geologi</b> <div id="maplegend"><br />\
    <img src="styles/legend/Peta_Geologi_0_0.png" /> Aluvial<br />\
    <img src="styles/legend/Peta_Geologi_0_1.png" /> Andesit<br />\
    <img src="styles/legend/Peta_Geologi_0_2.png" /> Batuan Gunungapi Tak Terpisahkan<br />\
    <img src="styles/legend/Peta_Geologi_0_3.png" /> Diorit<br />\
    <img src="styles/legend/Peta_Geologi_0_4.png" /> Endapan Gunungapi Merapi Tua<br />\
    <img src="styles/legend/Peta_Geologi_0_5.png" /> Endapan Gunungapi Muda Merapi<br />\
    <img src="styles/legend/Peta_Geologi_0_6.png" /> Endapan Longsoran (Ladu) dari Awan Panas<br />\
    <img src="styles/legend/Peta_Geologi_0_7.png" /> Formasi Jonggrangan<br />\
    <img src="styles/legend/Peta_Geologi_0_8.png" /> Formasi Kebobutak<br />\
    <img src="styles/legend/Peta_Geologi_0_9.png" /> Formasi Kepek<br />\
    <img src="styles/legend/Peta_Geologi_0_10.png" /> Formasi Mandalika<br />\
    <img src="styles/legend/Peta_Geologi_0_11.png" /> Formasi Nampol<br />\
    <img src="styles/legend/Peta_Geologi_0_12.png" /> Formasi Nanggulan<br />\
    <img src="styles/legend/Peta_Geologi_0_13.png" /> Formasi Oyo<br />\
    <img src="styles/legend/Peta_Geologi_0_14.png" /> Formasi Sambipitu<br />\
    <img src="styles/legend/Peta_Geologi_0_15.png" /> Formasi Semilir<br />\
    <img src="styles/legend/Peta_Geologi_0_16.png" /> Formasi Sentolo<br />\
    <img src="styles/legend/Peta_Geologi_0_17.png" /> Formasi Wonosari<br />\
    <img src="styles/legend/Peta_Geologi_0_18.png" /> Formasi Wungkal<br />\
    <img src="styles/legend/Peta_Geologi_0_19.png" /> Formasi Wuni<br />\
    <img src="styles/legend/Peta_Geologi_0_20.png" /> Koluvial<br />\
    <img src="styles/legend/Peta_Geologi_0_21.png" /> Kubah Lava dan Leleran<br />\
    <img src="styles/legend/Peta_Geologi_0_22.png" /> Nglanggran Formation<br />\
    <img src="styles/legend/Peta_Geologi_0_23.png" /> </div><br />'
        });var format_Struktur_Geologi_1 = new ol.format.GeoJSON();
var features_Struktur_Geologi_1 = format_Struktur_Geologi_1.readFeatures(json_Struktur_Geologi_1,
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Struktur_Geologi_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});

function LegendHide2() {
      var x = document.getElementById("maplegend2");
      if (x.style.display === "none") {
          x.style.display = "block";
      } else {
          x.style.display = "none";
      }
  }

jsonSource_Struktur_Geologi_1.addFeatures(features_Struktur_Geologi_1);var lyr_Struktur_Geologi_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Struktur_Geologi_1,
                style: style_Struktur_Geologi_1,
    title: '<b onclick="LegendHide2()">Struktur Geologi</b> <br /><div id="maplegend2">\
    <img src="styles/legend/Struktur_Geologi_1_0.png" /> Antiklinal<br />\
    <img src="styles/legend/Struktur_Geologi_1_1.png" /> Sesar<br />\
    <img src="styles/legend/Struktur_Geologi_1_2.png" /> Sesar Geser<br />\
    <img src="styles/legend/Struktur_Geologi_1_3.png" /> Sinklinal<br />\
    <img src="styles/legend/Struktur_Geologi_1_4.png" /> </div> <br />'
        });var lyr_ASTER_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "ASTER",


                            source: new ol.source.ImageStatic({
                               url: "./layers/ASTER_2.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12272153.789541, -896806.836375, 12282621.599640, -888924.832451]
                            })
                        });

lyr_Peta_Geologi_0.setVisible(true);lyr_Struktur_Geologi_1.setVisible(true);lyr_ASTER_2.setVisible(true);
var layersList = [baseLayer,baseLayer2,lyr_Peta_Geologi_0,lyr_Struktur_Geologi_1,lyr_ASTER_2];
lyr_Peta_Geologi_0.set('fieldAliases', {'SYMBOLS': 'SYMBOLS', 'NAME_BI': 'NAME_BI', 'CLASS_LITH': 'CLASS_LITH', });
lyr_Struktur_Geologi_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'nama': 'nama', });
lyr_Peta_Geologi_0.set('fieldImages', {'SYMBOLS': 'TextEdit', 'NAME_BI': 'TextEdit', 'CLASS_LITH': 'TextEdit', });
lyr_Struktur_Geologi_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'nama': 'TextEdit', });
lyr_Peta_Geologi_0.set('fieldLabels', {'SYMBOLS': 'inline label', 'NAME_BI': 'inline label', 'CLASS_LITH': 'inline label', });
lyr_Struktur_Geologi_1.set('fieldLabels', {'OBJECTID': 'no label', 'nama': 'inline label', });
lyr_Struktur_Geologi_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});

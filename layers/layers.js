var wms_layers = [];

var lyr_PRUEBA4_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'PRUEBA-4<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/PRUEBA4_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-9930062.643390, 1541985.060040, -9929563.982949, 1542552.014036]
        })
    });
var format_ALL2_1 = new ol.format.GeoJSON();
var features_ALL2_1 = format_ALL2_1.readFeatures(json_ALL2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ALL2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ALL2_1.addFeatures(features_ALL2_1);
var lyr_ALL2_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ALL2_1, 
                style: style_ALL2_1,
                popuplayertitle: 'ALL-2',
                interactive: true,
                title: '<img src="styles/legend/ALL2_1.png" /> ALL-2'
            });
var format_AN_2 = new ol.format.GeoJSON();
var features_AN_2 = format_AN_2.readFeatures(json_AN_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AN_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AN_2.addFeatures(features_AN_2);
var lyr_AN_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AN_2, 
                style: style_AN_2,
                popuplayertitle: 'AN',
                interactive: true,
                title: '<img src="styles/legend/AN_2.png" /> AN'
            });
var format_AP_3 = new ol.format.GeoJSON();
var features_AP_3 = format_AP_3.readFeatures(json_AP_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AP_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AP_3.addFeatures(features_AP_3);
var lyr_AP_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AP_3, 
                style: style_AP_3,
                popuplayertitle: 'AP',
                interactive: true,
                title: '<img src="styles/legend/AP_3.png" /> AP'
            });

lyr_PRUEBA4_0.setVisible(true);lyr_ALL2_1.setVisible(true);lyr_AN_2.setVisible(true);lyr_AP_3.setVisible(true);
var layersList = [lyr_PRUEBA4_0,lyr_ALL2_1,lyr_AN_2,lyr_AP_3];
lyr_ALL2_1.set('fieldAliases', {'CODIGO': 'CODIGO', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'ESTADO': 'ESTADO', 'IMAGEN': 'IMAGEN', });
lyr_AN_2.set('fieldAliases', {'CODIGO': 'CODIGO', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'ESTADO': 'ESTADO', 'IMAGEN': 'IMAGEN', });
lyr_AP_3.set('fieldAliases', {'CODIGO': 'CODIGO', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'IMAGEN': 'IMAGEN', 'ESTADO': 'ESTADO', });
lyr_ALL2_1.set('fieldImages', {'CODIGO': 'TextEdit', 'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', 'ESTADO': 'TextEdit', 'IMAGEN': 'ExternalResource', });
lyr_AN_2.set('fieldImages', {'CODIGO': 'TextEdit', 'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', 'ESTADO': 'TextEdit', 'IMAGEN': 'ExternalResource', });
lyr_AP_3.set('fieldImages', {'CODIGO': 'TextEdit', 'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', 'IMAGEN': 'ExternalResource', 'ESTADO': 'TextEdit', });
lyr_ALL2_1.set('fieldLabels', {'CODIGO': 'header label - visible with data', 'LATITUD': 'header label - visible with data', 'LONGITUD': 'header label - visible with data', 'ESTADO': 'header label - visible with data', 'IMAGEN': 'header label - visible with data', });
lyr_AN_2.set('fieldLabels', {'CODIGO': 'header label - visible with data', 'LATITUD': 'header label - visible with data', 'LONGITUD': 'header label - visible with data', 'ESTADO': 'header label - visible with data', 'IMAGEN': 'header label - visible with data', });
lyr_AP_3.set('fieldLabels', {'CODIGO': 'header label - visible with data', 'LATITUD': 'header label - visible with data', 'LONGITUD': 'header label - visible with data', 'IMAGEN': 'header label - visible with data', 'ESTADO': 'header label - visible with data', });
lyr_AP_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
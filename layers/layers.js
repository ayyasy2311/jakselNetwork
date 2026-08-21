var wms_layers = [];


        var lyr_ESRIShadedRelief_0 = new ol.layer.Tile({
            'title': 'ESRI Shaded Relief',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_jalan_jaksel_1 = new ol.format.GeoJSON();
var features_jalan_jaksel_1 = format_jalan_jaksel_1.readFeatures(json_jalan_jaksel_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan_jaksel_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalan_jaksel_1.addFeatures(features_jalan_jaksel_1);
var lyr_jalan_jaksel_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalan_jaksel_1, 
                style: style_jalan_jaksel_1,
                popuplayertitle: 'jalan_jaksel',
                interactive: true,
                title: '<img src="styles/legend/jalan_jaksel_1.png" /> jalan_jaksel'
            });
var format_puskesmas_jaksel_2 = new ol.format.GeoJSON();
var features_puskesmas_jaksel_2 = format_puskesmas_jaksel_2.readFeatures(json_puskesmas_jaksel_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_puskesmas_jaksel_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_puskesmas_jaksel_2.addFeatures(features_puskesmas_jaksel_2);
var lyr_puskesmas_jaksel_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_puskesmas_jaksel_2, 
                style: style_puskesmas_jaksel_2,
                popuplayertitle: 'puskesmas_jaksel',
                interactive: true,
                title: '<img src="styles/legend/puskesmas_jaksel_2.png" /> puskesmas_jaksel'
            });
var format_rumahsakit_jaksel_3 = new ol.format.GeoJSON();
var features_rumahsakit_jaksel_3 = format_rumahsakit_jaksel_3.readFeatures(json_rumahsakit_jaksel_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rumahsakit_jaksel_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rumahsakit_jaksel_3.addFeatures(features_rumahsakit_jaksel_3);
var lyr_rumahsakit_jaksel_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rumahsakit_jaksel_3, 
                style: style_rumahsakit_jaksel_3,
                popuplayertitle: 'rumahsakit_jaksel',
                interactive: true,
                title: '<img src="styles/legend/rumahsakit_jaksel_3.png" /> rumahsakit_jaksel'
            });

lyr_ESRIShadedRelief_0.setVisible(true);lyr_jalan_jaksel_1.setVisible(true);lyr_puskesmas_jaksel_2.setVisible(true);lyr_rumahsakit_jaksel_3.setVisible(true);
var layersList = [lyr_ESRIShadedRelief_0,lyr_jalan_jaksel_1,lyr_puskesmas_jaksel_2,lyr_rumahsakit_jaksel_3];
lyr_jalan_jaksel_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'ARHRJL': 'ARHRJL', 'AUTRJL': 'AUTRJL', 'FGSRJL': 'FGSRJL', 'JARRJL': 'JARRJL', 'JPARJL': 'JPARJL', 'KLLRJL': 'KLLRJL', 'KONRJL': 'KONRJL', 'KPMSTR': 'KPMSTR', 'LKONOF': 'LKONOF', 'LKSBSP': 'LKSBSP', 'LKSRTA': 'LKSRTA', 'LLHRRT': 'LLHRRT', 'LOCRJL': 'LOCRJL', 'LBRBHJ': 'LBRBHJ', 'LBRJLN': 'LBRJLN', 'MATRJL': 'MATRJL', 'MEDRJL': 'MEDRJL', 'SPCRJL': 'SPCRJL', 'STARJL': 'STARJL', 'TOLRJL': 'TOLRJL', 'UTKRJL': 'UTKRJL', 'VLCPRT': 'VLCPRT', 'WLYRJL': 'WLYRJL', 'TGL_SK': 'TGL_SK', 'JLNLYG': 'JLNLYG', 'KLSRJL': 'KLSRJL', 'SHAPE_Leng': 'SHAPE_Leng', 'panjang': 'panjang', 'SPDLMT': 'SPDLMT', });
lyr_puskesmas_jaksel_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'JPLPKM': 'JPLPKM', 'KMPPKM': 'KMPPKM', 'PKMKAT': 'PKMKAT', 'PKMKODE': 'PKMKODE', 'PKMLMT': 'PKMLMT', 'KWKPKM': 'KWKPKM', });
lyr_rumahsakit_jaksel_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'JPLYRS': 'JPLYRS', 'RSALAMAT': 'RSALAMAT', 'TIPRST': 'TIPRST', });
lyr_jalan_jaksel_1.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'ARHRJL': '', 'AUTRJL': '', 'FGSRJL': '', 'JARRJL': '', 'JPARJL': '', 'KLLRJL': '', 'KONRJL': '', 'KPMSTR': '', 'LKONOF': '', 'LKSBSP': '', 'LKSRTA': '', 'LLHRRT': '', 'LOCRJL': '', 'LBRBHJ': '', 'LBRJLN': '', 'MATRJL': '', 'MEDRJL': '', 'SPCRJL': '', 'STARJL': '', 'TOLRJL': '', 'UTKRJL': '', 'VLCPRT': '', 'WLYRJL': '', 'TGL_SK': '', 'JLNLYG': '', 'KLSRJL': '', 'SHAPE_Leng': '', 'panjang': '', 'SPDLMT': '', });
lyr_puskesmas_jaksel_2.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'JPLPKM': '', 'KMPPKM': '', 'PKMKAT': '', 'PKMKODE': '', 'PKMLMT': '', 'KWKPKM': '', });
lyr_rumahsakit_jaksel_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'JPLYRS': 'TextEdit', 'RSALAMAT': 'TextEdit', 'TIPRST': 'TextEdit', });
lyr_jalan_jaksel_1.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'inline label - visible with data', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'ARHRJL': 'no label', 'AUTRJL': 'no label', 'FGSRJL': 'no label', 'JARRJL': 'no label', 'JPARJL': 'no label', 'KLLRJL': 'no label', 'KONRJL': 'no label', 'KPMSTR': 'no label', 'LKONOF': 'no label', 'LKSBSP': 'no label', 'LKSRTA': 'no label', 'LLHRRT': 'no label', 'LOCRJL': 'no label', 'LBRBHJ': 'no label', 'LBRJLN': 'no label', 'MATRJL': 'no label', 'MEDRJL': 'no label', 'SPCRJL': 'no label', 'STARJL': 'no label', 'TOLRJL': 'no label', 'UTKRJL': 'no label', 'VLCPRT': 'no label', 'WLYRJL': 'no label', 'TGL_SK': 'no label', 'JLNLYG': 'no label', 'KLSRJL': 'no label', 'SHAPE_Leng': 'no label', 'panjang': 'no label', 'SPDLMT': 'no label', });
lyr_puskesmas_jaksel_2.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'inline label - visible with data', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'JPLPKM': 'no label', 'KMPPKM': 'no label', 'PKMKAT': 'no label', 'PKMKODE': 'no label', 'PKMLMT': 'no label', 'KWKPKM': 'no label', });
lyr_rumahsakit_jaksel_3.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'inline label - visible with data', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'JPLYRS': 'no label', 'RSALAMAT': 'no label', 'TIPRST': 'no label', });
lyr_rumahsakit_jaksel_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
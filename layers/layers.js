var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_lebels_1 = new ol.format.GeoJSON();
var features_lebels_1 = format_lebels_1.readFeatures(json_lebels_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lebels_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lebels_1.addFeatures(features_lebels_1);
var lyr_lebels_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lebels_1, 
                style: style_lebels_1,
                popuplayertitle: 'lebels',
                interactive: true,
                title: '<img src="styles/legend/lebels_1.png" /> lebels'
            });
var format_Main_road_2 = new ol.format.GeoJSON();
var features_Main_road_2 = format_Main_road_2.readFeatures(json_Main_road_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Main_road_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Main_road_2.addFeatures(features_Main_road_2);
var lyr_Main_road_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Main_road_2, 
                style: style_Main_road_2,
                popuplayertitle: 'Main_road',
                interactive: true,
                title: '<img src="styles/legend/Main_road_2.png" /> Main_road'
            });
var format_subroad_3 = new ol.format.GeoJSON();
var features_subroad_3 = format_subroad_3.readFeatures(json_subroad_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_subroad_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_subroad_3.addFeatures(features_subroad_3);
var lyr_subroad_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_subroad_3, 
                style: style_subroad_3,
                popuplayertitle: 'subroad',
                interactive: true,
                title: '<img src="styles/legend/subroad_3.png" /> subroad'
            });
var format_PD_12_4 = new ol.format.GeoJSON();
var features_PD_12_4 = format_PD_12_4.readFeatures(json_PD_12_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PD_12_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PD_12_4.addFeatures(features_PD_12_4);
var lyr_PD_12_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PD_12_4, 
                style: style_PD_12_4,
                popuplayertitle: 'PD_12',
                interactive: true,
    title: 'PD_12<br />\
    <img src="styles/legend/PD_12_4_0.png" /> <br />' });
var format_OUTOFNAHEYA12_5 = new ol.format.GeoJSON();
var features_OUTOFNAHEYA12_5 = format_OUTOFNAHEYA12_5.readFeatures(json_OUTOFNAHEYA12_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OUTOFNAHEYA12_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OUTOFNAHEYA12_5.addFeatures(features_OUTOFNAHEYA12_5);
var lyr_OUTOFNAHEYA12_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OUTOFNAHEYA12_5, 
                style: style_OUTOFNAHEYA12_5,
                popuplayertitle: 'OUT OF NAHEYA12',
                interactive: true,
                title: '<img src="styles/legend/OUTOFNAHEYA12_5.png" /> OUT OF NAHEYA12'
            });

lyr_ESRISatellite_0.setVisible(true);lyr_lebels_1.setVisible(true);lyr_Main_road_2.setVisible(true);lyr_subroad_3.setVisible(true);lyr_PD_12_4.setVisible(true);lyr_OUTOFNAHEYA12_5.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_lebels_1,lyr_Main_road_2,lyr_subroad_3,lyr_PD_12_4,lyr_OUTOFNAHEYA12_5];
lyr_lebels_1.set('fieldAliases', {'Id': 'Id', 'Name': 'Name', });
lyr_Main_road_2.set('fieldAliases', {'FID_Main_R': 'FID_Main_R', 'Id': 'Id', 'FID_Kabul_': 'FID_Kabul_', 'Province': 'Province', 'District': 'District', 'Dstrct_Cod': 'Dstrct_Cod', 'Shape_Leng': 'Shape_Leng', 'Nahiya_PD': 'Nahiya_PD', 'PD_Code': 'PD_Code', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_subroad_3.set('fieldAliases', {'LEFT_FID': 'LEFT_FID', 'RIGHT_FID': 'RIGHT_FID', });
lyr_PD_12_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Province': 'Province', 'District': 'District', 'Dstrct_Cod': 'Dstrct_Cod', 'Shape_Leng': 'Shape_Leng', 'Nahiya_PD': 'Nahiya_PD', 'PD_Code': 'PD_Code', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_OUTOFNAHEYA12_5.set('fieldAliases', {'Id': 'Id', });
lyr_lebels_1.set('fieldImages', {'Id': 'Range', 'Name': 'TextEdit', });
lyr_Main_road_2.set('fieldImages', {'FID_Main_R': 'TextEdit', 'Id': 'Range', 'FID_Kabul_': 'TextEdit', 'Province': 'TextEdit', 'District': 'TextEdit', 'Dstrct_Cod': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Nahiya_PD': 'TextEdit', 'PD_Code': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_subroad_3.set('fieldImages', {'LEFT_FID': 'TextEdit', 'RIGHT_FID': 'TextEdit', });
lyr_PD_12_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'Province': 'TextEdit', 'District': 'TextEdit', 'Dstrct_Cod': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Nahiya_PD': 'TextEdit', 'PD_Code': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_OUTOFNAHEYA12_5.set('fieldImages', {'Id': '', });
lyr_lebels_1.set('fieldLabels', {'Id': 'no label', 'Name': 'inline label - visible with data', });
lyr_Main_road_2.set('fieldLabels', {'FID_Main_R': 'no label', 'Id': 'no label', 'FID_Kabul_': 'no label', 'Province': 'no label', 'District': 'no label', 'Dstrct_Cod': 'no label', 'Shape_Leng': 'no label', 'Nahiya_PD': 'no label', 'PD_Code': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_subroad_3.set('fieldLabels', {'LEFT_FID': 'no label', 'RIGHT_FID': 'no label', });
lyr_PD_12_4.set('fieldLabels', {'OBJECTID': 'no label', 'Province': 'no label', 'District': 'no label', 'Dstrct_Cod': 'no label', 'Shape_Leng': 'no label', 'Nahiya_PD': 'no label', 'PD_Code': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_OUTOFNAHEYA12_5.set('fieldLabels', {'Id': 'no label', });
lyr_OUTOFNAHEYA12_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
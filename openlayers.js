var openStreetMap = new ol.layer.Tile({
    source: new ol.source.OSM(),
    title: 'OpenStreetMap',
    type: 'base'
});

var view = new ol.View({
    center: ol.proj.fromLonLat([6.6589694, 46.779577]),
    zoom: 18
});

var popup = new Popup();

var mesures = [
    etage_k_mesures,
    etage_j_mesures,
    etage_h_mesures,
    etage_g_mesures,
    etage_f_mesures,
    etage_e_mesures,
    etage_d_mesures,
    etage_c_mesures,
    etage_b_mesures,
    etage_a_mesures,
];

var map = new ol.Map({
    target: 'map',
    loadTilesWhileInteracting: true,
    layers: [
        new ol.layer.Group({
            'title': 'Cartes',
            layers: [
                openStreetMap,
            ]
        }),        
        new ol.layer.Group({
            'title': 'Etages',
            layers: [ 
                etage_k,
                etage_j,
                etage_h,
                etage_g,
                etage_f,
                etage_e,             
                etage_d,
                etage_c,
                etage_b,
                etage_a,            
            ]
        }),
        new ol.layer.Group({
            'title': 'Points de mesure',
            layers: [
                etage_k_points,
                etage_j_points,
                etage_h_points,
                etage_g_points,
                etage_f_points,
                etage_e_points,
                etage_d_points,
                etage_c_points,
                etage_b_points,
                etage_a_points,
            ]
        }),
        new ol.layer.Group({
            'title': 'Mesures',
            layers: mesures
        }),
    ],
    overlays: [
        popup
    ],
    view: view,
    controls: ol.control.defaults().extend([
        new ol.control.ScaleLine(),
        new ol.control.LayerSwitcher({
            tipLabel: 'Légende' 
        }),
    ]),
});

map.on('singleclick', function(evt) {    
    popup.hide();    
    var viewResolution = view.getResolution();

    mesures.forEach(function (layer, i, layers) {        
        if (layer.getVisible()) {           

            var wmsSource = new ol.source.TileWMS({
                url: 'http://docker5220-env-3912548.jcloud.ik-server.com/geoserver/heig-vd/wms',
                params: {
                    'LAYERS': 'heig-vd:'+layer.getProperties()['title'],
                    'TILED': true
                },
                serverType: 'geoserver',
                crossOrigin: 'anonymous'
            });

            var url = wmsSource.getGetFeatureInfoUrl(
                evt.coordinate, 
                viewResolution, 
                'EPSG:3857',
                {'INFO_FORMAT': 'application/json'}
            );
        
            $.get( url, function( data ) {
                if(data['features'].length == 1) {
        
                    var feature = data['features'][0];
        
                    var mesure_1 = feature['properties']['measure_1'];
                    var mesure_2 = feature['properties']['measure_2'];
                    var mesure_3 = feature['properties']['measure_3'];
                    var qualite = feature['properties']['value'];

                    mesure_1 = mesure_1.replace(/;/g, "<br>");
                    mesure_2 = mesure_2.replace(/;/g, "<br>");
                    mesure_3 = mesure_3.replace(/;/g, "<br>");

                    mesure_1 = mesure_1.replace(/:/g, ": dBm ");
                    mesure_2 = mesure_2.replace(/:/g, ": dBm ");
                    mesure_3 = mesure_3.replace(/:/g, ": dBm ");
        
                    var html = feature['id'] + "<br><br>";
                    html += "Mesure 1:<br>" + mesure_1 + "<br>";
                    html += "Mesure 2:<br>" + mesure_2 + "<br>";
                    html += "Mesure 3:<br>" + mesure_3 + "<br><br>";
                    html += "Qualité:<br>" + qualite + "%";
        
                    popup.show(evt.coordinate, html);
                }        
            });
        }
    });    
});
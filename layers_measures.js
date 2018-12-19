var etage_a_mesures = new ol.layer.Image({
    source: new ol.source.ImageWMS({
        ratio: 1,
        url: 'http://docker5220-env-3912548.jcloud.ik-server.com/geoserver/heig-vd/wms',
        params: {
            'FORMAT': 'image/png8',
            'VERSION': '1.1.1',  
            "STYLES": '',            
            "LAYERS": 'heig-vd:Mesures A',
            "EXCEPTIONS": 'application/vnd.ogc.se_inimage',
            "FORMAT_OPTIONS": "layout:legend;fontAntiAliasing:true;dpi:225",
            "LEGEND_OPTIONS" :"forceLabels:on;fontAntiAliasing:true",
        },
        serverType: 'geoserver'     
    }),
    title: 'Mesures A',
    visible: false,
});

var etage_b_mesures = new ol.layer.Image({
    source: new ol.source.ImageWMS({
        ratio: 1,
        url: 'http://docker5220-env-3912548.jcloud.ik-server.com/geoserver/heig-vd/wms',
        params: {
            'FORMAT': 'image/png8',
            'VERSION': '1.1.1',  
            "STYLES": '',
            "LAYERS": 'heig-vd:Mesures B',
            "exceptions": 'application/vnd.ogc.se_inimage',
            "FORMAT_OPTIONS": "layout:legend;fontAntiAliasing:true;dpi:225",
            "LEGEND_OPTIONS" :"forceLabels:on;fontAntiAliasing:true",
        },
        serverType: 'geoserver'    
    }),
    title: 'Mesures B',
    visible: false,
});

var etage_c_mesures = new ol.layer.Image({
    source: new ol.source.ImageWMS({
        ratio: 1,
        url: 'http://docker5220-env-3912548.jcloud.ik-server.com/geoserver/heig-vd/wms',
        params: {
            'FORMAT': 'image/png8',
            'VERSION': '1.1.1',  
            "STYLES": '',
            "LAYERS": 'heig-vd:Mesures C',
            "exceptions": 'application/vnd.ogc.se_inimage',
            "FORMAT_OPTIONS": "layout:legend;fontAntiAliasing:true;dpi:225",
            "LEGEND_OPTIONS" :"forceLabels:on;fontAntiAliasing:true",
        },
        serverType: 'geoserver'        
    }),
    title: 'Mesures C',
    visible: false,
});

var etage_d_mesures = new ol.layer.Image({
    source: new ol.source.ImageWMS({
        ratio: 1,
        url: 'http://docker5220-env-3912548.jcloud.ik-server.com/geoserver/heig-vd/wms',
        params: {
            'FORMAT': 'image/png8',
            'VERSION': '1.1.1',  
            "STYLES": '',
            "LAYERS": 'heig-vd:Mesures D',
            "exceptions": 'application/vnd.ogc.se_inimage',
            "FORMAT_OPTIONS": "layout:legend;fontAntiAliasing:true;dpi:225",
            "LEGEND_OPTIONS" :"forceLabels:on;fontAntiAliasing:true",
        },
        serverType: 'geoserver'     
    }),
    title: 'Mesures D',
    visible: false,
});

var etage_e_mesures = new ol.layer.Image({
    source: new ol.source.ImageWMS({
        ratio: 1,
        url: 'http://docker5220-env-3912548.jcloud.ik-server.com/geoserver/heig-vd/wms',
        params: {
            'FORMAT': 'image/png8',
            'VERSION': '1.1.1',  
            "STYLES": '',
            "LAYERS": 'heig-vd:Mesures E',
            "exceptions": 'application/vnd.ogc.se_inimage',
            "FORMAT_OPTIONS": "layout:legend;fontAntiAliasing:true;dpi:225",
            "LEGEND_OPTIONS" :"forceLabels:on;fontAntiAliasing:true",
        },
        serverType: 'geoserver'   
    }),
    title: 'Mesures E',
    visible: false,
});

var etage_f_mesures = new ol.layer.Image({
    source: new ol.source.ImageWMS({
        ratio: 1,
        url: 'http://docker5220-env-3912548.jcloud.ik-server.com/geoserver/heig-vd/wms',
        params: {
            'FORMAT': 'image/png8',
            'VERSION': '1.1.1',  
            "STYLES": '',
            "LAYERS": 'heig-vd:Mesures F',
            "exceptions": 'application/vnd.ogc.se_inimage',
            "FORMAT_OPTIONS": "layout:legend;fontAntiAliasing:true;dpi:225",
            "LEGEND_OPTIONS" :"forceLabels:on;fontAntiAliasing:true",
        },
        serverType: 'geoserver'        
    }),
    title: 'Mesures F',
    visible: false,
});

var etage_g_mesures = new ol.layer.Image({
    source: new ol.source.ImageWMS({
        ratio: 1,
        url: 'http://docker5220-env-3912548.jcloud.ik-server.com/geoserver/heig-vd/wms',
        params: {
            'FORMAT': 'image/png8',
            'VERSION': '1.1.1',  
            "STYLES": '',
            "LAYERS": 'heig-vd:Mesures G',
            "exceptions": 'application/vnd.ogc.se_inimage',
            "FORMAT_OPTIONS": "layout:legend;fontAntiAliasing:true;dpi:225",
            "LEGEND_OPTIONS" :"forceLabels:on;fontAntiAliasing:true",
        },
        serverType: 'geoserver'     
    }),
    title: 'Mesures G',
    visible: false,
});

var etage_h_mesures = new ol.layer.Image({
    source: new ol.source.ImageWMS({
        ratio: 1,
        url: 'http://docker5220-env-3912548.jcloud.ik-server.com/geoserver/heig-vd/wms',
        params: {
            'FORMAT': 'image/png8',
            'VERSION': '1.1.1',  
            "STYLES": '',
            "LAYERS": 'heig-vd:Mesures H',
            "exceptions": 'application/vnd.ogc.se_inimage',
            "FORMAT_OPTIONS": "layout:legend;fontAntiAliasing:true;dpi:225",
            "LEGEND_OPTIONS" :"forceLabels:on;fontAntiAliasing:true",
        },
        serverType: 'geoserver'         
    }),
    title: 'Mesures H',
    visible: false,
});

var etage_j_mesures = new ol.layer.Image({
    source: new ol.source.ImageWMS({
        ratio: 1,
        url: 'http://docker5220-env-3912548.jcloud.ik-server.com/geoserver/heig-vd/wms',
        params: {
            'FORMAT': 'image/png8',
            'VERSION': '1.1.1',  
            "STYLES": '',
            "LAYERS": 'heig-vd:Mesures J',
            "exceptions": 'application/vnd.ogc.se_inimage',
            "FORMAT_OPTIONS": "layout:legend;fontAntiAliasing:true;dpi:225",
            "LEGEND_OPTIONS" :"forceLabels:on;fontAntiAliasing:true",
        },
        serverType: 'geoserver'        
    }),
    title: 'Mesures J',
    visible: false,
});

var etage_k_mesures = new ol.layer.Image({
    source: new ol.source.ImageWMS({
        ratio: 1,
        url: 'http://docker5220-env-3912548.jcloud.ik-server.com/geoserver/heig-vd/wms',
        params: {
            'FORMAT': 'image/png8',
            'VERSION': '1.1.1',  
            "STYLES": '',
            "LAYERS": 'heig-vd:Mesures K',
            "exceptions": 'application/vnd.ogc.se_inimage',
            "FORMAT_OPTIONS": "layout:legend;fontAntiAliasing:true;dpi:225",
            "LEGEND_OPTIONS" :"forceLabels:on;fontAntiAliasing:true",
        },
        serverType: 'geoserver'        
    }),
    title: 'Mesures K',
    visible: false,
});
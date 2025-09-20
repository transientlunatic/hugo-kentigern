import 'leaflet/dist/leaflet.css';
import '../scss/maps.scss';
import L from "leaflet";

var TILE_SERVER="https://tiles.daniel-williams.co.uk"

window.addEventListener('load', function () {

    if (document.getElementById('map')){
	
	var map = L.map('map', {attributionControl: false}).setView([56.8481, -4.64428], 12);
	L.control.attribution({prefix: false}).addTo(map);
	var tilesource_layer = L.tileLayer(TILE_SERVER+'/topology/v0/{z}/{x}/{y}.png',
					   {minZoom: 9,
					    maxZoom: 13,
					    tms: false,
					    attribution: 'Map style: &copy; <a href="https://www.daniel-williams.co.uk/">Daniel Williams</a>; Map data: <a href="https://www.earthdata.nasa.gov/sensors/srtm">SRTM</a>, &copy; <a href="https://www.openstreetmap.org/copyright/">OpenStreetMap</a> contributors'}).addTo(map);
	var tilesource_layer_2 = L.tileLayer(TILE_SERVER+'/dbobih/v0/{z}/{x}/{y}.png',
					     {minZoom: 9,
					      maxZoom: 13,
					      tms: false,
					      attribution: 'Hill points &copy; <a href="https://www.hills-database.co.uk">The Database of British and Irish Hills</a>'}).addTo(map);

	var trig_layer = L.tileLayer(TILE_SERVER+'/trigs/v0/{z}/{x}/{y}.png',
				     {minZoom: 9,
				      maxZoom: 13,
				      tms: false,
				      attribution: 'Trigs &copy; <a href="https://www.ordnancesurvey.co.uk/gps/legacy-control-information/triangulation-stations">Ordnance Survey</a>, &copy; <a href="https://lonewalker.net/trig_db.php">lonewalker</a>'});

	
	var baseMaps = {
	    "SRTM": tilesource_layer,
	};

	var overlayMaps = {
	    "DBoBIH": tilesource_layer_2,
	    "Trigs": trig_layer
	};

	var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);
    }
});

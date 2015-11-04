
function initializeMap() {
		var latLng = new google.maps.LatLng(55.867835, -4.272394);
		var mapOptions = {
				zoom: 16,
				center: latLng,
				mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
				navigationControlOptions: {style: google.maps.NavigationControlStyle.ZOOM_PAN},
    			zoomControlOptions: { style: google.maps.ZoomControlStyle.SMALL},
				mapTypeId: google.maps.MapTypeId.HYBRID
		}

		var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
				
		var marker = new google.maps.Marker({
				position: latLng,
				map: map,
				title: 'Timeline Films'
		});
}
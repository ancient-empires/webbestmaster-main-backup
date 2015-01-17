(function (win, doc, docElem) {

	"use strict";
	/*global console, alert */

	var $ = function(selector) {
		return doc.querySelector(selector);
	};

	var $$ = function(selector) {
		return Array.prototype.splice(doc.querySelectorAll(selector));
	};

	var main = {
		handleEvent: function() {

			this.getLocation();

		},
		getLocation: function() {

			if (!navigator.geolocation) {
				alert("Geolocation is not supported by this browser.");
				return;
			}

			navigator.geolocation.getCurrentPosition(this.addMap);

		},
		addMap: function(position) {

			console.log(position.coords);

			var mapOptions = {
				center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
				zoom: 5,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			};

			var map = new google.maps.Map($("#map_canvas"), mapOptions);

			// add marker
			var marker;
			marker = new google.maps.Marker({
				position: mapOptions.center,
				map: map,
				title: 'Hello World!'
			});

			marker = new google.maps.Marker({
				position: new google.maps.LatLng(position.coords.latitude - 1, position.coords.longitude - 1),
				map: map,
				title: 'World!'
			});

			marker = new google.maps.Marker({
				position: new google.maps.LatLng(position.coords.latitude + 1, position.coords.longitude + 1),
				map: map,
				title: 'Hello!'
			});

			var contentString = '<div id="content">'+
				'<div id="siteNotice">'+
				'</div>'+
				'<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
				'<div id="bodyContent">'+
				'<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
				'sandstone rock formation in the southern part of the '+
				'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
				'south west of the nearest large town, Alice Springs; 450&#160;km '+
				'(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
				'features of the Uluru - Kata Tjuta National Park. Uluru is '+
				'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
				'Aboriginal people of the area. It has many springs, waterholes, '+
				'rock caves and ancient paintings. Uluru is listed as a World '+
				'Heritage Site.</p>'+
				'<p>Attribution: Uluru, <a href="http://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
				'http://en.wikipedia.org/w/index.php?title=Uluru</a> '+
				'(last visited June 22, 2009).</p>'+
				'</div>'+
				'</div>';

			var infowindow = new google.maps.InfoWindow({
				content: contentString
			});

			google.maps.event.addListener(marker, 'click', function() {
				infowindow.open(map,marker);
			});

			infowindow.open(map,marker);


		}



	};

	win.addEventListener('load', main, false);

}(window, document, document.documentElement));
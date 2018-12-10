/* ISOTOPE AND MASONRY */

function useIsotope(event) {

    // init Isotope
    let isotopeGrid = new Isotope( '.ba-portfolio-grid', {
        itemSelector: '.ba-portfolio-grid__item',
        masonry: {
            // use element for option
            columnWidth: '.ba-portfolio-grid__item',
            itemSelector: '.ba-portfolio-grid__item',
            transitionDuration: '0.5s',
            gutter: 0,
            horizontalOrder: true,
        }
    });

    let applyFilterFromLink = (linkObject) => {
        let filterValue = linkObject.dataset.filter;
        isotopeGrid.arrange({ filter: filterValue });
    };

    let filterGrid = function( event ) {
        event.preventDefault();
        applyFilterFromLink(this);
        let activeBtn = document.querySelector('.active');
        if (activeBtn) {
            activeBtn.classList.remove('active');
        }
        this.classList.add('active');
    };

    document.querySelectorAll('.ba-portfolio-filter__item').forEach(filterBtn => {
        filterBtn.addEventListener( 'click', filterGrid);
    });

    let activeBtn = document.querySelector('.active');
    applyFilterFromLink(activeBtn);
}
document.addEventListener('DOMContentLoaded', useIsotope);

/* SLIDER */

;(function($) {
	"use strict";

	$('.ba-slider').slick({

		arrows: false,
		dots: true

	});


})(jQuery);


/* MAP */

;(function($){
  function initMap() {

    var mapBlock = document.querySelector('.ba-map');

    if(mapBlock === null) return;
  
    var usa = {
      lat: 39.9492979,
      lng: -75.0598543
    };
  
    var baMap = new google.maps.Map(mapBlock, {
      zoom: 17,
      center: usa,
      disableDefaultUI: true,
      scrollwheel: false,
      styles: [
        {
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#f5f5f5"
            }
          ]
        },
        {
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#f5f5f5"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#bdbdbd"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#eeeeee"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#e5e5e5"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#ffffff"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#dadada"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        },
        {
          "featureType": "transit.line",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#e5e5e5"
            }
          ]
        },
        {
          "featureType": "transit.station",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#eeeeee"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#c9c9c9"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        }
      ]
    });
  
    var marker = new google.maps.Marker({
          position: usa,
          map: baMap,
          animation: google.maps.Animation.DROP,
          icon: './img/marker.png'
        });
        
        google.maps.event.addDomListener(window, "resize", function() {
          var center = baMap.getCenter();
          google.maps.event.trigger(baMap, "resize");
          baMap.setCenter(center);
      });
  }
        window.onload = initMap;


})(jQuery);
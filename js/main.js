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

;(function($) {
	"use strict";

	$('.ba-slider').slick({

		arrows: false,
		dots: true

	});


})(jQuery);

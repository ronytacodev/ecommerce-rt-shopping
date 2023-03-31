// filtering collection with Isotope library js : init Isotope
var $grid = $('.collection-list').isotope({
    // options
  });
  // filter items on button click
  $('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    resetFilterBtns();
    $(this).addClass('active-filter-btn');
    $grid.isotope({ filter: filterValue });
  });

// custom js script to add filtering collection: this is to paint button selected filter
var filterBtns = $('.filter-button-group').find('button');
function resetFilterBtns() {
    filterBtns.each(function(){
        $(this).removeClass('active-filter-btn');
    });
}
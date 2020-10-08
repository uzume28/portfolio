(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

  $(".portfolio-modal").on('show.bs.modal', function (a, b) {
    var self = $(this);
    var portfolioItem = $(a.relatedTarget).closest('.portfolio-item');
    var portfolioTitle = portfolioItem.find('.portfolio-title').text();
    var portfolioDesc = portfolioItem.find('.portfolio-desc').text();
    var portfolioImg = portfolioItem.find('.portfolio-img').attr('src');
    var portfolioContent = portfolioItem.find('.portfolio-content').html();

    self.find('.portfolio-modal-title').text(portfolioTitle);
    self.find('.portfolio-modal-desc').text(portfolioDesc);
    self.find('.portfolio-modal-img').attr('src', portfolioImg);
    self.find('.portfolio-modal-content').html(portfolioContent);

  });

  $(".portfolio-modal").on('hide.bs.modal', function (a, b) {
    //alert('close');

  });

})(jQuery); // End of use strict

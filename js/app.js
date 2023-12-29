console.log('Yo');

$(()=> {

  console.log('Yo2');

  const $window = $(window);
  const $links = $('nav a');
  const $links2 = $('section a');
  const $menu = $('.menu');

  $links.on('click', scrollToSection);
  $links2.on('click', scrollToSection2);
  $menu.on('click', toggleMenu);

  function toggleMenu(){
    $('.dropdown').slideToggle();
  }

  function scrollToSection() {
    const section = $(this).attr('href'); // whatever is clicked on eg #location
    $('body').animate( {
      scrollTop: $(section).offset().top
    }, 1000, () => {
      if ($window.width() < 575) {
        $('.dropdown').slideToggle();
      }
    });
  }

  function scrollToSection2() {
    const section = $(this).attr('href');
    $('body').animate({ scrollTop: $(`${section}`).offset().top}, 1000);
  }

});

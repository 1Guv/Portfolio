console.log('Yo');

$(()=> {

  const $links = $('nav a');
  $links.on('click', scrollToSection);

  function scrollToSection() {
    const section = $(this).attr('href');
    $('body').animate({ scrollTop: $(`${section}`).offset().top}, 1000);
  }

});

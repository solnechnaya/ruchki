$('.sl').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 2000,
    cssEase: 'ease-in',
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
        {
      breakpoint: 728,
      settings: {
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
        ]
});
console.log('Srabotalo');
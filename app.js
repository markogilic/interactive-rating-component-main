let points = document.querySelectorAll('.point');

points.forEach((point) => {
  point.addEventListener('click', () => {
    if (!point.classList.contains('active')) {
      points.forEach((point) => point.classList.remove('active'));
      point.classList.add('active');
    } else {
      point.classList.remove('active');
    }
  });
});
console.log($('.point').filter('.active').length);
$('#btn').click(function () {
  if ($('.point').filter('.active').length === 0) {
    $('.message').fadeIn().delay(1000).fadeOut();
  } else {
    let active = $('.point').filter('.active');
    let valueNumber = active.text();
    $('#number').text(valueNumber);
    $('#card-rate').animate(
      {
        opacity: '0',
      },

      function () {
        $('#card-thanks').fadeIn(500);
      }
    );
  }
});

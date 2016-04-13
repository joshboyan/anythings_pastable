$(document).ready(function() {
	$('figure').removeClass('jsOff')
    $('img').removeClass('jsOff');
	onClick();
	$('#ops-trigger').openStatus({
        sunday : ' 2:30pm until 9',
        monday : 'again Tuesday at 5pm',
        tuesday : ' 5pm until 10',
        wednesday : ' 5pm until 10',
        thursday : ' 5pm until 10',
        friday : ' 5pm until 10',
        saturday : ' 5pm until 10'
    });
});

function onClick () {
	$('#menu').on('click', function(){
		$('#navMenu').toggleClass('hide')
        $('#menu').toggleClass('spin');
	});
}

$("img").unveil(200, function() {
  $(this).load(function() {
    this.style.opacity = 1;
  });
});









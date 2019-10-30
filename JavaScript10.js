$('button').on('click', function() {
	$('ul').append('<li class="class1">'+ $('#input1').val() +'</li>')
});
$( "button" ).click(function() {
  $('li').toggleClass("class2");
});


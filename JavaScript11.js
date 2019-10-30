$('button#right').on('click', function() {
	$('button#create').on('click', function() {
		$('ul#rightList').append($('<li>right</li>'))
	})
})
$('button#left').on('click', function() {
	$('button#create').on('click', function() {
		$('ul#leftList').append($('<li>left</li>'))
	})
})
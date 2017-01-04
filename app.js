/****************************************************
*
*	Document Ready
*
****************************************************/

$(document).ready(function() {



	$(".js-like").on("click", function(event) {
		event.preventDefault();
		event.stopPropagation();

		$(this).text('Liked!')
		.closest('.news-item')
		.addClass('is-liked');
	});

	$(".js-add-link").on("click", function(event) {
		event.preventDefault();
		event.stopPropagation();

		$(".js-form").toggleClass('is-visible')
	})

	$(".js-show-modal").on("click", function(event) {
		event.preventDefault();

		$(".modal").addClass('is-visible');
		$(".modal-overlay").addClass('is-visible');
	});

	$(".modal-overlay").on("click", function(event) {
		event.preventDefault();

		$(".modal").removeClass('is-visible');
		$(".modal-overlay").removeClass('is-visible');
	});
});
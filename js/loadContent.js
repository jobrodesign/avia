//////////////////////////////////////////////////////////////////////////////////////////////
// LOAD HIDDEN CONTENT ///////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function(){

	$('body').on('click', 'a.itemLink', function (e) {
		e.preventDefault();	
		var id = $(this).attr("id").replace(/^.(\s+)?/, "");
		var contentTobeLoaded = $("#item_" + id).html();
		var $activeContent = $('#active_content');
					  
		$('#active_content').fadeOut(200, function(){
			$('#active_content').html(contentTobeLoaded).fadeIn(200, function () {
			});
		 });
	});

});
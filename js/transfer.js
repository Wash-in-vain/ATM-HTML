$(document).ready(function() {
	$('#th').click(function() {
		this.style.display = 'none';
		$('[name=kh]').css('display', 'none');
		$('#tzz').css('display', 'block');
	});
	$('#returns').click(function(){
		$('#tzz').css('display','none');
		$(this).css('dicplay','block');
		$('#kh').css('display','inline-block');
		$('#th').css('display', 'inline-block');
	});
	
	$('#kh').click(function() {
		this.style.display = 'none';
		$('[name=th]').css('display', 'none');
		$('.kzz').css('display', 'block');
	});
	$('.returns2').click(function(){
		$('.kzz').css('display','none');
		$(this).css('dicplay','none');
		$('#kh').css('display','inline-block');
		$('#th').css('display', 'inline-block');
	});
});

$(document).ready(function(){
	$('button').click(function(){
		var bankName = $(this).attr('name');
		if(bankName){
			window.location.href = "login.html?bank="+bankName;
		}
	});
});
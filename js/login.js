$(document).ready(function() {

	$('#loginSubmit').click(function(event) {
		var account = $('#account').val();
		var password = $('#password').val();
		if (account == '' && password == '') {
			event.preventDefault();
			event.stopPropagation();
			return $.growl.warning({
				title: "密码或银行卡号不能为空",
				message: ""
			});
		} else {
			$('form').submit(function() {
				console.log(this);
			});
		}

	});
});

//阻止表单内容为空时默认跳转
function preventSubmit() {
	var account = $('#account').val();
	var password = $('#password').val();
	if (account == '' && password == '') {

		return false;
	} else {
		$('form').submit(function() {
			console.log(this);
		});
	}
}


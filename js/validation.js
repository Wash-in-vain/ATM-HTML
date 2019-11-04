//表单内容为空验证
function validation(id,name1,nam2) {
	$(id).click(function(event) {
		var account = $('name1).val();
		var password = $(name1').val();
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
}

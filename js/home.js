$(document).ready(function(){
	$('#cunkuan').click(function(){
		location.href = "../frontdesk/deposit.html";
	});
	$('#qukuan').click(function(){
		window.location.href = "../frontdesk/withdrawals.html";
	});
	$('#zhuanzhang').click(function(){
		window.location.href = "../frontdesk/transfer.html";
	});
	$('#tuika').click(function(){
		console.log('退卡成功');
	});
	$('#jycx').click(function(){
		window.location.href = "../frontdesk/transactioninformation.html";
	});
});
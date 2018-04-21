var check="";
var txt;
var a,b;
$('#Transaction_form').submit(function(){
	
	txt = $('#transaction_id').val();
	
	$.ajax({
		type : "GET",
		url : "http://localhost:5224/ebaytester/webapi/transaction/checkTxn/"
			+localStorage.user_Id+"/"+txt,
		dataType : 'text',
		async:false,
		success : function(response) {
			localStorage.track_order_txn = txt;
			
				alert(response);
				window.location = "http://localhost:5224/ebaytester/track_transaction.html";
				

			
		}
	});
	
	
	return false;
});

var cart_product_list="";/*use to show products list*/
var result;/*use to store response */
var x;
var remove_pid;
var pid;
var total=0;
var price=[];
var count=0;
//cart_list(1);
cart_list_ajax();/*default cart ajax call*/
/*===================================================show products list in cart==================================================================*/
function cart_list_ajax(){
		cart_product_list="";
		total=0;
		vat=0;
		price=[];
	  $.ajax({
	  				  type :"GET",
	  					url: "http://localhost:5224/ebaytester/webapi/cart/getallproduct/"+localStorage.user_Id,
	            dataType:'JSON',
	  			success: function(response)
	  			{
	  			var i;
	  			var str='<table id="Table" class="table table-hover">';
			    var total=0;
			    str+='<tr><td>Sr No</td><td>Product Id</td><td>Product Price</td><tr>';
	        	
	  	          for (i=0;i<response.length;i++) 
	  	          {
	  	        	str+='<tr><td>'+(i+1)+'</td><td>'+response[i].item_id+'</td><td>'+response[i].product_price+'</td><tr>';
	  	        	total=parseFloat(parseFloat(total)+parseFloat(response[i].product_price)).toFixed(2);
	  	          }
	  	        
	  	        str = str+'</table>';
	  	        vat=parseFloat(parseFloat(total)*0.04);
	  	        str=str+'<br><div>Total:'+total+'<br>VAT: '+vat+'</div>';
	  	      document.getElementById("Exam03").innerHTML = str+'</table>';
	            }
	          });
};
/*==========================================================Dynamic HTML code of products List=========================================================================================================== */

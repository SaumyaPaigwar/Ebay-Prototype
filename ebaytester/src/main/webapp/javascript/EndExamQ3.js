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
		alert("here");
	  $.ajax({
	  				  type :"GET",
	  					url: "http://localhost:5224/ebaytester/webapi/cart/getallproductSellerInfo/"+localStorage.user_Id,
	            dataType:'JSON',
	  			success: function(response)
	  			{
	  			var i;
	  			var str='<table id="Table" class="table table-hover">';
			    var total=0;
			    str+='<tr><td>Sr No</td><td>Item Id</td><td>Seller Id </td><td>Seller Address</td><tr>';
	        	
	  	          for (i=0;i<response.length;i++) 
	  	          {
	  	        	str+='<tr><td>'+(i+1)+'</td><td>'+response[i].item_id+'</td><td>'+response[i].seller_id+'</td><td>'+response[i].seller_address+'</td><tr>';
	  	          }
	  	        
	  	        str = str+'</table>';
	  	      document.getElementById("Exam03").innerHTML = str+'</table>';
	            }
	          });
};
/*==========================================================Dynamic HTML code of products List=========================================================================================================== */

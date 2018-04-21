var category_product_list;
var selected_product_list;
var product_list;


$.ajax({
			
			type: "get",
	       url:  "http://localhost:5224/ebaytester/webapi/products/getAllproducts",
	       success: function(response){
	    	   alert("saumya");
	    	   category_product_list = JSON.parse(JSON.stringify(response));
	    	   selected_product_list = category_product_list;
	    	   product_list = selected_product_list;
	    	   
	    	   var remaining_products=response.length;
		       for(var i=0;i<Math.ceil(response.length/4);i++){
		         $("#c1").append("\
		        <div class='container-fluid'> \
		        <div class='row'>");
		          for(var j=0;j<4 && remaining_products>0;j++){
		            remaining_products--;
		            // filters dalna hai
		            if(response[4*i+j].product_discount!=0){
		            $("#c1").append("<div class='col-sm-3' id='div1'>\
		         						<div class='thumbnail'>\
		         						<img src='"+response[4*i+j].product_img_url +"' alt='img1' style='height:300px;'>\
		         						<div>\
		         							<h4 style='text-align:center'>"+response[4*i+j].product_name+"</h4>\
		         							<h4 style='text-align:center'>Price:<strike>"+response[4*i+j].product_price+"</strike></h4>\
		         							<h4 style='text-align:center'>Discounted Price:"+(response[4*i+j].product_price-(response[4*i+j].product_discount/100)*response[4*i+j].product_price)+"</h4>\
		         							<br><button type='button' class='btn btn-primary center-block' onclick='buybutton("+response[4*i+j].product_id+")'>Buy Now</button>\
		         							<br><button type='button' class='btn btn-primary center-block'onclick='addToCartButton("+response[4*i+j].product_id+")'>Add To Cart</button>\
		         						</div>\
		         						</div>\
		         					</div>");
		            }else{
		                $("#c1").append("<div class='col-sm-3' id='div1'>\
		 						<div class='thumbnail'>\
		 						<img src='"+response[4*i+j].product_img_url +"' alt='img1'  style='height:300px;'>\
		 						<div>\
		 							<h4 style='text-align:center'>"+response[4*i+j].product_name+"</h4>\
		 							<h4 style='text-align:center'>Final Price:"+(response[4*i+j].product_price-(response[4*i+j].product_discount/100)*response[4*i+j].product_price)+"</h4>\
		 							<br><button type='button' class='btn btn-primary center-block'>Buy Now</button>\
		 							<br><button type='button' class='btn btn-primary center-block'>Add To Cart</button>\
		 						</div>\
		 						</div>\
		 					</div>");
		            	
		            }
		          }

		        $("#c1").append("</div>\
		         				</div>");

		       }
		     }

		   });
		  

function priceFilter(start_price,end_price)
{
	starting_price = start_price;
	ending_price = end_price;
	product_list = selected_product_list.filter(function(el) {
		    return (el.product_price >= start_price && el.product_price <= end_price);
		    });
	//document.getElementById("#examdiv").innerHTML = createProductListGUI(product_list);
	createProductListGUI(product_list);
	$("#sortFilter").val("None");
}

function createProductListGUI(response)
{
	//document.getElementById("#c1").innerHTML='';
	$("#c1").empty();
	   var remaining_products=response.length;
	   //$("#c1").clear();
    for(var i=0;i<Math.ceil(response.length/4);i++){
      $("#c1").append("\
     <div class='container-fluid'> \
     <div class='row'>");
       for(var j=0;j<4 && remaining_products>0;j++){
         remaining_products--;
         // filters dalna hai
         if(response[4*i+j].product_discount!=0){
         $("#c1").append("<div class='col-sm-3' id='div1'>\
      						<div class='thumbnail'>\
      						<img src='"+response[4*i+j].product_img_url +"' alt='img1' style='height:300px;'>\
      						<div>\
      							<h4 style='text-align:center'>"+response[4*i+j].product_name+"</h4>\
      							<h4 style='text-align:center'>Price:<strike>"+response[4*i+j].product_price+"</strike></h4>\
      							<h4 style='text-align:center'>Discounted Price:"+(response[4*i+j].product_price-(response[4*i+j].product_discount/100)*response[4*i+j].product_price)+"</h4>\
      							<br><button type='button' class='btn btn-primary center-block' onclick='buybutton("+response[4*i+j].product_id+")'>Buy Now</button>\
      							<br><button type='button' class='btn btn-primary center-block'onclick='addToCartButton("+response[4*i+j].product_id+")'>Add To Cart</button>\
      						</div>\
      						</div>\
      					</div>");
         }else{
             $("#c1").append("<div class='col-sm-3' id='div1'>\
						<div class='thumbnail'>\
						<img src='"+response[4*i+j].product_img_url +"' alt='img1'  style='height:300px;'>\
						<div>\
							<h4 style='text-align:center'>"+response[4*i+j].product_name+"</h4>\
							<h4 style='text-align:center'>Final Price:"+(response[4*i+j].product_price-(response[4*i+j].product_discount/100)*response[4*i+j].product_price)+"</h4>\
							<br><button type='button' class='btn btn-primary center-block'>Buy Now</button>\
							<br><button type='button' class='btn btn-primary center-block'>Add To Cart</button>\
						</div>\
						</div>\
					</div>");
         	
         }
       }

     $("#c1").append("</div>\
      				</div>");

    }
  	
}

		function buybutton(prod_id) {
			// alert("inside");
			localStorage.product_id_buynow = prod_id;
			localStorage.place_order=null;
			localStorage.deal_id=null;
			if(localStorage.user_Id==null)
				{
				 window.location = "http://localhost:5224/ebaytester/login.html";
				}
				else if(parseInt(localStorage.user_PINCODE)==8888)
				{
					window.location = "http://localhost:5224/ebaytester/address_form_buyer.html";
				}
			else
				{
				 window.location = "http://localhost:5224/ebaytester/orderReview.html";
				}
		}

		function addToCartButton(prod_id) {
			alert(prod_id);
			if(localStorage.user_Id==null)
				{
				window.location="http://localhost:5224/ebaytester/login.html";
				}
			else
				{
			$.ajax({
			       type: "post",
			       url:  "http://localhost:5224/ebaytester/webapi/cart/addToCart/"+prod_id+"/"+localStorage.user_Id+"/"+1,
			       complete: function(response){
		             window.location="http://localhost:5224/ebaytester/cart.html";
			       	}
				   })
				}
		}
		// if(!(response[i].deal ==null || response[i].deal=="")){
		//
		//
		//   console.log(i);
		//   console.log(response[i].product_name);
		// }

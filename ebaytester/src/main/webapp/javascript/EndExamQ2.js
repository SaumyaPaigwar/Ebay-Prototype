$('#ProductCompare').submit(function(){
	 // alert("saumya");
		$.ajax({
			type: "post",
			url:  "http://localhost:5224/ebaytester/webapi/products/getComparedProduct",
			data: $('#ProductCompare').serialize(),
			dataType: "JSON",
			success: function(response){
					alert("done");
					var str='<table id="compareTable" class="table table-bordered table-hover">';
			        if(response!=null)
				         {
				        	 var prod1=response[0];
				        	 var prod2=response[1];
				        	 alert(prod1.product_name);
				        	 str+='<tr><td>Product Image</td><td><img src="'+prod1.product_img_url+'" style="max-width:200px; max-height:200px" alt="product"></td><td><img src="'+prod2.product_img_url+'" style="max-width:200px; max-height:200px" alt="product"></td><tr>';
				        	 str+='<tr><td>Product Price</td><td>'+prod1.product_price+'</td><td>'+prod2.product_price+'</td><tr>';
				        	 str+='<tr><td>Product color</td><td>'+prod1.color+'</td><td>'+prod2.color+'</td><tr>';
				        	 	
				        	 str+='<tr><td>Product Category</td><td>'+prod1.category_name+'</td><td>'+prod2.category_name+'</td><tr>';
				        	 str+='<tr><td>Product SubCategory</td><td>'+prod1.subcategory_name+'</td><td>'+prod2.subcategory_name+'</td><tr>';
					        
				        	 str+='<tr><td>Product Name</td><td>'+prod1.product_name+'</td><td>'+prod2.product_name+'</td><tr>';
				           }
				       	document.getElementById("Exam03").innerHTML = str+'</table>';
					}
				     });
				   return false;
	     });		     

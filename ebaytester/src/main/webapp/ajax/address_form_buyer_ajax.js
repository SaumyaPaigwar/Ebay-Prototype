//================================================Ajax call on submit the buyer address form=======================================================//
$('#Address_From').submit(function(){
               $.ajax({
                 type: "post",
                 url:  "http://localhost:5224/ebaytester/webapi/user/updateAddress/"+localStorage.email,
                 data: $('#Address_From').serialize(),
                 dataType: "JSON",
                 success: function(response){
                   if(response!=null)
                   {
                     localStorage.email=response.user_email;
	                   localStorage.user_Address=response.user_address;
		                 localStorage.user_State=response.user_state;
		                 localStorage.user_PINCODE=response.user_pincode;
	                   localStorage.user_Phone=response.user_phone;
	                   if(localStorage.place_order=="place_order"){
							           window.location="http://localhost:5224/ebaytester/orderReviewCart.html";
	                   }
                     else if( localStorage.deal_id!="null")
                     {
                       window.location = "http://localhost:5224/ebaytester/orderReviewDeal.html";
                     }
	                   else{
	                       window.location=window.location="http://localhost:5224/ebaytester/orderReview.html";
	                   }
                   }
                   else
                        {
                          alert("enter detail correct");
                        }
                 }
               });
             return false;
           });
//===================================================================END OF CODE===================================================================//

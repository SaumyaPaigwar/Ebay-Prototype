package org.ebay_project.ebaytester.resource;

import java.util.ArrayList;

import javax.ws.rs.Consumes;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.ebay_project.ebaytester.model.DealSet;
import org.ebay_project.ebaytester.model.Deals;
import org.ebay_project.ebaytester.service.DealService;

@Path("/deal")
public class DealResource {
//=============================================ADD NEW DEAL BY ADMIN ==============================================//	
	@POST 
	@Path("/addNewDeal")
	@Consumes(MediaType.APPLICATION_FORM_URLENCODED)
	@Produces(MediaType.TEXT_PLAIN)
	public String addNewDeal(@FormParam("Deal_Name") String deal_name,@FormParam("Free") int free_products,@FormParam("Paid") int paid_products,@FormParam("Discount") int overall_discount)
	{
		System.out.println("Inside");
		System.out.println(deal_name+" "+free_products+" "+paid_products+" "+overall_discount);
		deal_name=deal_name.toUpperCase();
		DealService dealService = new DealService();
		System.out.println("Deal Name : "+deal_name.toUpperCase());
		return dealService.uploadNewDeal(deal_name.toUpperCase(), free_products, paid_products, overall_discount);
	}
//==============================================GET ALL DEAL NAMES=================================================// 	
	@GET
	@Path("/getAllDealName")
	@Produces(MediaType.APPLICATION_JSON)
	public ArrayList<Deals> getAllDeal()
	{
		DealService dealService = new DealService();
		System.out.println("Retrieving all list");
		return dealService.getAllDealsName();
	}
//=============================================ADD PRODUCTS INTO DEAL============================================//	
	@POST 
	@Path("/addProductsToDeal")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.TEXT_PLAIN)
	public String addProductToDeal(DealSet deal) {
		System.out.println(deal.getFree_products());
		System.out.println(deal.getEnd_date());
		System.out.println(deal.getSeller_id());
		DealService dealService = new DealService();
		return dealService.addProductsToDeal(deal);
	}
//===========================================GET DEAL INFO ON DEAL NAME==========================================//	
	@GET
	@Path("/{deal_name}")
	@Produces(MediaType.APPLICATION_JSON)
	public Deals getDealInfo(@PathParam("deal_name") String deal_name)
	{
		DealService dealService = new DealService();
		System.out.println("Inside deal info retrieving");
		return dealService.getDealInfo(deal_name);
	}
}
//=================================================END OF CODE=================================================// 

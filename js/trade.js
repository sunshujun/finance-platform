$(document).ready(function(){
	 //买单委托导航条变换
    $("#buy-entrust ul:first a:eq(1)").css("display","none")
    $("#buy-entrust-list table a[href='#buy-entrust-add']").each(function(i,elem){
    		$(elem).on("show.bs.tab",function(){
    			$("#buy-entrust ul:first a:eq(1)").css("display","block").tab("show");
    		})
    });
    $("#buy-entrust ul:first a:eq(0)").on("show.bs.tab",function(){
    	$("#buy-entrust ul:first a:eq(1)").css("display","none");
    })
    
    //卖单委托导航条变换
    $("#sale-entrust ul:first a:eq(1)").css("display","none")
    $("#sale-entrust-list table a[href='#sale-entrust-add']").each(function(i,elem){
    		$(elem).on("show.bs.tab",function(){
    			$("#sale-entrust ul:first a:eq(1)").css("display","block").tab("show");
    		})
    });
    $("#sale-entrust ul:first a:eq(0)").on("show.bs.tab",function(){
    	$("#sale-entrust ul:first a:eq(1)").css("display","none");
    })
    
    //成交信息导航条变换
    $("#deal-message ul:first a:eq(1)").css("display","none")
    $("#deal-message-list table a[href='#deal-message-add']").each(function(i,elem){
    		$(elem).on("show.bs.tab",function(){
    			$("#deal-message ul:first a:eq(1)").css("display","block").tab("show");
    		})
    });
    $("#deal-message ul:first a:eq(0)").on("show.bs.tab",function(){
    	$("#deal-message ul:first a:eq(1)").css("display","none");
    })
    
    //交易流水导航条变换
    $("#trade-water ul:first a:eq(1)").css("display","none")
    $("#trade-water-list table a[href='#trade-water-add']").each(function(i,elem){
    		$(elem).on("show.bs.tab",function(){
    			$("#trade-water ul:first a:eq(1)").css("display","block").tab("show");
    		})
    });
    $("#trade-water ul:first a:eq(0)").on("show.bs.tab",function(){
    	$("#trade-water ul:first a:eq(1)").css("display","none");
    })
    
    //资产交易流水导航条变换
    $("#property-water ul:first a:eq(1)").css("display","none")
    $("#property-water-list table a[href='#property-water-add']").each(function(i,elem){
    		$(elem).on("show.bs.tab",function(){
    			$("#property-water ul:first a:eq(1)").css("display","block").tab("show");
    		})
    });
    $("#property-water ul:first a:eq(0)").on("show.bs.tab",function(){
    	$("#property-water ul:first a:eq(1)").css("display","none");
    })
    
    //资金交易流水导航条变换
    $("#asset-water ul:first a:eq(1)").css("display","none")
    $("#asset-water-list table a[href='#asset-water-add']").each(function(i,elem){
    		$(elem).on("show.bs.tab",function(){
    			$("#asset-water ul:first a:eq(1)").css("display","block").tab("show");
    		})
    });
    $("#asset-water ul:first a:eq(0)").on("show.bs.tab",function(){
    	$("#asset-water ul:first a:eq(1)").css("display","none");
    })
})

$(document).ready(function(){
	//客户信息导航条变换
    $("#client-message-list table a[href='#client-message-add']").each(function(i,elem){
    		$(elem).on("show.bs.tab",function(){
    			$("#client-message ul:first a:eq(1)").tab("show").text("客户信息修改");
    		})
    })
    $("#client-message ul:first a:eq(0)").on("show.bs.tab",function(){
    	$("#client-message ul:first a:eq(1)").text("客户信息添加");
    })
    
    //客户合约登记导航条变换
    $("#client-agreement ul:first a:eq(1)").css("display","none")
    $("#client-agreement-list table a[href='#client-agreement-add']").each(function(i,elem){
    		$(elem).on("show.bs.tab",function(){
    			$("#client-agreement ul:first a:eq(1)").css("display","block").tab("show");
    		})
    });
    $("#client-agreement ul:first a:eq(0)").on("show.bs.tab",function(){
    	$("#client-agreement ul:first a:eq(1)").css("display","none");
    })
	
})
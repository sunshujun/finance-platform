$(document).ready(function(){
	//差错交易登记导航条变换
    $("#wrong-trade ul:first a:eq(1)").css("display","none")
    $("#wrong-trade-list table a[href='#wrong-trade-add']").each(function(i,elem){
    		$(elem).on("show.bs.tab",function(){
    			$("#wrong-trade ul:first a:eq(1)").css("display","block").tab("show");
    		})
    });
    $("#wrong-trade ul:first a:eq(0)").on("show.bs.tab",function(){
    	$("#wrong-trade ul:first a:eq(1)").css("display","none");
    })
    
    //价格偏离度导航条变换
    $("#price-deviate ul:first a:eq(1)").css("display","none")
    $("#price-deviate-list table a[href='#price-deviate-add']").each(function(i,elem){
    		$(elem).on("show.bs.tab",function(){
    			$("#price-deviate ul:first a:eq(1)").css("display","block").tab("show");
    		})
    });
    $("#price-deviate ul:first a:eq(0)").on("show.bs.tab",function(){
    	$("#price-deviate ul:first a:eq(1)").css("display","none");
    })
    
    //银行cd交易数据导航条变换
    $("#cd-data .span-foot").css("display","none")
    $("#cd-data-list table a[href='#cd-data-add']").each(function(i,elem){
    		$(elem).on("show.bs.tab",function(){
    			$("#cd-data ul:first a:eq(1)").tab("show").text("银行大额存单交易数据修改");
    			$("#cd-data .span-foot").css("display","block")
    		})
    });
    $("#cd-data ul:first a:eq(0)").on("show.bs.tab",function(){
    	$("#cd-data ul:first a:eq(1)").text("银行大额存单交易数据添加");
    	$("#cd-data .span-foot").css("display","none")
    })
})
$(document).ready(function(){
	//销售渠道列表导航条变换
    $("#sale-channel .span-foot").css("display","none")
    $("#sale-channel-list table a[href='#sale-channel-add']").each(function(i,elem){
    		$(elem).on("show.bs.tab",function(){
    			$("#sale-channel ul:first a:eq(1)").tab("show").text("销售渠道信息修改");
    			$("#sale-channel .span-foot").css("display","block")
    		})
    });
    $("#sale-channel ul:first a:eq(0)").on("show.bs.tab",function(){
    	$("#sale-channel ul:first a:eq(1)").text("销售渠道信息添加");
    	$("#sale-channel .span-foot").css("display","none")
    })
    //系统接出列表导航条变换
    $("#sys-out .span-foot").css("display","none")
    $("#sys-out-list table a[href='#sys-out-add']").each(function(i,elem){
    		$(elem).on("show.bs.tab",function(){
    			$("#sys-out ul:first a:eq(1)").tab("show").text("接出渠道信息修改");
    			$("#sys-out .span-foot").css("display","block")
    		})
    });
    $("#sys-out ul:first a:eq(0)").on("show.bs.tab",function(){
    	$("#sys-out ul:first a:eq(1)").text("接出渠道信息添加");
    	$("#sys-out .span-foot").css("display","none")
    })
})
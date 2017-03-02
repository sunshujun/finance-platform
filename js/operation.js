$(document).ready(function(){
	//系统数据备份清理导航条变换
    $("#data-clear .span-foot").css("display","none")
    $("#data-clear-list table a[href='#data-clear-add']").each(function(i,elem){
    		$(elem).on("show.bs.tab",function(){
    			$("#data-clear ul:first a:eq(1)").tab("show").text("系统数据备份清理信息修改");
    			$("#data-clear .span-foot").css("display","block")
    		})
    });
    $("#data-clear ul:first a:eq(0)").on("show.bs.tab",function(){
    	$("#data-clear ul:first a:eq(1)").text("系统数据备份清理信息添加");
    	$("#data-clear .span-foot").css("display","none")
    })
    
    //系统批处理运行导航条变换
    $("#deal-operation ul:first a:eq(1)").css("display","none")
    $("#deal-operation-list table a[href='#deal-operation-add']").each(function(i,elem){
    		$(elem).on("show.bs.tab",function(){
    			$("#deal-operation ul:first a:eq(1)").css("display","block").tab("show");
    		})
    });
    $("#deal-operation ul:first a:eq(0)").on("show.bs.tab",function(){
    	$("#deal-operation ul:first a:eq(1)").css("display","none");
    })
    
    //系统批处理控制导航条变换
    $("#deal-control .span-foot").css("display","none")
    $("#deal-control-list table a[href='#deal-control-add']").each(function(i,elem){
    		$(elem).on("show.bs.tab",function(){
    			$("#deal-control ul:first a:eq(1)").tab("show").text("系统批处理控制信息修改");
    			$("#deal-control .span-foot").css("display","block")
    		})
    });
    $("#deal-control ul:first a:eq(0)").on("show.bs.tab",function(){
    	$("#deal-control ul:first a:eq(1)").text("系统批处理控制信息添加");
    	$("#deal-control .span-foot").css("display","none")
    })
    
    //序列管理导航条变换
    $("#list-manage-list table a[href='#list-manage-add']").each(function(i,elem){
    		$(elem).on("show.bs.tab",function(){
    			$("#list-manage ul:first a:eq(1)").tab("show").text("序列信息修改");
    		})
    });
    $("#list-manage ul:first a:eq(0)").on("show.bs.tab",function(){
    	$("#list-manage ul:first a:eq(1)").text("序列信息添加");
    })
})

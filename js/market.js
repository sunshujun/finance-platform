$(document).ready(function(){
	//公告信息导航条变换
    $("#notice-message-list table a[href='#notice-message-add']").each(function(i,elem){
    		$(elem).on("show.bs.tab",function(){
    			$("#notice-message ul:first a:eq(1)").tab("show").text("公告信息修改");
    		})
    })
    $("#notice-message ul:first a:eq(0)").on("show.bs.tab",function(){
    	$("#notice-message ul:first a:eq(1)").text("公告信息添加");
    })
    
    //系统消息导航条变换
    $("#sys-message-list table a[href='#sys-message-add']").each(function(i,elem){
    		$(elem).on("show.bs.tab",function(){
    			$("#sys-message ul:first a:eq(1)").tab("show").text("系统信息事件修改");
    		})
    })
    $("#sys-message ul:first a:eq(0)").on("show.bs.tab",function(){
    	$("#sys-message ul:first a:eq(1)").text("系统信息事件添加");
    })
    
    //银行消息导航条变换
    $("#bank-message-list table a[href='#bank-message-add']").each(function(i,elem){
    		$(elem).on("show.bs.tab",function(){
    			$("#bank-message ul:first a:eq(1)").tab("show").text("银行信息修改");
    		})
    })
    $("#bank-message ul:first a:eq(0)").on("show.bs.tab",function(){
    	$("#bank-message ul:first a:eq(1)").text("银行信息添加");
    })
	
})
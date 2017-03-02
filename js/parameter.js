$("document").ready(function(){
	//系统参数列表导航条变换
    $("#sys-parameter .span-foot").css("display","none")
    $("#sys-parameter table a[href='#sys-parameter-add']").each(function(i,elem){
    		$(elem).on("show.bs.tab",function(){
    			$("#sys-parameter ul:first a:eq(1)").tab("show").text("系统参数修改");
    			$("#sys-parameter .span-foot").css("display","block")
    		})
    });
    $("#sys-parameter ul:first a:eq(0)").on("show.bs.tab",function(){
    	$("#sys-parameter ul:first a:eq(1)").text("系统参数添加");
    	$("#sys-parameter .span-foot").css("display","none")
    })
    
    //系统节点列表导航条变换
    $("#sys-node .span-foot").css("display","none")
    $("#sys-node table a[href='#sys-node-add']").each(function(i,elem){
    		$(elem).on("show.bs.tab",function(){
    			$("#sys-node ul:first a:eq(1)").tab("show").text("系统节点修改");
    			$("#sys-node .span-foot").css("display","block")
    		})
    });
    $("#sys-node ul:first a:eq(0)").on("show.bs.tab",function(){
    	$("#sys-node ul:first a:eq(1)").text("系统节点添加");
    	$("#sys-node .span-foot").css("display","none")
    })
    
    //应用字典列表导航条变换
    $("#use-dictionary .span-foot").css("display","none")
    $("#use-dictionary table a[href='#use-dictionary-add']").each(function(i,elem){
    		$(elem).on("show.bs.tab",function(){
    			$("#use-dictionary ul:first a:eq(1)").tab("show").text("应用字典修改");
    			$("#use-dictionary .span-foot").css("display","block")
    		})
    });
    $("#use-dictionary ul:first a:eq(0)").on("show.bs.tab",function(){
    	$("#use-dictionary ul:first a:eq(1)").text("应用字典添加");
    	$("#use-dictionary .span-foot").css("display","none")
    }) 
    
    //接入节点列表导航条变换
    $("#in-node .span-foot").css("display","none")
    $("#in-node table a[href='#in-node-add']").each(function(i,elem){
    		$(elem).on("show.bs.tab",function(){
    			$("#in-node ul:first a:eq(1)").tab("show").text("接入节点修改");
    			$("#in-node .span-foot").css("display","block")
    		})
    });
    $("#in-node ul:first a:eq(0)").on("show.bs.tab",function(){
    	$("#in-node ul:first a:eq(1)").text("接入节点添加");
    	$("#in-node .span-foot").css("display","none")
    }) 
    
    //错误信息列表导航条变换
    $("#error-message .span-foot").css("display","none")
    $("#error-message table a[href='#error-message-add']").each(function(i,elem){
    		$(elem).on("show.bs.tab",function(){
    			$("#error-message ul:first a:eq(1)").tab("show").text("错误信息修改");
    			$("#error-message .span-foot").css("display","block")
    		})
    });
    $("#error-message ul:first a:eq(0)").on("show.bs.tab",function(){
    	$("#error-message ul:first a:eq(1)").text("错误信息添加");
    	$("#error-message .span-foot").css("display","none")
    })  
    
    //服务信息列表导航条变换
    $("#serve-message .span-foot").css("display","none")
    $("#serve-message table a[href='#serve-message-add']").each(function(i,elem){
    		$(elem).on("show.bs.tab",function(){
    			$("#serve-message ul:first a:eq(1)").tab("show").text("源服务信息修改");
    			$("#serve-message .span-foot").css("display","block")
    		})
    });
    $("#serve-message ul:first a:eq(0)").on("show.bs.tab",function(){
    	$("#serve-message ul:first a:eq(1)").text("源服务信息添加");
    	$("#serve-message .span-foot").css("display","none")
    })   
    
    //限额标识列表导航条变换
    $("#limit-sign .span-foot").css("display","none")
    $("#limit-sign table a[href='#limit-sign-add']").each(function(i,elem){
    		$(elem).on("show.bs.tab",function(){
    			$("#limit-sign ul:first a:eq(1)").tab("show").text("交易限额信息修改");
    			$("#limit-sign .span-foot").css("display","block")
    		})
    });
    $("#limit-sign ul:first a:eq(0)").on("show.bs.tab",function(){
    	$("#limit-sign ul:first a:eq(1)").text("交易限额信息添加");
    	$("#limit-sign .span-foot").css("display","none")
    })    
    
    //交易类型列表导航条变换
    $("#trade-type .span-foot").css("display","none")
    $("#trade-type table a[href='#trade-type-add']").each(function(i,elem){
    		$(elem).on("show.bs.tab",function(){
    			$("#trade-type ul:first a:eq(1)").tab("show").text("交易类型修改");
    			$("#trade-type .span-foot").css("display","block")
    		})
    });
    $("#trade-type ul:first a:eq(0)").on("show.bs.tab",function(){
    	$("#trade-type ul:first a:eq(1)").text("交易类型添加");
    	$("#trade-type .span-foot").css("display","none")
    })  
    
    //交易模式列表导航条变换
    $("#trade-mode .span-foot").css("display","none")
    $("#trade-mode table a[href='#trade-mode-add']").each(function(i,elem){
    		$(elem).on("show.bs.tab",function(){
    			$("#trade-mode ul:first a:eq(1)").tab("show").text("交易模式修改");
    			$("#trade-mode .span-foot").css("display","block")
    		})
    });
    $("#trade-mode ul:first a:eq(0)").on("show.bs.tab",function(){
    	$("#trade-mode ul:first a:eq(1)").text("交易模式添加");
    	$("#trade-mode .span-foot").css("display","none")
    })  
})

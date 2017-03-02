$(document).ready(function(){
	//产品品种信息导航条变换
    $("#product-type .span-foot").css("display","none")
    $("#product-type-list table a[href='#product-type-add']").each(function(i,elem){
    		$(elem).on("show.bs.tab",function(){
    			$("#product-type ul:first a:eq(1)").tab("show").text("产品品种修改");
    			$("#product-type .span-foot").css("display","block")
    		})
    });
    $("#product-type ul:first a:eq(0)").on("show.bs.tab",function(){
    	$("#product-type ul:first a:eq(1)").text("产品品种添加");
    	$("#product-type ul:first a:eq(8)").text("账户信息添加");
    	$("#product-type ul:first li").css("display","none");
    	$("#product-type ul:first li:eq(0)").css("display","block");
    	$("#product-type ul:first li:eq(1)").css("display","block");
    	$("#product-type .span-foot").css("display","none")
    })
    
    //机构渠道列表导航条变换
    $("#product-type-list table a[href='#product-type-channel']").each(function(i,elem){
    		$(elem).on("show.bs.tab",function(){
    			$("#product-type ul:first li:eq(2)").css("display","block");
    			$("#product-type ul:first a:eq(2)").tab("show");
    		})
    });
    $("#product-type ul:first a:eq(0)").on("show.bs.tab",function(){
    	   $("#product-type ul:first li:eq(1)").css("display","block");
    })
    
    //产品品种机构渠道控制配置
    $("#product-type-channel table a[href='#product-type-control']").each(function(i,elem){
    		$(elem).on("show.bs.tab",function(){
    			$("#product-type ul:first li:eq(0)").css("display","none");
    			$("#product-type ul:first li:eq(1)").css("display","none");
    			$("#product-type ul:first li:eq(2)").css("display","block");
    			$("#product-type ul:first li:eq(3)").css("display","block");
    			$("#product-type .span-foot").css("display","block")
    			$("#product-type ul:first a:eq(3)").tab("show");
    		})
    });
    
    $("#product-type ul:first li:eq(2)").click(function(){
    	        $("#product-type ul:first li:eq(0)").css("display","block");
    	        $("#product-type ul:first li:eq(1)").css("display","block");
    			$("#product-type ul:first li:eq(3)").css("display","none");
    			$("#product-type .span-foot").css("display","none")
    })
  
    //交易时段控制导航条变换
    $("#product-type-list table a[href='#deal-time-list']").each(function(i,elem){
    		$(elem).on("show.bs.tab",function(){
    			$("#product-type ul:first li:eq(1)").css("display","none");
    			$("#product-type ul:first li:eq(4)").css("display","block");
    			$("#product-type ul:first li:eq(5)").css("display","block");
    			$("#product-type ul:first a:eq(4)").tab("show");
    		})
    });
    
    //品种机构额度控制导航条变换
    $("#product-type-list table a[href='#organize-limit-control']").each(function(i,elem){
    		$(elem).on("show.bs.tab",function(){
    			$("#product-type ul:first li:eq(1)").css("display","none");
    			$("#product-type ul:first li:eq(6)").css("display","block");
    			$("#product-type ul:first a:eq(6)").tab("show");
    		})
    });
    
    //账号信息导航条变换
    $("#product-type-list table a[href='#account-message-list']").each(function(i,elem){
    		$(elem).on("show.bs.tab",function(){
    			$("#product-type ul:first li:eq(1)").css("display","none");
    			$("#product-type ul:first li:eq(7)").css("display","block");
    			$("#product-type ul:first li:eq(8)").css("display","block");
    			$("#product-type ul:first a:eq(7)").tab("show");
    		})
    });
    
    $("#account-message-add .span-foot").css("display","none")
    $("#account-message-list table a[href='#account-message-add']").each(function(i,elem){
    		$(elem).on("show.bs.tab",function(){
    			$("#product-type ul:first a:eq(8)").tab("show").text("账号信息修改");
    			$("#account-message-add .span-foot").css("display","block")
    		})
    });
    $("#product-type ul:first a:eq(7)").on("show.bs.tab",function(){
    	$("#product-type ul:first a:eq(8)").text("账户信息添加");
    	$("#account-message-add .span-foot").css("display","none")
    })
    
    //产品信息div hover
   $("#product-divide .row>div").each(function(i,elem){
   	 $(elem).on({"mouseover":function(){
   	 	$(this).find("div").css("display","block")
   	 },"mouseout":function(){
   	 	$(this).find("div").css("display","none")
   	 }})
   })
   $("#product-divide .row>div span").each(function(i,elem){
   	 $(elem).on({"mouseover":function(){
   	 	$(this).css("color","rgba(112,111,113,1)")
   	 },"mouseout":function(){
   	 	$(this).css("color","rgba(129,126,126,0.5)")
   	 }})
   })
   
   //产品信息右侧导航条变换
   $("#product-message ul:first li:eq(1)")
   $("#product-divide .row a[href='#product-list']").each(function(i,elem){
   	$(elem).on("show.bs.tab",function(){
   		$("#product-message ul:first li:eq(1)").css("display","block").tab("show");
   	})
   })
   $("#product-divide .row a[href='#big-stroage-list']").each(function(i,elem){
   	$(elem).on("show.bs.tab",function(){
   		$("#product-message ul:first li:eq(2)").css("display","block").tab("show");
   	})
   })
   $("#product-list table  a[href='#big-stroage-list']").each(function(i,elem){
   	$(elem).on("show.bs.tab",function(){
   		$("#product-message ul:first li:eq(2) a").text("大额存单修改");
   		$("#product-message ul:first li:eq(2)").css("display","block").tab("show");
   	})
   })
   $("#product-message ul:first li:eq(0)").on("show.bs.tab",function(){
   	   $("#product-message ul:first li").css("display","none");
   	   $("#product-message ul:first li:eq(0)").css("display","block");
   	   $("#product-message ul:first li:eq(2) a").text("大额存单添加");
   	   $("#product-message ul:first li:eq(4) a").text("产品账户信息添加");
   	   $("#product-account-add .span-foot").css("display","none");
   })
   
   //账户信息导航切换
   $("#product-list table a[href='#product-account-list']").each(function(i,elem){
   	$(elem).on("show.bs.tab",function(){
   		$("#product-message ul:first li:eq(3)").css("display","block").tab("show");
   		$("#product-message ul:first li:eq(4)").css("display","block");
   	})
   })
   $("#product-account-list table a[href='#product-account-add']").each(function(i,elem){
   	$(elem).on("show.bs.tab",function(){
   		$("#product-account-add .span-foot").css("display","block");
   		$("#product-message ul:first li:eq(4) a").text("产品账户信息修改").tab("show");
   	})
   })
    $("#product-message ul:first li:eq(3) a").on("show.bs.tab",function(){
   	   $("#product-message ul:first li:eq(4) a").text("产品账户信息添加");
   	   $("#product-account-add .span-foot").css("display","none");
   })
    $("#product-message ul:first li:eq(1) a").on("show.bs.tab",function(){
       $("#product-account-add .span-foot").css("display","none");
   	   $("#product-message ul:first li:eq(4) a").text("产品账户信息添加");
   	   $("#product-message ul:first li:eq(3)").css("display","none");
   	   $("#product-message ul:first li:eq(4)").css("display","none");
   })
    
    //文档信息导航切换
     $("#product-list table a[href='#product-doc-list']").each(function(i,elem){
   	$(elem).on("show.bs.tab",function(){
   		$("#product-message ul:first li:eq(5)").css("display","block").tab("show");
   		$("#product-message ul:first li:eq(6)").css("display","block");
   	})
   })
   $("#product-doc-list table a[href='#product-doc-add']").each(function(i,elem){
   	$(elem).on("show.bs.tab",function(){
   		$("#product-doc-add .span-foot").css("display","block");
   		$("#product-message ul:first li:eq(6) a").text("产品账户信息修改").tab("show");
   	})
   })
    $("#product-message ul:first li:eq(5) a").on("show.bs.tab",function(){
   	   $("#product-message ul:first li:eq(6) a").text("产品账户信息添加");
   	   $("#product-account-add .span-foot").css("display","none");
   })
    $("#product-message ul:first li:eq(1) a").on("show.bs.tab",function(){
       $("#product-doc-add .span-foot").css("display","none");
   	   $("#product-message ul:first li:eq(6) a").text("产品账户信息添加");
   	   $("#product-message ul:first li:eq(5)").css("display","none");
   	   $("#product-message ul:first li:eq(6)").css("display","none");
   })
    
 
     
   /*模态框表格头固定*/ 
   function setTable(id){
   	  var aDiv=$(id+" .table-head div");
	  var aTd=$(id+" tr:first th ");
	  $(id+" .table-head").width($(id+" tr:first").outerWidth()-1)
	   for(var i=0;i<aTd.length;i++)
	    {  if(i==aTd.length-1)
	    	{
	    		aDiv[i].style.width=aTd[i].offsetWidth-1+"px"
	    	}else{
	    		aDiv[i].style.width=aTd[i].offsetWidth+"px"
	    	}
	    	
	    }
   }
    $("#type-limit").on("shown.bs.modal",function(){ 
  	  setTable("#type-limit");
    })
    $("#price-deviate-modal").on("shown.bs.modal",function(){ 
  	  setTable("#price-deviate-modal");
    })
    $("#property-out").on("shown.bs.modal",function(){ 
  	  setTable("#property-out");
    })
    window.onresize=function(){
    	setTable("#type-limit");
    	setTable("#price-deviate-modal");
    	setTable("#property-out");
    }
    $(".table-responsive").on("scroll",function(){ 
    	$(".table-head").css("top",$(this).scrollTop());
    })
 
    $('.form_time').datetimepicker({
        language:  'fr',
        weekStart: 1,
        todayBtn:  1,
		autoclose: 1,
		todayHighlight: 1,
		startView: 1,
		minView: 0,
		maxView: 1,
		forceParse: 0
    });
     
})

$("document").ready(function(){ 
	function change(id,text){ 
		if($(id+" table a[href='"+id+"-add']").text()=="修改")
	  { 
		 $(id+" .span-foot").css("display","none")
		$(id+" table a[href='"+id+"-add']").each(function(i,elem){
	    		$(elem).on("show.bs.tab",function(){
	    			$(id+" ul:first a:eq(1)").tab("show").text(text+"修改");
	    			$(id+"  .span-foot").css("display","block")
	    		})
	    });
	    
	    $(id+" ul:first a:eq(0)").on("show.bs.tab",function(){
	    	$(id+" ul:first a:eq(1)").text(text+"添加");
	    	$(id+" .span-foot").css("display","none");
	    })
	  }else if($(id+" table a[href='"+id+"-add']").text()=="查看")
	  {
	  	$(id+" ul:first a:eq(1)").css("display","none")
		$(id+" table a[href='"+id+"-add']").each(function(i,elem){
	    		$(elem).on("show.bs.tab",function(){
	    			$(id+" ul:first a:eq(1)").css("display","block").tab("show"); 
	    		})
	    });
	    
	    $(id+" ul:first a:eq(0)").on("show.bs.tab",function(){
	    	$(id+" ul:first a:eq(1)").css("display","none")
	    })
	  }
		 
	} 
	
	var Id="#"+$(".tab-pane:first").attr("id");
	var str=$(".tab-pane:first ul:first a:eq(1)").text();
	str=str.substring(0,str.length-2);
	change(Id,str);
	
 
	//table中全选
	function getAll(id){
   		$(id).find("thead input[type='checkbox']").change(function(){
   			if($(this).prop("checked"))
   			  {
   			  	 $(id).find(" tbody input[type='checkbox']").prop("checked",true); 
   			  }else{
   			  	 $(id).find("tbody input[type='checkbox']").prop("checked",false); 
   			  }
   		})
   	    
   	 	$(id).find("tbody input[type='checkbox']").each(function(i,elem){
   		$(elem).change(function(){
   			var aCheck=$(id).find("tbody input[type='checkbox']"); 
   			var num=0;
   			if(!$(this).prop("checked"))
   			{
   			  $(id).find("thead input[type='checkbox']").attr("checked",false);
   			}
   		    for(var i=0;i<aCheck.length;i++)
   		    {
   		    	if(!$(aCheck[i]).prop("checked"))
   		    	{
   		    		break;
   		    	}else{
   		    		num++;
   		    	}
   		    }
   		    if(num==aCheck.length)
   		    {
   		    	$(id).find("thead input[type='checkbox']").prop("checked",true);
   		    }
   		})
 
   	})
    
   	}
   	$(".table").each(function(i,elem){
   		getAll(elem);
   	})
	
});
 


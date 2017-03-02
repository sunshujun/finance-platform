$(function(){
	 
	
	$(".modal .modal-header").on({"mousedown":function(ev){
		var modal=$(this).parent()[0];
		console.log(modal.offsetLeft);
		
	},"mouseup":function(){
		
	}})
})
$(function(){
	var tab = $("#actions").children().find("a");
	var content = $("#tabs").children(".tCont");
	tab.click(function(){
		var nav = $(this).attr("data-trigger-type");
		$.each(content,function(i){
			content.eq(i).removeClass("active");
			if(nav == content.eq(i).attr("data-language")){
				content.eq(i).addClass("active");
			}
		});
	});
	
});
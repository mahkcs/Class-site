$("img").on("click",function(){

if($("img").hasClass("active")){
	$("body").css("background","#005AB1");
	$(this).removeClass("active");
}else{
	$("body").css("background","#F7364F");
	$(this).addClass("active");}
})
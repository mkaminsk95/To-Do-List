//dodawanie nowej pozycji
$("input").keypress(function (event){
	
	if(event.which === 13){
		//dodawanie nowego wpisu	
		$("ul").append("<li><span><i class=\"fas fa-trash-alt\"></i></span> "+$(this).val()+"</li>");
		//czyszczenie inputu
		$(this).val("");
	}
})

//wysuwanie kosza najechaniem na pozycje
$("ul").on("mouseenter","li", function(){
	$(this).slideDown();
})

//usuwanie pozycji kliknieciem w kosz
$("ul").on("click", "span", function (event){
	$(this).parent().fadeOut(350, function(){
		$(this).remove();
	});
	event.stopPropagation();
})

//przekreślanie pozycji kliknięciem
$("ul").on("click", "li", function (){
	$(this).toggleClass("complited");
})

//chowanie/odkrywanie wpisywacza 
$(".fa-plus").click(function(){
	$("input").fadeToggle(400);
})

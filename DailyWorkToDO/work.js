$("ul").on("click", "li", function(){
    // if ($(this).css("color") === ("rgb(255, 0, 0)")) {
    //     $(this).css({
    //         color: "black",
    //         textDecoration:"none"
    //     })
    // } else {
    //     $(this).css({
    //         color: "red",
    //         textDecoration:"line-through"
    //     })
    // }
    $(this).toggleClass("fontDesign")
})

$("ul").on("click",  "span",function(){
    $(this).parent().fadeOut(500, ()=>{
        $(this).remove()
    })
})

$("input").on("keypress",function(event){
   if (event.which === 13) {
    let addTodo = $(this).val()
    $("ul").append(`<li><span>X<span/> ${addTodo}</li>`)
    $(this).val("")
   }
   
})
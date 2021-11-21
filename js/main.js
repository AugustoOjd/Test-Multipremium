


/*--------------------------animacion boton agregar al carrito----------------------------------*/

$(()=>{

    $(".addCart").click(function(){
        $(this).css("background-color", "green")
            $(".contenedor__edicionlimitada1").prepend(`
            <div class="alert alert-success" role="alert" style="position: absolute">
                Agregaste un producto al carrito!
            </div>`)
            $(".alert-success").fadeOut(2500)


    })

    $(".addCart").mouseenter(function(e){
        $(e.target).css({
            backgroundColor: "green"
        }).delay
    })

    $(".addCart").mouseleave(function(e){
        $(e.target).css({
            backgroundColor: "blue"
        })
    })

    
});


















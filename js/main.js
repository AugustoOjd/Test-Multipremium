/*--------------------------SECCION ROPA CLASICA----------------------------------*/






$(()=>{

    $(".addCart").click(function(){
        $(this).css("background-color", "green")
            $(".contenedor__edicionlimitada1").prepend(`
            <div class="alert alert-success" role="alert">
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



for (const producto of ropaClasica) {
    $("#clasica").append(`
    
                <div class="remeraEL1">
                    <img src="${producto.imgSrc}" alt="${producto.nombre}">
                </div>    
                <div class="remeraEL1__texto">  
                    <h3>${producto.nombre}</h3>
                    <div>
                        <p>$${producto.precio}</p>
                    </div>
                    <button type="button" class="btn btn-primary addCart">Agregar al carrito</button>
                </div>
    

    `)
    
}













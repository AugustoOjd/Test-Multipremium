
/*--------------cambio de ropa------------*/



$(()=>{
    $(".imgRopa2").hide()

    $(".imgRopa").mouseenter(function(e){

        let img = (e.target)
        
        $(img).fadeOut("fast", function(){
            
            $(".imgRopa2").fadeIn("fast", function(){
                
                
                $(".imgRopa2").mouseleave(function(){

                    

                    $(".imgRopa2").fadeOut("fast", function(){
                        
                        $(".imgRopa").fadeIn("fast")
                    
                    })
                
                })
            
            })
        
        })
    
    })



})




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


/*---------------------RENDER PRODUCTOS ROPA CLASICA--------------------*/
/*<img src="../assest/camisa-classic1.png" alt="" class="imgRopa2"></img>*/

for (const producto of ropaClasica) {
    $("#clasica").append(`
    
                <div class="remeraEL1">
                    <img src="${producto.imgSrc}" alt="${producto.nombre}"  class="imgRopa">
                    <img src="../assest/camisa-classic1.png" alt="" class="imgRopa2"></img>
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















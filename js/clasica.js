/*----------------------------------ARRAY ROPA CLASICA--------------------------------*/

// const ropaClasica=[
//     {
//         id: 7,
//         nombre: "Camisa uno",
//         precio: 1800,
//         imgSrc: "../assest/camisa1.jpg"
//     },
//     {
//         id: 8,
//         nombre: "Camisa dos",
//         precio: 1700,
//         imgSrc: "../assest/camisa2.jpg"
//     },
//     {
//         id: 9,
//         nombre: "Pantalon",
//         precio: 2500,
//         imgSrc: "../assest/pantalon-clasico.jpg"
//     }
// ]


$(()=>{

    const URL_LOCAL = "../products/productos.json"

    // $.get(URL_LOCAL, (response, status)=>{
    //     if (status === `success`){
    //         console.log(response)
    //         response.ropaClasica.forEach(producto => {
    //             $("#clasica").append(`
    
    //             <div class="remeraEL1">
    //                 <img src="${producto.imgSrc}" alt="${producto.nombre}"  class="imgRopa">
    //                 <img src="../assest/oferta.jpg" alt="" class="imgRopa2"></img>
    //             </div>
    //             <div class="remeraEL1__texto">  
    //                 <h3>${producto.nombre}</h3>
    //                 <div>
    //                     <p>$${producto.precio}</p>
    //                 </div>
    //                 <button type="button" class="btn btn-primary addCart">Agregar al carrito</button>
    //             </div>
    
    // `)
    //         });
    //     }

    // })

    $.ajax({
        dataType: "json",
        url: URL_LOCAL,
    }).done(function(response, status){
        if( status === `success`){
            response.ropaClasica.forEach(producto => {
                $("#clasica").append(`
        
                    <div class="remeraEL1">
                        
                            <img src="${producto.imgSrc}" alt="${producto.nombre}"  class="imgRopa">
                                <div>
                                    <img src="../assest/oferta.jpg" alt="" class="imgRopa2"></img>
                                </div>
                            
                    </div>
                    <div class="remeraEL1__texto">  
                        <h3>${producto.nombre}</h3>
                        <div>
                            <p>$${producto.precio}</p>
                        </div>
                        <button type="submit" class="btn btn-primary addCart" value="${producto.id}">Agregar al carrito</button>
                    </div>
        
        `)
            });
        }


        /*---ALERTA CUANDO AGREGAS UN PRODUCTO AL CARRITO*/

        $(".addCart").click(function(){
            $(this).css("background-color", "green")
                $(".contenedor__edicionlimitada1").prepend(`
                <div class="alert alert-success" role="alert" style="position: absolute">
                    Agregaste un producto al carrito!
                </div>`)
                $(".alert-success").fadeOut(2500)
    
    
        })
    
        /*---ANIMACION BOTON */

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

        /*---ANIMACION OFERTA ROPA CLASICA*/
        $(".imgRopa2").hide()

        

        $(".imgRopa").mouseenter(function(){

            
            $(".imgRopa2").fadeTo("fast", 0.5, function(){

                $(".imgRopa").mouseleave(function(){
                    
                    $(".imgRopa2").fadeOut(function(){

                    })
                })
            })

        })


        $(".addCart").click(()=>{
            $("#contCarrito").html((data)=>{
                
            })


        })









    })

    




})


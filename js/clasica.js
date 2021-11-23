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

    $.ajax({
        dataType: "json",
        url: URL_LOCAL,
    }).done(function(response, status){
        if( status === `success`){
            response.ropaClasica.forEach(producto => {
                $("#clasica").append(`
        
                    <div class="remeraEL1">
                        
                            <img src="${producto.imgSrc}" alt="${producto.nombre}" class="imgRopa">
                                <div>
                                    <img src="../assest/oferta.jpg" alt="" class="imgRopa2"></img>
                                </div>
                            
                    </div>
                    <div class="remeraEL1__texto">  
                        <h3>${producto.nombre}</h3>
                        <div>
                            <p>$${producto.precio}</p>
                        </div>
                        
                            <button type="submit" class="btn btn-primary addCart">Agregar al carrito</button>
                        
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

        
        
        $(".imgRopa").mouseenter((e)=>{
            
            let img1 = $(e.target).parent(".remeraEL1").children("img")
            let img2 = $(e.target).parent(".remeraEL1").children("div").children("img")
            
            
            $(img2).fadeTo("fast", 0.8, ()=>{
                
                $(img1).mouseleave(()=>{

                    $(img2).hide()
                })
                
                
            })   

        })

        

        // let cartItemCont = 0;
        $(".addCart").click( (e) =>{
            
            const img = $(e.target).parent(".remeraEL1").children("img").attr("src")
            const title = $(e.target).parent(".remeraEL1__texto").children("h3").text()
            const price = $(e.target).parent(".remeraEL1__texto").children("div").children().text()
            

            console.log(img)
            console.log(title)
            console.log(price)

            let cartItems = `
                <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    
                    <div class="col-md-4">
                    <img src="${img}" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${title}</h5>
                        <h4>${price}</h4>
                    </div>
                    
                    </div>
                </div>
                </div>
            `
            
            $("#contCarrito").append(cartItems)
        })


    })



})



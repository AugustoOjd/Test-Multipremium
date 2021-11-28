/*----------------------------------ARRAY ROPA CLASICA--------------------------------*/

const productos=[
    {
        id: 7,
        nombre: "Camisa uno",
        precio: 1800,
        imgSrc: "../assest/camisa1.jpg"
    },
    {
        id: 8,
        nombre: "Camisa dos",
        precio: 1700,
        imgSrc: "../assest/camisa2.jpg"
    },
    {
        id: 9,
        nombre: "Pantalon",
        precio: 2500,
        imgSrc: "../assest/pantalon-clasico.jpg"
    }
]

const ropaClasica = document.getElementById("clasica");





$(()=>{

    function renderProductos(){
        productos.forEach(producto => {
            ropaClasica.innerHTML += `
            <div class="remeraEL1" >
                        <img src="${producto.imgSrc}" alt="${producto.nombre}">
                            <div>
                                <img src="../assest/oferta.jpg" alt="" class="imgRopa2"></img>
                            </div>
                    </div>    
                    <div class="remeraEL1__texto" id="0">  
                        <h3>${producto.nombre}</h3>
                        <div>
                            <p>$${producto.precio}</p>
                        </div>
                        <button type="submit" class="btn btn-primary addCart" onclick="addCart(${producto.id})">Agregar al carrito</button>
                        
                    </div>
    
                    `
        });
    }
    
    renderProductos();
    
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

    
})

/*VALORACION*/

const valDatos = [
    {   
        id: 1,
        title: "Valora del 1 al 5 diseño",
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5
    },
    {   
        id: 2,
        title: "Valora del 1 al 5 javascript",
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5
    },
    {   
        id: 3,
        title: "Valora del 1 al 5 funcionalidad",
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5
    },
    {   
        id: 4,
        title: "Valora del 1 al 5 creatividad",
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5
    },
]


const questionEl = document.getElementById("question")
const box = document.getElementById("staticBackdrop")

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const e_text = document.getElementById("e_text");


const submitBtn = document.getElementById("submitBtn")

let resultado = []

let currentQuiz = 0;

loadQuiz();

function loadQuiz(){
    const currentQuizData = valDatos[currentQuiz];
    
    questionEl.innerText = currentQuizData.title;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    e_text.innerText = currentQuizData.e;


    
}

function valorRadio(){
    const valoracion = document.getElementsByClassName(`asnwer`);

    let asnwer = undefined;

    Array.from(valoracion).forEach((respuesta) => {
        if(respuesta.checked){
            asnwer = respuesta.value;
            resultado.push(asnwer)
        }
    });

    return asnwer;
}

submitBtn.addEventListener("click", (e)=>{
    e.preventDefault()
    
    const asnwer = valorRadio() 


    if(asnwer){
        
        currentQuiz++;
        if(currentQuiz < valDatos.length){
            
            loadQuiz();
        }else{
            let suma = 0;
            box.innerHTML = ""
            
            resultado.forEach(numero => {
                suma += numero++;
                if(suma <= 8){
                    box.innerHTML =`
                    <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                        <h3 class="modal-title" id="question">Resultado es: ${suma}!</h3>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                                <h3>Que lastima</h3></br>
                                
                                <img src="../assest/carita-triste.png" alt="triste" class="carita">

                        </div>
                    </div>
                    </div>
                    
                    `
                }if(suma >8 && suma <=15){
                    box.innerHTML =`
                    <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                        <h3 class="modal-title" id="question">Resultado es: ${suma}!</h3>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                                <h3>Mejoraré la proxima</h3></br>
                                
                                <img src="../assest/carita-pensando.png" alt="triste" class="carita">
                            
                        </div>
                    </div>
                    </div>
                    
                    `
                }if(suma > 15){
                    box.innerHTML =`
                    <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                        <h3 class="modal-title" id="question">Resultado es: ${suma}!</h3>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                                <h3>Muchas gracias</h3></br>
                                
                                <img src="../assest/carita-feliz.png" alt="triste" class="carita">
                                
                        </div>
                    </div>
                    </div>
                    
                    `
                }
                
            });

            console.log(suma)
        }
        
    
}

    
})


console.log(resultado)


// $(()=>{

//     const URL_LOCAL = "../products/productos.json"

//     $.ajax({
//         dataType: "json",
//         url: URL_LOCAL,
//     }).done(function(response, status){
//         if( status === `success`){
//             response.ropaClasica.forEach(producto => {
//                 $("#clasica").append(`
        
//                     <div class="remeraEL1">
                        
//                             <img src="${producto.imgSrc}" alt="${producto.nombre}" class="imgRopa">
//                                 <div>
//                                     <img src="../assest/oferta.jpg" alt="" class="imgRopa2"></img>
//                                 </div>
                            
//                     </div>
//                     <div class="remeraEL1__texto">  
//                         <h3>${producto.nombre}</h3>
//                         <div>
//                             <p>$${producto.precio}</p>
//                         </div>
                        
//                             <button type="submit" class="btn btn-primary addCart">Agregar al carrito</button>
                        
//                     </div>
        
//         `)
//             });

            
//         }


//         /*---ALERTA CUANDO AGREGAS UN PRODUCTO AL CARRITO*/

//         $(".addCart").click(function(){
//             $(this).css("background-color", "green")
//                 $(".contenedor__edicionlimitada1").prepend(`
//                 <div class="alert alert-success" role="alert" style="position: absolute">
//                     Agregaste un producto al carrito!
//                 </div>`)
//                 $(".alert-success").fadeOut(2500)
    
    
//         })
    
//         /*---ANIMACION BOTON */

//         $(".addCart").mouseenter(function(e){
//             $(e.target).css({
//                 backgroundColor: "green"
//             }).delay
//         })
    
//         $(".addCart").mouseleave(function(e){
//             $(e.target).css({
//                 backgroundColor: "blue"
//             })
//         })

//         /*---ANIMACION OFERTA ROPA CLASICA*/
        
//         $(".imgRopa2").hide()

        
        
        

        

//         // let cartItemCont = 0;
//         $(".addCart").click( (e) =>{
            
//             const img = $(e.target).parent(".remeraEL1").children("img").attr("src")
//             const title = $(e.target).parent(".remeraEL1__texto").children("h3").text()
//             const price = $(e.target).parent(".remeraEL1__texto").children("div").children().text()
            

//             console.log(img)
//             console.log(title)
//             console.log(price)

//             let cartItems = `
//                 <div class="card mb-3" style="max-width: 540px;">
//                 <div class="row g-0">
                    
//                     <div class="col-md-4">
//                     <img src="${img}" class="img-fluid rounded-start" alt="...">
//                     </div>
//                     <div class="col-md-8">
//                     <div class="card-body">
//                         <h5 class="card-title">${title}</h5>
//                         <h4>${price}</h4>
//                     </div>
                    
//                     </div>
//                 </div>
//                 </div>
//             `
            
//             $("#contCarrito").append(cartItems)
//         })


//     })



// })



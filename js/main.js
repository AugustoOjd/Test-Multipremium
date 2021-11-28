/*CART*/

const carrito = document.getElementById("contCarrito");
const subTotal = document.getElementById("subTotal");
const totalProductosCarrito = document.getElementById("totalProductos");


let cart = JSON.parse(localStorage.getItem("CART")) || [];
updatecart();

function updatecart(){
    renderCartItems();
    renderSubTotal();

    //local storage cart

    localStorage.setItem("CART", JSON.stringify(cart))

}

function addCart(id){

    if(cart.some((item)=> item.id ===id)){
        cambioNumeroUnit("plus", id)
    }else{
        const item = productos.find((producto) =>producto.id === id)

    cart.push({
        ...item,
        numeroUnidades: 1,
    })
    }

    updatecart();
}

function renderSubTotal(){
    let precioTotal = 0, totalItems = 0;

    cart.forEach(item => {
        precioTotal += item.precio * item.numeroUnidades;
        totalItems += item.numeroUnidades;
    });

    subTotal.innerHTML = `
            Subtotal (${totalItems} items): $${precioTotal}
    `

    if(totalItems >= 0){
        totalProductosCarrito.innerHTML = totalItems
    }else{
        
    }
}

function renderCartItems(){
    carrito.innerHTML = "";
    
    cart.forEach(item => {
        carrito.innerHTML += `
        <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
            <button type="button" class="btn btn-warning" onclick="borrarItem(${item.id})">Borrar</button>
            <div class="col-md-4">
            <img src="${item.imgSrc}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">${item.nombre}</h5>
                <h4>$${item.precio}</h4>
                <div><button type="button" class="btn btn-success" onclick="cambioNumeroUnit('plus', ${item.id})">+</button></div>
                <div>${item.numeroUnidades}</div>
                <div><button type="button" class="btn btn-danger" onclick="cambioNumeroUnit('minus', ${item.id})">-</button></div>
            </div>
            
            </div>
        </div>
        </div>
            
        `
    });
}

//Borrar del carrito

function borrarItem(id){

    cart = cart.filter((item)=> item.id !== id)

    updatecart();

}

//Cambiar numero de unidades

function cambioNumeroUnit(action, id){
    cart = cart.map((item)=>{

        let numeroUnidades = item.numeroUnidades;

        if(item.id ===id){
            if(action === 'plus'){
                numeroUnidades++
            }
            else if(action === 'minus' && numeroUnidades > 1){
                numeroUnidades--
            }
        }

        return{
            ...item,
            numeroUnidades,
        }

    });

    updatecart();
}

localStorage.setItem("list", JSON.stringify(cart));




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

    const URLBTC = `https://api.coinbase.com/v2/prices/BTC-USD/buy`

    $.get(URLBTC, (response, status)=>{
        if (status === `success`){
            console.log(response.data)
            $(".btcPrecio").append(`$USD ${response.data.amount}`)
        }
    })
    
    const URLETH = `https://api.coinbase.com/v2/prices/ETH-USD/buy`

    $.get(URLETH, (response, status)=>{
        if (status === `success`){
            console.log(response.data)
            $(".ethPrecio").append(`$USD ${response.data.amount}`)
        }
    })
});

/*boton para subir*/

function upPage(){

    window.scroll(0,0)

    console.log("subir pagina")
}

/*VALORACION*/

// const valDatos = [
//     {   
//         id: 1,
//         title: "Valora del 1 al 5 diseño",
//         a: 1,
//         b: 2,
//         c: 3,
//         d: 4,
//         e: 5
//     },
//     {   
//         id: 2,
//         title: "Valora del 1 al 5 javascript",
//         a: 1,
//         b: 2,
//         c: 3,
//         d: 4,
//         e: 5
//     },
//     {   
//         id: 3,
//         title: "Valora del 1 al 5 funcionalidad",
//         a: 1,
//         b: 2,
//         c: 3,
//         d: 4,
//         e: 5
//     },
//     {   
//         id: 4,
//         title: "Valora del 1 al 5 creatividad",
//         a: 1,
//         b: 2,
//         c: 3,
//         d: 4,
//         e: 5
//     },
// ]


// const questionEl = document.getElementById("question")
// const box = document.getElementById("staticBackdrop")

// const a_text = document.getElementById("a_text");
// const b_text = document.getElementById("b_text");
// const c_text = document.getElementById("c_text");
// const d_text = document.getElementById("d_text");
// const e_text = document.getElementById("e_text");


// const submitBtn = document.getElementById("submitBtn")

// let resultado = []

// let currentQuiz = 0;

// loadQuiz();

// function loadQuiz(){
//     const currentQuizData = valDatos[currentQuiz];
    
//     questionEl.innerText = currentQuizData.title;

//     a_text.innerText = currentQuizData.a;
//     b_text.innerText = currentQuizData.b;
//     c_text.innerText = currentQuizData.c;
//     d_text.innerText = currentQuizData.d;
//     e_text.innerText = currentQuizData.e;


    
// }

// function valorRadio(){
//     const valoracion = document.getElementsByClassName(`asnwer`);

//     let asnwer = undefined;

//     Array.from(valoracion).forEach((respuesta) => {
//         if(respuesta.checked){
//             asnwer = respuesta.value;
//             resultado.push(asnwer)
//         }
//     });

//     return asnwer;
// }

// submitBtn.addEventListener("click", (e)=>{
//     e.preventDefault()
    
//     const asnwer = valorRadio() 


//     if(asnwer){
        
//         currentQuiz++;
//         if(currentQuiz < valDatos.length){
            
//             loadQuiz();
//         }else{
//             let suma = 0;
//             box.innerHTML = ""
            
//             resultado.forEach(numero => {
//                 suma += numero++;
//                 if(suma <= 8){
//                     box.innerHTML =`
//                     <div class="modal-dialog">
//                     <div class="modal-content">
//                         <div class="modal-header">
//                         <h3 class="modal-title" id="question">Resultado es: ${suma}!</h3>
//                         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                         </div>
//                         <div class="modal-body">
//                                 <h3>Que lastima</h3></br>
                                
//                                 <img src="assest/carita-triste.png" alt="triste" class="carita">

//                         </div>
//                     </div>
//                     </div>
                    
//                     `
//                 }if(suma >8 && suma <=15){
//                     box.innerHTML =`
//                     <div class="modal-dialog">
//                     <div class="modal-content">
//                         <div class="modal-header">
//                         <h3 class="modal-title" id="question">Resultado es: ${suma}!</h3>
//                         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                         </div>
//                         <div class="modal-body">
//                                 <h3>Mejoraré la proxima</h3></br>
                                
//                                 <img src="assest/carita-pensando.png" alt="triste" class="carita">
                            
//                         </div>
//                     </div>
//                     </div>
                    
//                     `
//                 }if(suma > 15){
//                     box.innerHTML =`
//                     <div class="modal-dialog">
//                     <div class="modal-content">
//                         <div class="modal-header">
//                         <h3 class="modal-title" id="question">Resultado es: ${suma}!</h3>
//                         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                         </div>
//                         <div class="modal-body">
//                                 <h3>Muchas gracias</h3></br>
                                
//                                 <img src="assest/carita-feliz.png" alt="triste" class="carita">
                                
//                         </div>
//                     </div>
//                     </div>
                    
//                     `
//                 }
                
//             });

//             console.log(suma)
//         }
        
    
// }

    
// })


// console.log(resultado)

















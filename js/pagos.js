
$(()=>{

    const URLBTC = `https://api.coinbase.com/v2/prices/BTC-USD/buy`

    $.get(URLBTC, (response, status)=>{
        if (status === `success`){
            
            $(".btcPrecio").append(`$USD ${response.data.amount}`)
        }
    })
    
    const URLETH = `https://api.coinbase.com/v2/prices/ETH-USD/buy`

    $.get(URLETH, (response, status)=>{
        if (status === `success`){
            
            $(".ethPrecio").append(`$USD ${response.data.amount}`)
        }

    })

    
        $(".boxContImgBack").hide()
        $(".cardContDatos").hide()
        $(".boxContImgFront").hide()
        $(".btcPago").hide()
        $(".ethPago").hide()
        $(".qrBtc").hide()
        $(".qrEth").hide()
    
    $("#btnCCard").click(()=>{
        $(".boxContImgFront").show()
        $(".ethPago").hide()
        $(".btcPago").hide()
        $(".cardContDatos").show()
        $(".qrBtc").hide()
        $(".qrEth").hide()
        $(".boxContImgBack").hide()
    })
    $("#btnBtc").click(()=>{
        $(".boxContImgFront").hide()
        $(".ethPago").hide()
        $(".btcPago").show()
        $(".cardContDatos").hide()
        $(".qrBtc").show()
        $(".qrEth").hide()
        $(".boxContImgBack").hide()
    })
    $("#btnEth").click(()=>{
        $(".boxContImgFront").hide()
        $(".ethPago").show()
        $(".btcPago").hide()
        $(".cardContDatos").hide()
        $(".qrBtc").hide()
        $(".qrEth").show()
        $(".boxContImgBack").hide()
    })

    $("#valCcv").focus(()=>{
        
            $(".boxContImgFront").fadeOut(()=>{
                $(".boxContImgBack").fadeIn(()=>{
                    
                })
            })
    })

    $("#valNroCard").focus(()=>{
        $(".boxContImgBack").fadeOut(()=>{
            $(".boxContImgFront").fadeIn()
        })
    })

    $("#valNomCard").focus(()=>{
        $(".boxContImgBack").fadeOut(()=>{
            $(".boxContImgFront").fadeIn()
        })
    })
});

// /*metodo de pago*/

// const visaLogo = document.getElementById("visaLogo")
// const masterLogo = document.getElementById("masterLogo")
// const renderContImg = document.getElementById("renderContImg")


// const renderPagos = document.getElementById("renderDataPagos")

// const btnCCard = document.getElementById("btnCCard")
// const btnBtc = document.getElementById("btnBtc")
// const btnEth = document.getElementById("btnEth")
const form = document.getElementById("formCard")
// const btnSub = document.getElementById("btnSub")

const valNroCard = document.getElementById("valNroCard")
const valNomCard = document.getElementById("valNomCard")
const valCcv = document.getElementById("valCcv")


// btnsMetodos();
valForm();


function valForm(){
    
    form.addEventListener("click", (e)=>{
        e.preventDefault()

    /*probando*/
    
    if (valNroCard.value.length > 16 || valNroCard.value.length < 16){
        
        let errorNro = document.getElementById("errorNro")
        errorNro.innerHTML =`
            <p style="font-size: 12px; color: red;">Numero de tarjeta invalido</p>
        `
    }
    else if(valNomCard.value.length >= 30 || valNomCard.value.length <5){
        let errorNom = document.getElementById("errorNom")
        errorNom.innerHTML =`
            <p style="font-size: 12px; color: red;">Nombre invalido</p>
        `
    }
    else if(valCcv.value.length >3 || valCcv.value.length <3){
        let errorCcv = document.getElementById("errorCcv")
        errorCcv.innerHTML =`
            <p style="font-size: 12px; color: red;">Debe tener 3 digitos</p>
        `
    }else{
        alert("Felicidades compraste el productos")
    }

    })
    
}



// function btnsMetodos(){
    
//     btnBtc.addEventListener("click", ()=>{

//         renderContImg.innerHTML = `
//             <div class="btcPago">
//                 <img src="../assest/logo-btc.png.crdownload" alt="BTC">
//             </div>
//         `
//         renderPagos.innerHTML = ""

    
//     })

//     btnEth.addEventListener("click", ()=>{

//         renderContImg.innerHTML = `
//             <div class="ethPago">
//                 <img src="../assest/logo-eth.png" alt="ETH">
//             </div>
//         `

//         renderPagos.innerHTML = ""

        
    
//     })

//     btnCCard.addEventListener("click", ()=>{
        
//         renderContImg.innerHTML = `
//         <div class="boxContImgFront">
//         <img src="../assest/chip.png" alt="chip" class="imgChip">
//         <img src="../assest/visa-logo.png" alt="visa" class="imgVisa" id="visaLogo">
//         <img src="../assest/mastercard-logo.png" alt="mastercar" class="imgMaster" id="masterLogo">
//             <div class="numeroCard">
//                 <h3>Numero de Tarjeta</h3>
//                 <p>###########################</p>
//             </div>
//             <div class="datosCard">
//                 <div class="datosCardNombre">
//                     <h3>Nombre y apellido</h3>
//                         <p>Fulado de Tal</p>
//                 </div>
//                 <div class="datosCardFecha">
//                     <h3>Vencimiento</h3>
//                         <div>
//                             <p>Mes</p>
//                             <p>Año</p>
//                         </div>
//                 </div>
//             </div>
//     </div>
//         `
        
//         datosTarjeta()
//     })
    
// }

















/*-------------- prueba precio de carrito-------------------*/

/*CART*/

const carrito = document.getElementById("contCarrito");
const subTotal = document.getElementById("subTotal");
const totalProductosCarrito = document.getElementById("totalProductos");
const precioTotalCard = document.getElementById("precioTotalCard")
const precioBtc = document.getElementById("precioBtc")
const precioEth = document.getElementById("precioEth")


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

    precioTotalCard.innerHTML =`
        <span class="input-group-text">$</span>
        <span class="input-group-text">${precioTotal}</span>
        `
    

    precioBtc.innerHTML = `
    <span class="input-group-text">Btc</span>
    <span class="input-group-text">${precioTotal/12000000}</span>
    
    `

    precioEth.innerHTML = `
    <span class="input-group-text">Eth</span>
    <span class="input-group-text">${precioTotal/460799}</span>
    
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
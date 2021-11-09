// Cuenta regresiva de edicion limitada

const diaEle = document.getElementById("dias")
const horaEle = document.getElementById("horas")
const minEle = document.getElementById("minutos")
const segEle = document.getElementById("segundos")

const proximoEstreno = `1 Jan 2022`

function conteoRegresivo(){
    const fechaEstreno = new Date(proximoEstreno);
    const fechaActual = new Date();

    const totalSegundos = (fechaEstreno - fechaActual) / 1000;

    const dias = Math.floor(totalSegundos / 3600 / 24)

    const horas = Math.floor(totalSegundos / 3600) % 24;
    const minutos = Math.floor(totalSegundos / 60) % 60;
    const segundos = Math.floor(totalSegundos % 60);

    //console.log(dias, horas, minutos, segundos)

    diaEle.innerHTML = dias;
    horaEle.innerHTML = horas;
    minEle.innerHTML = minutos;
    segEle.innerHTML = segundos;
    
}

conteoRegresivo();

setInterval(conteoRegresivo, 1000)

/*------------------------- SECCION ROPA --------------------------*/

/*----------------------------- SECCION ROPA EDICION MODERNA --------------------------------------*/



//Array productos

const productos=[
    {
        id: 3,
        nombre: "Remera limi uno",
        precio: 1100,
        imgSrc: "../assest/remera-limitada.jpg"
    },
    {
        id: 4,
        nombre: "Remera limi dos",
        precio: 850,
        imgSrc: "../assest/remera-limitada2.jpg"
    },

]

const productos2=[
    {
        id: 5,
        nombre: "pantalon limi 1",
        precio: 1900,
        imgSrc: "../assest/pantalon1-edicionlimiada.jpg"
    },
    {
        id: 6,
        nombre: "pantalon limi 2",
        precio: 1500,
        imgSrc: "../assest/pantalon2-edicionlimitada.jpg" 
    }
]

const ropaLimitada = document.getElementById("catalogoLimi");
const ropaLimitada2 = document.getElementById("catalogoLimi2")
const carrito = document.getElementById("contCarrito");
const subTotal = document.getElementById("subTotal");
const totalProductosCarrito = document.getElementById("totalProductos");

function renderProductos(){
    productos.forEach(producto => {
        ropaLimitada.innerHTML += `
        <div class="remeraEL1">
                    <img src="${producto.imgSrc}" alt="${producto.nombre}">
                </div>    
                <div class="remeraEL1__texto">  
                    <h3>${producto.nombre}</h3>
                <div>
                    <p>$${producto.precio}</p>
                </div>
                    <button type="submit" class="btn btn-primary" onclick="addCart(${producto.id})">Agregar al carrito</button>
        
        </div>

                `
    });
}

function renderProductos2(){
    productos2.forEach(producto2 =>{
        ropaLimitada2.innerHTML +=`
        <div class="pantalonEL1">
                    <img src="${producto2.imgSrc}" alt="${producto2.nombre}">
                </div>    
                <div class="pantalonEL1__texto">  
                    <h3>${producto2.nombre}</h3>
                    
                    <div>
                        <p>$${producto2.precio}</p>
                    </div>
                    <button type="submit" class="btn btn-primary" onclick="addCart(${producto2.id})">Agregar al carrito</button>
        
        </div>
        `
    })
}



renderProductos();
renderProductos2();

//Array carrito

let cart =[];

//Agregar al carrito

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

/*Renderizar carrito*/

function updatecart(){
    renderCartItems();
    renderSubTotal();

}

//Calcular y renderizar el precio de productos

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


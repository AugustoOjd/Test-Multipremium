/*----------------------------- SECCION ROPA EDICION MODERNA --------------------------------------*/



//Array productos

const productos=[
    {
        id: 0,
        nombre: "Remera mujer verano",
        precio: 800,
        imgSrc: "../assest/remera1-edicionlimitada.jpg"
    },
    {
        id: 1,
        nombre: "Remera hombre verano",
        precio: 1000,
        imgSrc: "../assest/remera2-edicionlimitada.jpg"
    },
    {
        id: 2,
        nombre: "Remera casual verano",
        precio: 900,
        imgSrc: "../assest/remera3-moderno.png"
    }

]

const ropaModerna = document.getElementById("catalogoModerna");
const carrito = document.getElementById("contCarrito");
const subTotal = document.getElementById("subTotal");
const totalProductosCarrito = document.getElementById("totalProductos");

function renderProductos(){
    productos.forEach(producto => {
        ropaModerna.innerHTML += `
        <div class="remeraEL1">
                    <img src="${producto.imgSrc}" alt="${producto.nombre}">
                </div>    
                <div class="remeraEL1__texto" id="0">  
                    <h3>${producto.nombre}</h3>
                    <div>
                        <p>$${producto.precio}</p>
                    </div>
                    <button type="submit" class="btn btn-primary" onclick="addCart(${producto.id})">Agregar al carrito</button>
                    
                </div>

                `
    });
}

renderProductos();

//Array carrito

let cart = JSON.parse(localStorage.getItem("CART"));
updatecart();

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

    //local storage cart

    localStorage.setItem("CART", JSON.stringify(cart))

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

localStorage.setItem("list", JSON.stringify(cart));



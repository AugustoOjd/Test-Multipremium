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

const ropaModerna = document.getElementById("catalogoModerna")

function renderProductos(){
    productos.forEach(producto => {
        ropaModerna.innerHTML += `
        <div class="remeraEL1">
                    <img src="${producto.imgSrc}" alt="${producto.nombre}">
                </div>    
                <div class="remeraEL1__texto" id="0">  
                    <h3>${producto.nombre}</h3>
                    <div>
                        <p>${producto.precio}</p>
                    </div>
                    <button type="submit" onclick="addCart(${producto.id})">Agregar al carrito</button>
                </div>

                `
    });
}

renderProductos();

//Array carrito

let cart =[];

//Agregar al carrito

function addCart(id){
    const item = productos.find((producto) =>producto.id === id)

    console.log(item)
}
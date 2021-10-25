//Desafio y desafio complementario de la clase 4 Simulador interactivo

// const usuario = (nombre, apellido, mail, contraseña)=>{
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.mail = mail;
//     this.contraseña = contraseña;

//     nombre = prompt("Ingresa tu nombre")
//     apellido =prompt("Ingresa tu apellido")
//     mail = prompt("ingresa tu correo")
//     contraseña = prompt("ingresa tu contraseña")

//     return alert(`Gracias ${nombre} por registrarte, tu usuario es ${mail} y tu contraseña es ${contraseña}`)

    
// }

// const camisas = (camisaAzul, camisaRoja)=>{
//     this.camisaAzul = camisaAzul;
//     this.camisaRoja = camisaRoja;

//     camisaAzul = prompt("Desea comprar la camisa azul?")
//         if(camisaAzul === "si"){
//             alert("El precio de la camisa es de 30$")
//         }
//         else if(camisaAzul === "no"){
//             alert("Puedes comprar la roja que esta en descuento")
//         }
//     camisaRoja = prompt("Desea comprar la camisa roja?")
//         if(camisaRoja === "si"){
//             alert("El precio de la camisa es de 25$")
//         }
//         else if (camisaRoja === "no"){
//             alert("Gracias")
//         }

// }

// const iva = 1.21;


// const resta = (camisa2, descuento)=> camisa2 - descuento;
// const impuesto = (camisa1, envio)=> camisa1 + envio;


// console.log(resta(20,5)*iva);
// console.log(impuesto(30,10)*iva)

// usuario();
// camisas();


/*-------------------------                   Desafio de la clase numero 5                                     ----------------------*/

//Console.log("Desafio clase 5")

// class ropaModerna{
//     constructor(nombre, talle, color, precio){
//         this.nombre = nombre.toUpperCase();
//         this.talle = talle;
//         this.color = color;
//         this.precio = parseFloat(precio);
//         this.vendido = false;
//     }

//     sumarIva(){
//         this.precio = this.precio * 1.21;
//     }
// }


// class remera extends ropaModerna{
//     constructor(nombre, talle, color, precio, modelo){
//         super(nombre, talle, color, precio);
//         this.modelo = modelo;
//     }


// }

// class pantalon extends ropaModerna{
//     constructor(nombre, talle, color, precio, modelo){
//         super(nombre, talle, color, precio);
//         this.modelo = modelo;

//     }

//     Stock(){
//         console.log(`No hay stock de ${this.nombre} modelo: ${this.modelo}`)
//     }
    
// }

// const remera1 = new remera("remera manga larga", "M", "Azul", "700", "Corte Coreano")

// const pantalon1 = new pantalon("pantalon corto", "42", "Verde", "650", "Playero")

// remera1.sumarIva();
// pantalon1.Stock();


// let comprarRemera = confirm(`Desea comprar ${remera1.nombre} talle: ${remera1.talle} Color: ${remera1.color} Modelo: ${remera1.modelo}`)

// if(comprarRemera == true){
//     alert(`Compraste ${remera1.nombre} a ${remera1.precio} pesos`)
// }
// else{ 
//     alert("No compraste nada, tenemos otros productos")
// }

// let comprarPantalon = confirm(`Desea comprar ${pantalon1.nombre} talle: ${pantalon1.talle} Color: ${pantalon1.color} Modelo: ${pantalon1.modelo}`)

// if(comprarPantalon == true){
//     alert("Perdon, no hay stock disponible")
// }else{
//     alert("Adios, vuelve pronto")
// }




/*---------------------------------         DESAFIO CLASE 6 ARRAYS                  -----------------------------*/

/*---------Desafio crear un array y desafio complementario usar propiedades en el array esta en console.log-----------*/

console.log("Desafio y desafio complementario clase 6")

const edicionLimitada = [{id:1, producto: "remera1", precio: 800},
                        {id:2, producto: "campera1", precio: 1800},
                        {id:3, producto: "remera2", precio: 900},
                        {id:4, producto: "pantalon1", precio: 1400},
                        {id:5, producto: "pantalon corto1", precio: 1200}]

const barato = edicionLimitada.filter(producto => producto.precio <1000);
console.log(barato);

const campera = edicionLimitada.find(producto => producto.id === 2);
console.log(campera);

edicionLimitada.sort(function (a, b) {
    return(a.precio - b.precio);
});

console.log(edicionLimitada)

/*-----------------                   Desafio primera intrega de proyecto                         -----------*/

console.log("Primera entrega de proyecto esta usando prompt y alerts")

class ropaClasica{
    constructor(nombre, precio, modelo){
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.modelo = modelo;
    }

    sumarIva(){
        this.precio = this.precio * 1.21;
    }

    dividirCuotas(){
        this.precio = this.precio/12;
    }
}

const productoClasica = [];

productoClasica.push(new ropaClasica("Camisa manga larga", "1500","Corte europeo"));
productoClasica.push(new ropaClasica("Pantalon cuero", "2000", "Latino"));
productoClasica.push(new ropaClasica("Vestido Venecia", "1000", "Modelo italiano"));

for (const iva of productoClasica){
    iva.sumarIva();
    iva.dividirCuotas();

}


console.log(productoClasica)



alert("Ingresaste a ropa Clasica, actualmente tenemos 3 modelos para ofercerte")

//alert(`Tenemos disponible ${productoClasica[0].nombre} a ${productoClasica[0].precio}`)


let dinero = prompt("Cuanto dinero deseas gastar?")

if(dinero >= 2000 ){
    alert(`Tenemos disponible ${productoClasica[1].nombre} en 12 cuotas de ${productoClasica[1].precio}`)
}else if(dinero >= 1500){
    alert(`Tenemos disponible ${productoClasica[0].nombre} en 12 cuotas de ${productoClasica[0].precio}`)
}else if(dinero >= 1000){
    alert(`Tenemos disponible ${productoClasica[2].nombre} en 12 cuotas de ${productoClasica[2].precio}`)
}else{
    alert("Disculpe, no tenemos productos de ese precio disponible")
}

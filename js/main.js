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


//Desafio y desafio complementario de la clase 4 Simulador interactivo

const usuario = (nombre, apellido, mail, contraseña)=>{
    this.nombre = nombre;
    this.apellido = apellido;
    this.mail = mail;
    this.contraseña = contraseña;

    nombre = prompt("Ingresa tu nombre")
    apellido =prompt("Ingresa tu apellido")
    mail = prompt("ingresa tu correo")
    contraseña = prompt("ingresa tu contraseña")

    return alert(`Gracias ${nombre} por registrarte, tu usuario es ${mail} y tu contraseña es ${contraseña}`)

    
}

const camisas = (camisaAzul, camisaRoja)=>{
    this.camisaAzul = camisaAzul;
    this.camisaRoja = camisaRoja;

    camisaAzul = prompt("Desea comprar la camisa azul?")
        if(camisaAzul === "si"){
            alert("El precio de la camisa es de 30$")
        }
        else if(camisaAzul === "no"){
            alert("Puedes comprar la roja que esta en descuento")
        }
    camisaRoja = prompt("Desea comprar la camisa roja?")
        if(camisaRoja === "si"){
            alert("El precio de la camisa es de 25$")
        }
        else if (camisaRoja === "no"){
            alert("Gracias")
        }

}

const iva = 1.21;


const resta = (camisa2, descuento)=> camisa2 - descuento;
const impuesto = (camisa1, envio)=> camisa1 + envio;


console.log(resta(20,5)*iva);
console.log(impuesto(30,10)*iva)

usuario();
camisas();




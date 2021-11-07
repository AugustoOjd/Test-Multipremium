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
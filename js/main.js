
let edad = prompt("Cuantos años tienes?")
let nombre= prompt("Como te llamas?")

if(edad >= 18){
    alert(`${nombre} eres mayor de edad, puedes ingresar`)
}

else if((edad == "") || (nombre == "")){
    alert("Te faltaron datos")
}

else{
    alert(`${nombre} eres menor de edad, no puedes ingresar. Cuidate`)
}




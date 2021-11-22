/*SECCION DE INGRESO*/


const email = document.getElementById("email")
const contraseña = document.getElementById("password")
const form = document.getElementById("form")
const error = document.getElementById("error")

form.addEventListener("submit", e=>{
    let mensaje =[]
    let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

    if(!regexEmail.test(email.value)){
        mensaje.push ("Email invalido")
    }
    if(contraseña.value.length < 6){
        mensaje.push ("La constraseña es invalida")

    }
    if(mensaje.length > 0){
        e.preventDefault()
        error.innerText = mensaje.join (`
        `)
    }else{
        alert("Usuario creado correctamente")
    }
})
/*--------------------------                   SECCION DE REGISTRO                        --------------------------------*/




const nombre = document.getElementById("name")
const apellido = document.getElementById("lastName")
const email = document.getElementById("email")
const contraseña = document.getElementById("password")
const contraseña2 = document.getElementById("password2")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")
const error = document.getElementById("error")

form.addEventListener("submit", e=>{
    let mensaje =[]
    let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

    if(nombre.value === "" || nombre.value == null){
        mensaje.push ("Nombre invalido")
    }
    if(apellido.value === "" || apellido.value == null){
        mensaje.push ("Apellido invalido")
    }
    if(!regexEmail.test(email.value)){
        mensaje.push ("Email invalido")
    }
    if(contraseña.value.length < 6){
        mensaje.push ("La constraseña invalida")

    }
    if(contraseña.value.length >= 8){
        mensaje.push ("La constraseña es muy larga")

    }
    if(contraseña.value.length != contraseña2.value.length){
        mensaje.push("Las contraseñas no son iguales")
    }
    if(mensaje.length > 0){
        e.preventDefault()
        error.innerText = mensaje.join (`
        `)
    }else{
        alert("Usuario creado correctamente")
    }
    
    
});
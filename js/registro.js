/*--------------------------                   SECCION DE REGISTRO                        --------------------------------*/




const nombre = document.getElementById("name")
const apellido = document.getElementById("lastName")
const email = document.getElementById("email")
const contraseña = document.getElementById("password")
const contraseña2 = document.getElementById("password2")
const form = document.getElementById("form")
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
        mensaje.push ("Constraseña invalida")

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

/*VALORACION*/

const valDatos = [
    {   
        id: 1,
        title: "Valora del 1 al 5 diseño",
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5
    },
    {   
        id: 2,
        title: "Valora del 1 al 5 javascript",
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5
    },
    {   
        id: 3,
        title: "Valora del 1 al 5 funcionalidad",
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5
    },
    {   
        id: 4,
        title: "Valora del 1 al 5 creatividad",
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5
    },
]


const questionEl = document.getElementById("question")
const box = document.getElementById("staticBackdrop")

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const e_text = document.getElementById("e_text");


const submitBtn = document.getElementById("submitBtn")

let resultado = []

let currentQuiz = 0;

loadQuiz();

function loadQuiz(){
    const currentQuizData = valDatos[currentQuiz];
    
    questionEl.innerText = currentQuizData.title;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    e_text.innerText = currentQuizData.e;


    
}

function valorRadio(){
    const valoracion = document.getElementsByClassName(`asnwer`);

    let asnwer = undefined;

    Array.from(valoracion).forEach((respuesta) => {
        if(respuesta.checked){
            asnwer = respuesta.value;
            resultado.push(asnwer)
        }
    });

    return asnwer;
}

submitBtn.addEventListener("click", (e)=>{
    e.preventDefault()
    
    const asnwer = valorRadio() 


    if(asnwer){
        
        currentQuiz++;
        if(currentQuiz < valDatos.length){
            
            loadQuiz();
        }else{
            let suma = 0;
            box.innerHTML = ""
            
            resultado.forEach(numero => {
                suma += numero++;
                if(suma <= 8){
                    box.innerHTML =`
                    <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                        <h3 class="modal-title" id="question">Resultado es: ${suma}!</h3>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                                <h3>Que lastima</h3></br>
                                
                                <img src="../assest/carita-triste.png" alt="triste" class="carita">

                        </div>
                    </div>
                    </div>
                    
                    `
                }if(suma >8 && suma <=15){
                    box.innerHTML =`
                    <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                        <h3 class="modal-title" id="question">Resultado es: ${suma}!</h3>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                                <h3>Mejoraré la proxima</h3></br>
                                
                                <img src="../assest/carita-pensando.png" alt="triste" class="carita">
                            
                        </div>
                    </div>
                    </div>
                    
                    `
                }if(suma > 15){
                    box.innerHTML =`
                    <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                        <h3 class="modal-title" id="question">Resultado es: ${suma}!</h3>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                                <h3>Muchas gracias</h3></br>
                                
                                <img src="../assest/carita-feliz.png" alt="triste" class="carita">
                                
                        </div>
                    </div>
                    </div>
                    
                    `
                }
                
            });

            console.log(suma)
        }
        
    
}

    
})


console.log(resultado)
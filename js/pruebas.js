/*probando cosas para el proyecto*/

// function upPage(){

//     window.scroll(0,0)

//     console.log("subir pagina")
// }


/*valoracion de pagina*/

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
                                
                                <img src="assest/carita-triste.png" alt="triste" class="carita">

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
                                
                                <img src="assest/carita-pensando.png" alt="triste" class="carita">
                            
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
                                
                                <img src="assest/carita-feliz.png" alt="triste" class="carita">
                                
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



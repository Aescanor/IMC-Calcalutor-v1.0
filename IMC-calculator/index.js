// Projet Solo - 1 - Calculateur IMC :

// 1-création des variables : 
let form = document.querySelector(".form-calculator")
let sizeInput = document.querySelector("input#size")
let weightInput = document.querySelector("input#weight")
let imcInput = document.querySelector("input#imc")
let alert = document.querySelector(".text-alert")
let btn  = document.querySelector("button")

// 2-gestion du comportement par défaut du formulaire:

form.addEventListener("click", function(e){
    e.preventDefault()
    
    // 3-Regex pour les inputs :
    
    RegexpNum = /[0-9]{2,3}/g;
    
    if(sizeInput.value.match(RegexpNum)){
        sizeInput.style.backgroundColor = "green"
    }else{
        sizeInput.style.backgroundColor = "red"

    }

    if(weightInput.value.match(RegexpNum)){
        weightInput.style.backgroundColor = "green"
    }else{
        weightInput.style.backgroundColor = "red"
    }
    
    // 4-Récuperer les values des inputs : 

    let size = sizeInput.value;
    let weight = weightInput.value;

    // 5-Fonction calcul IMC :
    
    // IMC = poids en kg/taille² (en m)

    function imcCalculator(){

      let resultat = (Math.round(weight/(size*size)*10000))

      // 6-Retourner la valeur d'IMC dans un input :
      imcInput.value=(resultat)

    //   7 - Gestion du background de l'input et de du message selon  le nv IMC

    if(resultat <= 18.5){
        imcInput.style.backgroundColor ="yellow"
        alert.textContent ="Poids insuffisant et pouvant occasionner certains risques pour la santé."
    }else if(resultat >= 18.5 && resultat <= 24.9){
        imcInput.style.backgroundColor ="green"
        alert.textContent ="Poids santé qui n'augmente pas les risques pour la santé."
    }else if (resultat  >= 25 && resultat <= 29.9){
        imcInput.style.backgroundColor ="orange"
        alert.textContent ="Excès de poids pouvant occasionner certains risques pour la santé."

    }else{
        imcInput.style.backgroundColor ="red"
        alert.textContent ="Obésité, risque accru de développer certaines maladies."
    }
      
    }

    imcCalculator()
    
})

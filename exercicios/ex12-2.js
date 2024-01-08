 document.querySelector("#titulo").textContent = "Verificador de idade"
 const formulario = document.querySelector("#formulario")
const container = document.querySelector("#resposta")
 formulario.addEventListener("submit", (evento)=>{
     evento.preventDefault()

     const anoNasc = +document.querySelector("#input_nascimento").value
     let anoAtual = new Date

     const idade = +anoAtual.getFullYear() - anoNasc

     if(idade <= 0){
         alert("Erro: Valor não aceito")
     }else {

         const sexoList = document.getElementsByName("input_sexo")
         let sexo
         if (sexoList[0].checked) {
             sexo = 'masculino'
         } else {
             sexo = 'feminino'
         }

         const img = document.createElement("img")


         if( idade < 10){
             //kid
             if (sexo == "masculino")
             {
                 img.setAttribute("src", "masc-crianca.jpg")
             }else{
                 img.setAttribute("src", "fem-crianca.png")
             }
         }else if(idade < 21){
             //jovem
             if (sexo == "masculino")
             {
                 img.setAttribute("src", "masc-jovem.jpg")
             }else{
                 img.setAttribute("src", "fem-jovem.jpg")
             }
         }else if (idade < 50){
             //adulto
             if (sexo == "masculino")
             {
                 img.setAttribute("src", "#")
             }else{
                 img.setAttribute("src", "#")
             }
         }else{
             //edosa
             if (sexo == "masculino")
             {
                 img.setAttribute("src", "#")
             }else{
                 img.setAttribute("src", "#")
             }
         }
        container.innerHTML = ""
        container.appendChild(img)

         console.log(`idade: ${idade} sexo: ${sexo}`)
     }
 })
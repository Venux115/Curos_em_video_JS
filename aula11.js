const btn_aula11 = document.querySelector("#btn_aula11")
const btn_exercicio2 = document.querySelector("#btn_exercicio2")

btn_aula11.addEventListener("click", () => {
    if (document.querySelector(".lista")){
        document.querySelector(".lista").remove()
    }else {
        const lista = document.createElement("ul")
        lista.classList.add("lista")

        const titulo = criarListaTitulo("Condições")
        const item1 = criarItemLista("O que são condições",
            `<p>Condições em programação referem-se a expressões ou avaliações
                   que determinam se determinadas instruções ou blocos devem ser
                   executados. Essas expresões geralmente baseados em valores 
                   booleanos (verdadeiro ou falso).</p>
            <br>
            <p>Em JavaScript, as condições são comumente expressas usando instruções if, else if e else.
                Essas estruturas permitem que você tome decisões no seu código com base em certas condições.
            </p>
            <h4>Exemplo</h4>
            <code>
            let idade = 18
            
            if (idade >= 18) {
                console.log("Você não é maior de idade");
            }else{
                console.log("Você é maior de idade");
            }
            </code>
            <p>Neste exemplo, o bloco de código dentro do if é executado se a condição (idade >= 18) 
            for verdadeira, caso contrario, o bloco dentro de else
            é executado. Condições são fundamentai para controlar o fluxo de execução em programas.
            </p>
            `)

        lista.appendChild(titulo)
        lista.appendChild(item1)

        divResposta.appendChild(lista)
    }
})

btn_exercicio2.addEventListener("click", ()=>{
    const teste = document.querySelector("#velocidade")
    if (teste){
        document.querySelector("#pergunta").remove()
        document.querySelector("#velocidade").remove()
        document.querySelector("#calcular").remove()
        document.querySelector("#resposta").remove()
    }else {
        const exercicio = document.querySelector("#exercicio")
        const span = document.createElement("span")
        const input = document.createElement("input")
        const btn = document.createElement("button")
        const resposta = document.createElement("span")

        span.setAttribute("id", "pergunta")
        span.textContent = "Velocidade do carro: "
        input.setAttribute("type", "Number")
        input.setAttribute("id", "velocidade")
        btn.setAttribute("type", "button")
        btn.setAttribute("id", "calcular")
        btn.textContent = "Calcular"
        resposta.setAttribute("id", "resposta")


        btn.addEventListener("click", () => {

            const resposta = document.querySelector("#resposta")
            const velocidade = +document.querySelector("#velocidade").value

            resposta.innerHTML = `<br>Sua velocidade atual é de ${velocidade}km/H`
            if (velocidade > 60) {
                resposta.innerHTML += `<br>Você ultrapassou o limite de velocidade, você foi multado`
            }
            exercicio.appendChild(resposta)
        })

        exercicio.appendChild(span)
        exercicio.appendChild(input)
        exercicio.appendChild(btn)
        exercicio.appendChild(resposta)
    }

})
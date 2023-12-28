const btn_aula09 = document.querySelector("#btn_aula09")
const btn_aula10 = document.querySelector("#btn_aula10")
const btn_exercicio = document.querySelector("#btn_exercicio")


const divResposta = document.querySelector(".content")

btn_aula09.addEventListener("click", () => {
    if (document.querySelector(".lista")){
        document.querySelector(".lista").remove()
    }else {
        const lista = document.createElement("ul")
        lista.classList.add("lista")

        const titulo = criarListaTitulo("Eventos DOM")
        const item1 = criarItemLista("mouseEnter", "Quando o mouse entra em cima do elemento")
        const item2 = criarItemLista("mouseMove", "Quando o mouse se movimenta dentro do elemento")
        const item3 = criarItemLista("mouseDown", "Quando o click do mouse esta no fundo(embaixo)")
        const item4 = criarItemLista("mouseUp", "Quando o click do mouse esta no topo(em cima)")
        const item5 = criarItemLista("click", "Quando houver um click do mouse no elemento")
        const item6 = criarItemLista("mouseOut", "Quando o mouse sai do elemento")

        lista.appendChild(titulo)
        lista.appendChild(item1)
        lista.appendChild(item2)
        lista.appendChild(item3)
        lista.appendChild(item4)
        lista.appendChild(item5)
        lista.appendChild(item6)


        divResposta.appendChild(lista)
    }
})

btn_aula10.addEventListener("click", () => {

    if (document.querySelector(".lista")){
        document.querySelector(".lista").remove()
    }else {
        const lista = document.createElement("ul")
        lista.classList.add("lista")

        const titulo = criarListaTitulo("Funções")
        const item = criarItemLista("O que são funções?", "" +
            `<p>Em JavaScript, uma função é um objeto que contém um bloco de código executável. Ela pode
            ser definida usando a palavra-chave function, seguida por um nome (opcional), uma lista de parâmetros entre
            parênteses, e um bloco de código delimitado por chaves. Aqui está uma forma mais formal:</p>
            <code>// Definição formal de uma função em JavaScript<br>
            function nomeDaFuncao(parametro1, parametro2, /* ... */) {<br>
            // Bloco de código <br>
            // Pode incluir declarações, expressões e lógica de controle de fluxo <br>
            // Pode retornar um valor usando a palavra-chave "return" <br>
            } <br>
            <br>
            // Exemplo de uma função simples que retorna a soma de dois números <br>
            function soma(a, b) { <br>
            return a + b; <br>
            } <br>
            <br>

            // Chamando a função e armazenando o resultado em uma variável <br>
            var resultado = soma(5, 3);<br>
            <br>

            // Exibindo o resultado no console<br>
            console.log(resultado); // Isso imprimirá 8 no console<br>
            </code>
            <p>Neste exemplo, nomeDaFuncao é o nome da função (pode ser omitido se a função for anônima), e (parametro1,
            parametro2, /* ... */) é a lista de parâmetros que a função aceita. O bloco de código dentro das chaves
            contém as instruções que serão executadas quando a função for chamada. A palavra-chave return é usada para
            especificar o valor que a função deve retornar
</p>`)

        lista.appendChild(titulo)
        lista.appendChild(item)


        divResposta.appendChild(lista)
    }
})



btn_exercicio.addEventListener("click", () => {

    const teste = document.querySelector("#numero_1")

    if (teste) {
        document.querySelector("#numero_1").remove()
        document.querySelector("#numero_2").remove()
        document.querySelector("#somar").remove()
        document.querySelector("#resposta").remove()

    }else{
        const exercicio01 = document.querySelector("#exercicio")
        const input_01 = document.createElement("input")
        const input_02 = document.createElement("input")
        const btn = document.createElement("button")
        const span = document.createElement("span")
        input_01.setAttribute("type", "Number")
        input_02.setAttribute("type", "Number")
        input_01.setAttribute("id", "numero_1")
        input_02.setAttribute("id", "numero_2")
        btn.setAttribute("type", "button")
        btn.setAttribute("id", "somar")
        btn.textContent = "Somar"
        span.setAttribute("id", "resposta")

        btn.addEventListener("click", ()=>{
            
            const resposta = document.querySelector("#resposta")
            const num1 = document.querySelector("#numero_1")
            const num2 = document.querySelector("#numero_2")
            resposta.textContent = (somar(+num1.value, +num2.value))
        })

        exercicio01.appendChild(input_01)
        exercicio01.appendChild(input_02)
        exercicio01.appendChild(btn)
        exercicio01.appendChild(span)
    }

})

function somar(numero1, numero2)
{
    return numero1 + numero2
}

function criarItemLista(titulo, texto){
    const itemLista = document.createElement("li")
    const itemTitulo = document.createElement("h3")
    const itemTexto = document.createElement("p")

    itemTitulo.innerText = titulo
    itemTexto.innerHTML = texto

    itemLista.appendChild(itemTitulo)
    itemLista.appendChild(itemTexto)

    return itemLista
}

function criarListaTitulo(titulo){
    const itemLista = document.createElement("li")
    const itemTitulo = document.createElement("h3")


    itemTitulo.innerText = titulo


    itemLista.appendChild(itemTitulo)


    return itemLista
}
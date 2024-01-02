const btn_aula14 = document.querySelector("#btn_aula14")
btn_aula14.addEventListener("click", () => {
    if (document.querySelector(".lista")){
        document.querySelector(".lista").remove()
    }else {
        const lista = document.createElement("ul")
        lista.classList.add("lista")

        const titulo = criarListaTitulo("Repetições")
        const item1 = criarItemLista("Estruturas de repetições em JS",
            `
            

<h2>1. While</h2>
<p>O loop 'while' executa um bloco de código enquanto uma condição específica for verdadeira.</p>
<pre>
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
</pre>

<h2>2. Do...While</h2>
<p>O loop 'do...while' é semelhante ao 'while', mas executa o bloco de código uma vez antes de verificar a condição.</p>
<pre>
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);
</pre>

<h2>3. For</h2>
<p>O loop 'for' é frequentemente usado quando você sabe exatamente quantas vezes deseja iterar.</p>
<pre>
for (let i = 0; i < 5; i++) {
    console.log(i);
}
</pre>

<p>Em todos esses exemplos, o código dentro do loop será executado e imprimirá os números de 0 a 4. Espero que isso ajude! Se você tiver mais perguntas, fique à vontade para perguntar.</p>
            `)

        lista.appendChild(titulo)
        lista.appendChild(item1)


        divResposta.appendChild(lista)
    }
})
const btn_aula12 = document.querySelector("#btn_aula12")
btn_aula12.addEventListener("click", () => {
    if (document.querySelector(".lista")){
        document.querySelector(".lista").remove()
    }else {
        const lista = document.createElement("ul")
        lista.classList.add("lista")

        const titulo = criarListaTitulo("Condições part-2")
        const item1 = criarItemLista("O que são condições aninhadas?",
            `
        <p>A condição aninhada refere-se à prática de incluir uma ou mais instruções condicionais dentro do bloco de código de outra instrução condicional. Em outras palavras, é quando você tem uma estrutura condicional dentro de outra estrutura condicional. Isso é comumente encontrado em linguagens de programação que suportam estruturas de controle de fluxo, como <code>if</code>, <code>else if</code> (ou <code>elif</code> em algumas linguagens) e <code>else</code>.</p>

        <p>Por exemplo, em muitas linguagens de programação, como Python, C++, Java, entre outras, você pode ter algo assim:</p>

        <pre><code>if (condicao_externa) {
    // Bloco de código para a condição externa
    if (condicao_interna) {
        // Bloco de código para a condição interna
    } else {
        // Bloco de código para o caso contrário da condição interna
    }
} else {
    // Bloco de código para o caso contrário da condição externa
}</code></pre>

        <p>Neste exemplo, há uma condição <code>condicao_externa</code> e, se ela for verdadeira, o código dentro do primeiro bloco de <code>if</code> será executado. Dentro desse bloco, há outra condição <code>condicao_interna</code>, e dependendo se essa condição é verdadeira ou falsa, o código dentro do bloco interno do <code>if</code> ou do <code>else</code> interno será executado.</p>

        <p>O uso de condições aninhadas permite lidar com situações mais complexas e tomar decisões com base em múltiplas condições. No entanto, é importante manter o código claro e legível para facilitar a compreensão e manutenção.</p>
    \
            `)
        const item2 = criarItemLista("Condições multiplas switch",
            `
            
        <p><strong>"Switch"</strong> é uma estrutura de controle de fluxo em várias linguagens de programação, incluindo JavaScript. Ela é projetada para fornecer uma forma eficiente e estruturada de direcionar o fluxo de execução do programa com base no valor de uma expressão.</p>

        <p>A estrutura do <code>switch</code> geralmente segue este formato:</p>

        <pre><code>switch (expressao) {
    case valor1:
        // bloco de código para valor1
        break;
    case valor2:
        // bloco de código para valor2
        break;
    // ...
    default:
        // bloco de código padrão, executado se nenhum caso corresponder
}</code></pre>

        <p>Aqui estão os componentes principais:</p>

        <ul>
            <li><strong>expressao:</strong> É a expressão cujo valor é comparado com os diferentes casos.</li>
            <li><strong>case valorN:</strong> Cada <code>case</code> representa um valor específico que está sendo testado. Se o valor da expressão corresponder a um <code>case</code>, o bloco de código associado a esse <code>case</code> será executado.</li>
            <li><strong>break:</strong> É usado para sair da estrutura <code>switch</code> após um bloco de código ser executado. Sem o <code>break</code>, a execução continuará nos casos seguintes, mesmo que seus valores não correspondam à expressão.</li>
            <li><strong>default:</strong> Este é um caso opcional que é executado se nenhum dos <code>case</code> correspondentes for encontrado.</li>
        </ul>

        <p>A estrutura <code>switch</code> é particularmente útil quando há várias opções a serem consideradas com base em um único valor. Ela é uma alternativa mais limpa e eficiente em termos de desempenho do que uma sequência de instruções <code>if-else if-else</code> em certos casos.</p>
    
            `)

        lista.appendChild(titulo)
        lista.appendChild(item1)
        lista.appendChild(item2)

        divResposta.appendChild(lista)
    }
})
const btn_aula13 = document.querySelector("#btn_aula13")
btn_aula13.addEventListener("click", () => {
    if (document.querySelector(".lista")){
        document.querySelector(".lista").remove()
    }else {
        const lista = document.createElement("ul")
        lista.classList.add("lista")

        const titulo = criarListaTitulo("Repetições")
        const item1 = criarItemLista("O que são repetições?",
            `
            

<p>As estruturas de repetição, também conhecidas como laços ou loops, são um dos mecanismos mais formidáveis de algoritmos<sup><a href="https://bing.com/search?q=por+que+foram+criadas+as+estruturas+de+repeti%c3%a7%c3%b5es+em+programa%c3%a7%c3%a3o">7</a></sup>. Elas foram criadas para automatizar tarefas que seriam extremamente repetitivas e propensas a erro, caso fossem executadas por humanos<sup><a href="https://bing.com/search?q=por+que+foram+criadas+as+estruturas+de+repeti%c3%a7%c3%b5es+em+programa%c3%a7%c3%a3o">7</a></sup>. Além disso, elas nos ajudam a programar tarefas repetitivas, sem ter que fazer o mesmo código repetidas vezes, para a mesma ação<sup><a href="https://dicasdeprogramacao.com.br/estrutura-de-repeticao-para/">6</a></sup>.</p>

<p>As estruturas de repetição permitem executar mais de uma vez o mesmo comando ou conjunto de comandos, de acordo com uma condição ou com um contador<sup><a href="https://brainly.com.br/tarefa/56174603">12</a></sup>. Elas são utilizadas, por exemplo, para repetir ações semelhantes que executadas para todos os elementos de uma lista de dados, ou simplesmente para repetir um mesmo processamento até que a condição seja satisfeita<sup><a href="https://brainly.com.br/tarefa/56174603">12</a></sup>.</p>

<p>As estruturas de repetição estão muito presentes na vida profissional de uma pessoa desenvolvedora de software. Isso porque sempre precisamos trabalhar com vários tipos de listagens e a partir disso, realizamos tarefas de ordenação, filtragem e até modificação dos valores<sup><a href="https://edu.gcfglobal.org/pt/informatica-avancada/estruturas-sequenciais-condicionais-e-de-repeticao/1/">2</a></sup>. Mesmo sendo uma ferramenta tão corriqueira para o trabalho de programação, as pessoas que desenvolvem precisam ficar atentas à utilização dessas repetições, já que o mau uso pode acabar afetando o desempenho da aplicação<sup><a href="https://edu.gcfglobal.org/pt/informatica-avancada/estruturas-sequenciais-condicionais-e-de-repeticao/1/">2</a></sup>.</p>

<p>Em resumo, as estruturas de repetição são fundamentais na programação, pois permitem que um bloco de código seja executado várias vezes, economizando tempo e esforço, e tornando o código mais eficiente e fácil de manter<sup><a href="https://podprogramar.com.br/logica-de-programacao-estruturas-de-repeticao/">3</a></sup>.</p>

<h2>Origem:</h2>
<ul>
\t<li><a href="https://brainly.com.br/tarefa/57931485">Estruturas de repetição também são conhecidas como laços... - Brainly</a></li>
\t<li><a href="https://edu.gcfglobal.org/pt/informatica-avancada/estruturas-sequenciais-condicionais-e-de-repeticao/1/">Estruturas sequenciais, condicionais e de repetição</a></li>
\t<li><a href="https://podprogramar.com.br/logica-de-programacao-estruturas-de-repeticao/">Lógica de Programação - estruturas de repetição - PodProgramar</a></li>
\t<li><a href="https://blog.betrybe.com/desenvolvimento-web/estruturas-de-repeticao/">Estruturas de repetição: quais as 4 principais e quando usá-las?</a></li>
\t<li><a href="https://brainly.com.br/tarefa/56174603">As estruturas de repetição permitem executar mais de uma... - Brainly</a></li>
\t<li><a href="https://dicasdeprogramacao.com.br/estrutura-de-repeticao-para/">Estrutura de repetição PARA - { Dicas de Programação }</a></li>
\t<li><a href="https://bing.com/search?q=por+que+foram+criadas+as+estruturas+de+repeti%c3%a7%c3%b5es+em+programa%c3%a7%c3%a3o">Estruturas sequenciais, condicionais e de repetição</a></li>
\t<li><a href="http://profs.ic.uff.br/~ccaetano/aulas/PROG1_7_Estruturas_de_Repeticao.pdf">Programação de Computadores I Estruturas de Repetição</a></li>
</ul>

            `)

        lista.appendChild(titulo)
        lista.appendChild(item1)


        divResposta.appendChild(lista)
    }
})
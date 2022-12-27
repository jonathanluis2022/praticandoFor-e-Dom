
const pessoas = [ //criado um array de objetos 
    { teg: 'p', texto: 'escreva tegs' },
    { teg: 'div', texto: 'texto 2' },
    { teg: 'section', texto: ' texto 3' },
    { teg: 'footer', texto: 'texto 4' },
]

const container = document.querySelector('.container'); //buscamos onde vamos add os objetos 
const div = document.createElement('div')

for (let i = 0; i < pessoas.length; i++) { //iteração sobre eles 
    let { teg, texto } = pessoas[i]; // desestruturamos e pegamos os indices 

    let valorDasTags = document.createElement(teg); //variavel para pegar as tags 
    valorDasTags.innerText = texto; //exibimos os textos da tag

    div.appendChild(valorDasTags); //jogamos tudo la dentro da div que criamos 

}

container.appendChild(div) //depois jogamos dentro do container 


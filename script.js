//função que altera o tema
function mudarTema(){
    const temaAtual = localStorage.getItem('tema')
    let novoTema;
    if(temaAtual === 'escuro'){
        novoTema = 'claro';
    }else{
        novoTema = 'escuro';
    }

    localStorage.setItem('tema', novoTema);

    //classe do body se altera
    document.body.className = novoTema;
}

//função que aplica o tema que ta armazenado
function aplicarTema(){
    const temaSalvo = localStorage.getItem('tema') || 'claro';
    document.body.className = temaSalvo;
}

//event listener para o botao
document.getElementById('mudar-tema').addEventListener('click', mudarTema);

//quando a página carregar aplica o tema
document.addEventListener('DOMContentLoaded', aplicarTema)
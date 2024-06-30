var animacao = document.getElementById('mario');

animacao.onclick = function () {
    animacao.classList.add('Animação')
    animacao.src = 'imgs/mariopulando.png';
    const changeTime = 1500;
    const Time = 3000;

    setTimeout(() => {
        animacao.src = 'imgs/marioperdendo.png'; // Troca para a nova imagem
    }, changeTime);

    setTimeout(() => {
        animacao.classList.remove('Animação');
        animacao.style.bottom = ('-30vh');
    }, Time);

    
}
const exampleEl = document.getElementById('example')
const tooltip = new bootstrap.Tooltip(exampleEl, options)
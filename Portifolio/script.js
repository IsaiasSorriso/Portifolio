var animacao = document.getElementById('mario');

animacao.onclick = function () {
    animacao.classList.add('Animação')
    animacao.src = 'imgs/mariopulando.png';
    const changeTime = 1000;
    const Time = 2000;

    setTimeout(() => {
        animacao.src = 'imgs/marioperdendo.png'; // Troca para a nova imagem
    }, changeTime);

    setTimeout(() => {
        animacao.classList.remove('Animação');
        animacao.style.bottom = ('-30vh');
    }, Time);

    
}

document.addEventListener('DOMContentLoaded', function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })
  });
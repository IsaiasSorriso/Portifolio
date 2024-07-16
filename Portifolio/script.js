var animacao = document.getElementById('mario');
var animacao2 = document.getElementById('mario2');

animacao.onclick = function () {
    animacao.classList.add('Animação')
    animacao.src = 'imgs/mariawaking.gif';
    animacao.style.width = '100px';
    animacao.style.bottom = '5vh';
    const changeTime = 1000;
    const Time = 3000;
    const TimeFinal = 8000;

    setTimeout(() => {
        animacao.style.display = 'none'; // Troca para a nova imagem
        animacao2.classList.add('Animação2')
    }, Time);
    setTimeout(() => {
        animacao2.classList.remove('Animação2');
        animacao2.style.left='72%';
        animacao2.src = 'imgs/mariodancing.gif';
        animacao2.style.width='80px';
        animacao2.style.bottom='-94vh';
    }, TimeFinal);

    
}

document.getElementById('downloadButton').addEventListener('click', function() {
  const link = document.createElement('a');
  link.href = 'imgs/CurriculoIsaias.pdf'; // substitua pelo caminho do seu arquivo
  link.download = 'CurriculoIsaias.pdf'; // substitua pelo nome do arquivo que será baixado
  link.click();
});
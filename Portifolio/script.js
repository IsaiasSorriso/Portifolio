document.addEventListener('DOMContentLoaded', (event) => {
    
    const imageElement = document.getElementById('mario');
    // Tempo em milissegundos após o qual a imagem será trocada
    const changeTime = 1000; // 1 segundo

    setTimeout(() => {
        imageElement.src = 'mariopulando.jpg'; // Troca para a nova imagem
    }, changeTime);
});
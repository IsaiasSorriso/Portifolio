document.getElementById('downloadButton').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = '../imgs/ISAIAS-CURRICULO.pdf'; // substitua pelo caminho do seu arquivo
    link.download = 'IsaiasCurriculo.pdf'; // substitua pelo nome do arquivo que será baixado
    link.click();
  });

    
        (function() {
            emailjs.init("isaiasbelarmina123@gmail.com"); // Coloque aqui seu User ID do EmailJS
        })();

        document.getElementsByClassName("flip-card__form").addEventListener('submit', function(event) {
            event.preventDefault();

            emailjs.send("SEU_SERVICE_ID", "SEU_TEMPLATE_ID", {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value
            })
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
                console.log('FAILED...', error);
            });
        });
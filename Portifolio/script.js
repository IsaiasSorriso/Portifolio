document
  .getElementById("downloadButton")
  .addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = "../imgs/IsaiasCurriculo.pdf"; // substitua pelo caminho do seu arquivo
    link.download = "IsaiasCurriculo.pdf"; // substitua pelo nome do arquivo que será baixado
    link.click();
  });

const nome = document.getElementById('nome').value;
const mail = document.getElementById('email').value;
const message = document.getElementById('mensagem').value;
const botaoEnviar = document.getElementById('botaoEnviar');

botaoEnviar.addEventListener('click', function() {
  location
});
// botaoEnviar.addEventListener('click', function() {
//     if ( nome && mail && message ) {
//     Email.send({
//         Host: "smtp.elasticemail.com",
//         Username: "isaiasbelarmina123@gmail.com",
//         Password: "BB1C1DAD5F2350E52C4A4FDD818DF920DBD3",
//         To: "teste@gmail.com",
//         From: "isaiasbelarmina123@gmail.com",
//         Subject: `Enviando E-mail Com Javascript`,
//         Body: `Email: ${mail} \n \n ${message}`,
//       }).then(() => {
//       alert('Enviado');
//       location.reload();
//       });
// } else {
//     alert('Preencha todos os campos');
// }
// });



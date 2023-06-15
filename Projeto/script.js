function inscrever(event) {
  event.preventDefault(); // Impede o envio do formulário por padrão

  var senha = document.getElementById("password").value;
  var confirmarSenha = document.getElementById("confirmpassword").value;

  if (senha !== confirmarSenha) {
    alert("As senhas não são iguais. Por favor, digite novamente.");
    return; // Interrompe a execução da função sem limpar os dados
  }

}

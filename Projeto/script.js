function inscrever(event) {
  var senha = document.getElementById("password").value;
  var confirmarSenha = document.getElementById("confirmpassword").value;

  if (senha !== confirmarSenha) {
    event.preventDefault(); // Impede o envio do formulário quando as senhas não coincidem
    alert("As senhas não são iguais. Por favor, digite novamente.");
  }
}


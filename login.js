// ○ Ao clicar no botão "Login", as informações inseridas (e-mail e senha) devem ser validadas:
//        ■ Validação simples: garantir que ambos os campos não estejam vazios e que o campo de senha contenha 8 caracteres ou mais.
//        ■ Entrar na pagina catalogo.html

document.getElementById("loginForm").addEventListener("submit", function(event) {
 event.preventDefault(); // Evita o envio do formulário
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (email === "" || password === "") {
    alert("Preencha todos os campos");
  } else if (password.length < 8) {
    alert("A senha deve ter no mínimo 8 caracteres");
  }
  else {
    window.location.href = "catalogo.html";
  }
}
);

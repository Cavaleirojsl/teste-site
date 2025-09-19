const form = document.getElementById("loginForm");
const mensagem = document.getElementById("mensagem");

// Salvar login no navegador
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = document.getElementById("username").value;
  const senha = document.getElementById("password").value;

  if (nome && senha) {
    // Guardar no localStorage
    localStorage.setItem("usuario", nome);
    localStorage.setItem("senha", senha);

    mensagem.textContent = `Usuário ${nome} registrado com sucesso!`;
  } else {
    mensagem.textContent = "Preencha todos os campos!";
  }
});
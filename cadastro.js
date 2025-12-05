document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("cadastroForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const dataNascimento = document.getElementById("data-nascimento").value;
    const senha = document.getElementById("senha").value;
    const confirmar = document.getElementById("confirmar").value;

    // Limpar mensagens anteriores
    clearMessages();

    // Validação básica
    let hasError = false;
    const errorMessages = [];

    if (!nome || !email || !dataNascimento || !senha || !confirmar) {
      hasError = true;
      showMessage("Por favor, preencha todos os campos obrigatórios.", "error");
      return;
    }

    if (senha !== confirmar) {
      hasError = true;
      showMessage("As senhas não coincidem.", "error");
      return;
    }

    // Expressão regular corrigida
    const senhaForte = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!senhaForte.test(senha)) {
      hasError = true;
      showMessage("A senha deve conter no mínimo 8 caracteres, incluindo uma letra maiúscula, uma letra minúscula, um número e um caractere especial.", "error");
      return;
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      hasError = true;
      showMessage("Por favor, insira um email válido.", "error");
      return;
    }

    // Validação de data de nascimento (mínimo 13 anos)
    const dataNasc = new Date(dataNascimento);
    const hoje = new Date();
    const idade = hoje.getFullYear() - dataNasc.getFullYear();
    const mes = hoje.getMonth() - dataNasc.getMonth();
    
    if (mes < 0 || (mes === 0 && hoje.getDate() < dataNasc.getDate())) {
      idade--;
    }
    
    if (idade < 13) {
      hasError = true;
      showMessage("Você deve ter pelo menos 13 anos para se cadastrar.", "error");
      return;
    }

    // Verificar se email já existe no localStorage
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    const emailExistente = usuarios.find(u => u.email === email);

    if (emailExistente) {
      hasError = true;
      showMessage("Este e-mail já está cadastrado.", "error");
      return;
    }

    // Se todas as validações passarem
    if (!hasError) {
      const usuario = {
        nome: nome,
        email: email,
        dataNascimento: dataNascimento,
        senha: senha,
        dataCadastro: new Date().toISOString()
      };

      usuarios.push(usuario);
      localStorage.setItem("usuarios", JSON.stringify(usuarios));

      showMessage("Cadastro realizado com sucesso! Redirecionando para login...", "success");
      
      // Limpar formulário após 2 segundos
      setTimeout(() => {
        form.reset();
        window.location.href = "login1.html";
      }, 2000);
    }
  });

  function showMessage(message, type) {
    // Remover mensagens anteriores
    clearMessages();
    
    const messageDiv = document.createElement('div');
    messageDiv.id = 'message';
    messageDiv.textContent = message;
    messageDiv.style.padding = '10px';
    messageDiv.style.margin = '10px 0';
    messageDiv.style.borderRadius = '4px';
    messageDiv.style.textAlign = 'center';
    messageDiv.style.fontWeight = 'bold';
    
    if (type === 'error') {
      messageDiv.style.backgroundColor = '#f8d7da';
      messageDiv.style.color = '#721c24';
      messageDiv.style.border = '1px solid #f5c6cb';
    } else if (type === 'success') {
      messageDiv.style.backgroundColor = '#d4edda';
      messageDiv.style.color = '#155724';
      messageDiv.style.border = '1px solid #c3e6cb';
    }
    
    form.insertBefore(messageDiv, form.querySelector('.link-login'));
  }

  function clearMessages() {
    const existingMessage = document.getElementById('message');
    if (existingMessage) {
      existingMessage.remove();
    }
  }
});
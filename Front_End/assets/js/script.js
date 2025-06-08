function cadastrar(event) {
  event.preventDefault();
  const nome = document.getElementById("idNome").value;
  const email = document.getElementById("idEmail").value;
  const senha = document.getElementById("idSenha").value;
  const confsenha = document.getElementById("idConfSenha").value;

  localStorage.setItem("nome", nome);
  localStorage.setItem("email", email);
  localStorage.setItem("senha", senha);
  localStorage.setItem("confsenha", confsenha);

  if(senha === confsenha){
    alert("Cadastro realizado com sucesso!");
    window.location.href = "../index.html"
} else {
    alert("Cadastro não realizado")
}
}
  

function logar(event) {
  event.preventDefault();
  const email = document.getElementById("idEmail").value;
  const senha = document.getElementById("idSenha").value;

  const emailSalvo = localStorage.getItem("email");
  const senhaSalva = localStorage.getItem("senha");

  if (email === emailSalvo && senha === senhaSalva) {
    alert("Login bem-sucedido!");
    window.location.href = "assets/paginainicial.html"
  } else {
    alert("Usuário ou senha incorretos!");
  }
}

function esqueciminhasenha(event) {
  event.preventDefault();

  const novaSenha = document.getElementById("idSenhanova").value;
  const confirmarSenha = document.getElementById("idConfirmarSenhanova").value;

  if (!novaSenha || !confirmarSenha) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  if (novaSenha !== confirmarSenha) {
    alert("As senhas não coincidem.");
    return;
  }

  localStorage.setItem("senha", novaSenha);
  alert("Senha redefinida com sucesso!");
  window.location.href = "../index.html";
}

function enchentescasa(event) {
  event.preventDefault();

  const rua = document.getElementById("idRua").value;
  const numero = document.getElementById("idNumero").value;
  const estado = document.getElementById("idEstado").value;
  const cidade = document.getElementById("idCidade").value;
  const bairro = document.getElementById("idBairro").value;
  const cep = document.getElementById("idCEP").value;
  const complemento = document.getElementById("idCompl").value;

  if (!rua || !numero || !estado || !cidade || !bairro || !cep || !complemento) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  localStorage.setItem("rua", rua);
  localStorage.setItem("numero", numero);
  localStorage.setItem("estado", estado);
  localStorage.setItem("cidade", cidade);
  localStorage.setItem("bairro", bairro);
  localStorage.setItem("cep", cep);
  localStorage.setItem("complemento", complemento);

  alert("Informações recebidas com sucesso! Os dados serão enviados às autoridades.");
}

function enchentesforacasa(event) {
  event.preventDefault();

  const rua = document.getElementById("idRua").value;
  const numero = document.getElementById("idNumero").value;
  const estado = document.getElementById("idEstado").value;
  const cidade = document.getElementById("idCidade").value;
  const bairro = document.getElementById("idBairro").value;
  const zona = document.getElementById("idZona").value;
  const nivel = document.getElementById("idNivel").value;

  if (!rua || !numero || !estado || !cidade || !bairro || !zona || !nivel) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  localStorage.setItem("rua_fora", rua);
  localStorage.setItem("numero_fora", numero);
  localStorage.setItem("estado_fora", estado);
  localStorage.setItem("cidade_fora", cidade);
  localStorage.setItem("bairro_fora", bairro);
  localStorage.setItem("zona_fora", zona);
  localStorage.setItem("nivel_agua", nivel);

  alert("Informações recebidas com sucesso! Os dados serão enviados às autoridades.");
}

function salvarajuda(event) {
  event.preventDefault();
  const checkboxes = document.querySelectorAll('input[name="ajuda"]:checked');
  if (checkboxes.length === 0) {
    alert("Selecione pelo menos uma forma de ajuda.");
    return;
  }
  const tiposAjuda = Array.from(checkboxes).map(cb => cb.value);
  localStorage.setItem("ajudas_oferecidas", JSON.stringify(tiposAjuda));
  alert("Informações recebidas com sucesso! Continue sempre oferecendo ajuda.");
}

function salvardoacao(event) {
  event.preventDefault();
  const tipo = document.getElementById("idTipo").value;
  const descricao = document.getElementById("idDesc").value;
  const quantidade = document.getElementById("idQuant").value;
  const contato = document.getElementById("idContato").value;
  if (!tipo || !descricao || !quantidade || !contato) {
    alert("Por favor, preencha todos os campos da doação.");
    return;
  }
  const dadosDoacao = { tipo, descricao, quantidade, contato };
  localStorage.setItem("dados_doacao", JSON.stringify(dadosDoacao));
  alert("Informações recebidas com sucesso! Continue sempre doando a quem precisa!");
}

function salvarabrigo(event) {
  event.preventDefault();
  const nome = document.getElementById("idNomecompleto").value;
  const quant = document.getElementById("idQuantPessoas").value;
  if (!nome || !quant) {
    alert("Por favor, preencha todos os campos do abrigo.");
    return;
  }
  const necessidades = {
    necessidade: document.querySelector('input[name="necessidade"]').checked,
    medicamento: document.querySelector('input[name="medicamento"]').checked,
    animal: document.querySelector('input[name="animal"]').checked,
  };
  const dadosAbrigo = { nome, quant, ...necessidades };
  localStorage.setItem("abrigo_temp", JSON.stringify(dadosAbrigo));
  alert("Informações sobre abrigo recebidas com sucesso! Logo em breve um abrigo temporário será encontrado.");
}
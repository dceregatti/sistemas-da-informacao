import { salvarCadastro, recuperarCadastro } from "./storage.js";

let formularioInicializado = false;

function mostrarMensagem(campo, mensagem, tipo = "erro") {
  const grupo = campo.closest(".campo") || campo.parentElement;

  let aviso = grupo.querySelector(".mensagem-validacao");

  if (!aviso) {
    aviso = document.createElement("small");
    aviso.className = "mensagem-validacao";
    grupo.appendChild(aviso);
  }

  aviso.textContent = mensagem;
  aviso.hidden = !mensagem;

  aviso.classList.toggle("mensagem-erro", tipo === "erro");
  aviso.classList.toggle("mensagem-sucesso", tipo === "sucesso");

  campo.classList.toggle(
    "campo-invalido",
    tipo === "erro" && Boolean(mensagem)
  );

  campo.classList.toggle(
    "campo-valido",
    tipo === "sucesso" && Boolean(mensagem)
  );
}

function validarCampo(campo) {
  if (!campo || campo.disabled) return true;

  if (!campo.value.trim() && campo.required) {
    mostrarMensagem(campo, "Este campo é obrigatório.");
    return false;
  }

  if (campo.value && !campo.checkValidity()) {
    mostrarMensagem(
      campo,
      campo.validationMessage || "Verifique o formato informado."
    );
    return false;
  }

  if (campo.value) {
    mostrarMensagem(campo, "Preenchimento válido.", "sucesso");
  } else {
    mostrarMensagem(campo, "");
  }

  return true;
}

function validarFormulario(formulario) {
  let valido = true;

  formulario
    .querySelectorAll("input, select, textarea")
    .forEach((campo) => {
      if (!validarCampo(campo)) {
        valido = false;
      }
    });

  return valido && formulario.checkValidity();
}

function coletarDados(formulario) {
  const dados = Object.fromEntries(
    new FormData(formulario).entries()
  );

  dados.interesses = [
    ...formulario.querySelectorAll(
      'input[name="interesses"]:checked'
    )
  ].map((campo) => campo.value);

  return dados;
}

function preencherFormulario(dados) {
  if (!dados) return;

  Object.entries(dados).forEach(([nome, valor]) => {
    const campo = document.querySelector(
      `#${nome}, [name="${nome}"]`
    );

    if (!campo) return;

    if (campo.type === "checkbox") {
      campo.checked = Array.isArray(valor)
        ? valor.includes(campo.value)
        : Boolean(valor);
    } else {
      campo.value = valor;
    }
  });
}

function abrirModal() {
  const modal = document.querySelector("#confirmacao");

  if (modal && typeof modal.showModal === "function") {
    modal.showModal();
  }
}

export function initFormulario() {
  if (formularioInicializado) return;

  formularioInicializado = true;

  /* SUBMIT: funciona mesmo para formulários
     carregados posteriormente pela SPA */
  document.addEventListener("submit", (event) => {
    const formulario = event.target.closest("#form-cadastro");

    if (!formulario) return;

    event.preventDefault();

    if (!validarFormulario(formulario)) {
      const primeiroInvalido = formulario.querySelector(":invalid");
      primeiroInvalido?.focus();
      return;
    }

    salvarCadastro(coletarDados(formulario));
    abrirModal();
  });

  /* Validação durante o preenchimento */
  document.addEventListener("input", (event) => {
    const campo = event.target.closest(
      "#form-cadastro input, #form-cadastro select, #form-cadastro textarea"
    );

    if (campo) {
      validarCampo(campo);
    }
  });

  /* Validação ao sair do campo */
  document.addEventListener(
    "blur",
    (event) => {
      const campo = event.target.closest(
        "#form-cadastro input, #form-cadastro select, #form-cadastro textarea"
      );

      if (campo) {
        validarCampo(campo);
      }
    },
    true
  );

  preencherFormulario(recuperarCadastro());
}
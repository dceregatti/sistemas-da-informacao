const CHAVE_CADASTRO = 'ongEsperancaCadastro';

export function salvarCadastro(dados) {
  localStorage.setItem(CHAVE_CADASTRO, JSON.stringify(dados));
}

export function recuperarCadastro() {
  const dados = localStorage.getItem(CHAVE_CADASTRO);
  return dados ? JSON.parse(dados) : null;
}

export function limparCadastro() {
  localStorage.removeItem(CHAVE_CADASTRO);
}

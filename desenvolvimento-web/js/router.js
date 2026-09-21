let inicializado = false;

function ehRotaInterna(link) {
  if (!link || link.target === '_blank') return false;
  if (link.origin !== window.location.origin) return false;
  return /\.html$/i.test(new URL(link.href).pathname);
}

async function carregarPagina(url, adicionarHistorico = true) {
  const destino = new URL(url, window.location.href);
  const app = document.querySelector('#app');
  if (!app) return;
  app.innerHTML = '<p>Carregando...</p>';

  try {
    const resposta = await fetch(destino.href);
    if (!resposta.ok) throw new Error('Página não encontrada.');
    const html = await resposta.text();
    const documento = new DOMParser().parseFromString(html, 'text/html');
    const novoApp = documento.querySelector('#app');
    if (!novoApp) throw new Error('Área da aplicação não encontrada.');

    app.innerHTML = novoApp.innerHTML;
    if (adicionarHistorico) history.pushState({}, '', destino.href);
    document.title = documento.title || document.title;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.dispatchEvent(new CustomEvent('spa:page-loaded'));
  } catch (erro) {
    app.innerHTML = `<div class="alert alert-error" role="alert"><strong>Não foi possível carregar a página.</strong><p>${erro.message}</p></div>`;
  }
}

export function initRouter() {
  if (inicializado) return;
  inicializado = true;
  document.addEventListener('click', event => {
    const link = event.target.closest('a');
    if (!ehRotaInterna(link)) return;
    event.preventDefault();
    carregarPagina(link.href);
    const menu = document.querySelector('.menu-toggle');
    if (menu) menu.checked = false;
  });
  window.addEventListener('popstate', () => carregarPagina(window.location.href, false));
}

import { initRouter } from './router.js';
import { initFormulario } from './formulario.js';
import { initProjetos } from './templates.js';

function initMenu() {
  const botao = document.querySelector('#menu-toggle');
  const menu = document.querySelector('#menu-principal');
  if (!botao || !menu) return;

  botao.addEventListener('click', () => {
    const aberto = botao.getAttribute('aria-expanded') === 'true';
    botao.setAttribute('aria-expanded', String(!aberto));
    botao.setAttribute('aria-label', aberto ? 'Abrir menu' : 'Fechar menu');
    menu.classList.toggle('menu-aberto', !aberto);
  });

  menu.addEventListener('click', event => {
    if (event.target.closest('a')) {
      botao.setAttribute('aria-expanded', 'false');
      botao.setAttribute('aria-label', 'Abrir menu');
      menu.classList.remove('menu-aberto');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initRouter();
  initFormulario();
  initProjetos();
  initMenu();

  window.addEventListener('spa:page-loaded', () => {
    const titulo = document.querySelector('#app h1');
    titulo?.setAttribute('tabindex', '-1');
    titulo?.focus({ preventScroll: true });
  });
});

const projetos = [
  { titulo: 'Campanhas de arrecadação', categoria: 'Doação', classe: 'badge-doacao', descricao: 'Arrecadação de alimentos, roupas e materiais para famílias atendidas.' },
  { titulo: 'Apoio à comunidade', categoria: 'Comunidade', classe: 'badge-comunidade', descricao: 'Ações voltadas à inclusão, cidadania e melhoria da qualidade de vida.' },
  { titulo: 'Ações educativas', categoria: 'Voluntariado', classe: 'badge-voluntariado', descricao: 'Atividades educativas e de conscientização com participação voluntária.' }
];

export function renderProjetos() {
  const container = document.querySelector('#lista-projetos');
  if (!container) return;
  container.innerHTML = projetos.map(projeto => `
    <article>
      <span class="badge ${projeto.classe}">${projeto.categoria}</span>
      <h3>${projeto.titulo}</h3>
      <p>${projeto.descricao}</p>
    </article>
  `).join('');
}

export function initProjetos() {
  renderProjetos();
  window.addEventListener('spa:page-loaded', renderProjetos);
}

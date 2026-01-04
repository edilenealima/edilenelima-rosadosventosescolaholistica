function mostrar(id) {
  // Esconde todas as seções
  const secoes = document.querySelectorAll('.section');
  secoes.forEach(sec => sec.classList.remove('active'));

  // Mostra a seção clicada
  const ativa = document.getElementById(id);
  if (ativa) {
    ativa.classList.add('active');
  }
}


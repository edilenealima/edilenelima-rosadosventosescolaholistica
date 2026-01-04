function mostrar(id) {
  const secoes = document.querySelectorAll('.section');

  secoes.forEach(sec => {
    sec.classList.remove('active');
  });

  const ativa = document.getElementById(id);
  if (ativa) {
    ativa.classList.add('active');
  }
}


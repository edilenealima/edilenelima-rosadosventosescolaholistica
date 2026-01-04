function mostrarTela(id) {
  const telas = document.querySelectorAll('.tela');
  telas.forEach(tela => {
    tela.style.display = 'none';
    tela.classList.remove('ativa');
  });

  const telaAtiva = document.getElementById(id);
  if (telaAtiva) {
    telaAtiva.style.display = 'block';
    telaAtiva.classList.add('ativa');
  }
}

// garante que a home aparece ao abrir
document.addEventListener("DOMContentLoaded", () => {
  mostrarTela('inicio');
});

/* =========================
   CONTROLE DE TELAS
========================= */

function mostrarTela(id) {
  const telas = document.querySelectorAll('.tela');
  telas.forEach(tela => tela.classList.remove('ativa'));

  const telaAtiva = document.getElementById(id);
  if (telaAtiva) {
    telaAtiva.classList.add('ativa');
    window.scrollTo(0, 0);
  }
}

/* =========================
   TELA INICIAL PADRÃO
========================= */

document.addEventListener('DOMContentLoaded', () => {
  mostrarTela('inicio');
});

/* =========================
   SPLASH SCREEN
========================= */

window.addEventListener('load', () => {
  const splash = document.getElementById('splash');
  if (!splash) return;

  setTimeout(() => {
    splash.style.opacity = '0';
    splash.style.transition = 'opacity 0.6s ease';
    
    setTimeout(() => {
      splash.remove();
    }, 600);
  }, 2000); // tempo do splash
});

/* =========================
   BOTÃO WHATSAPP
========================= */

function abrirWhatsApp(numero, mensagem = '') {
  const texto = encodeURIComponent(mensagem);
  const link = `https://wa.me/${numero}?text=${texto}`;
  window.open(link, '_blank');
}

/* =========================
   MARCAR BOTÃO ATIVO NO MENU
========================= */

const botoesMenu = document.querySelectorAll('.menu-app button');

botoesMenu.forEach(botao => {
  botao.addEventListener('click', () => {
    botoesMenu.forEach(b => b.classList.remove('ativo'));
    botao.classList.add('ativo');
  });
});

/* =========================
   PWA – REGISTRAR SERVICE WORKER
========================= */

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('sw.js')
      .then(() => console.log('Service Worker registrado'))
      .catch(err => console.log('Erro no SW', err));
  });
}

const logoMenuMobile = document.getElementById('headermobile-menu_logo');

logoMenuMobile.addEventListener('click', () => {
    document.getElementById('headermenumobile-menu_lista').classList.toggle('hidden');
});

// Lógicas para alternar o tema claro/escuro


function atualizaTema() {
  const isDarkMode = document.getElementById('checkbox').checked;
  
  // Define os caminhos das imagens de acordo com o tema
  const imagePaths = {
    'switch-sun': isDarkMode ? '/imgs/sun.png' : '/imgs/sunlight.png', 
    'switch-moon': isDarkMode ? '/imgs/moon.png' : '/imgs/moonlight.png',
    'menu-icon': isDarkMode ? '/imgs/menu-icon-dark.png' : '/imgs/menu-icon.png',
  };

  // Atualiza as imagens de acordo com o tema
  Object.entries(imagePaths).forEach(([id, src]) => {
    const element = document.getElementById(id);
    if (element) {
      element.src = src;
    }
  });

  // Atualiza a cor dos fundos
  alteraCorDeFundo(isDarkMode);

  // Atualiza a cor dos textos
  alteraCorDoTexto(isDarkMode);

}

function alteraCorDeFundo(isDarkMode) {
  const corDeFundo = isDarkMode ? '#1E1E1E' : '#FFF';

  document.body.style.backgroundColor = corDeFundo;
  document.getElementById('header_container').style.backgroundColor = corDeFundo;
  document.getElementById('headermenumobile-menu_lista').style.backgroundColor = corDeFundo;
}

function alteraCorDoTexto(isDarkMode) {
  const corDoTexto = isDarkMode ? '#FFF' : '#000';

  document.body.style.color = corDoTexto
  document.querySelectorAll('#menu-item_text').forEach(item => {
    item.style.color = corDoTexto;
  });
}

// Adiciona o listener ao checkbox
document.getElementById('checkbox').addEventListener('change', function() {
  
  // Opcional: Salvar a preferência do usuário
  localStorage.setItem('darkMode', this.checked ? 'enabled' : 'disabled');
  
  // Atualiza o tema da página
  atualizaTema();
});

// Verifica a preferência do usuário ao carregar a página
if (localStorage.getItem('darkMode') === 'enabled') {
  document.getElementById('checkbox').checked = true;
  document.getElementById('header_container').classList.add('darkmode-bg');

}

// Atualiza o tema da página ao carregar
atualizaTema();

// Slider lógica
var slideIndex = 1;
mostrarSlides(slideIndex);

function mudarSlide(n) {
  mostrarSlides(slideIndex += n);
}

function mostrarSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide-container"); // Ajuste para apontar para o contêiner
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; // Esconde todos os contêineres de slides
  }
  slides[slideIndex-1].style.display = "block"; // Mostra o contêiner do slide atual
}
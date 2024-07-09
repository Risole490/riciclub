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
    'github-icon': isDarkMode ? '/imgs/githubdark.png' : '/imgs/githublight.png',
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
  const corDeFundoSobreMim = isDarkMode ? '#1E1E1E' : '#FFF';

  document.body.style.backgroundColor = corDeFundo;
  document.getElementById('header_container').style.backgroundColor = corDeFundo;
  document.getElementById('headermenumobile-menu_lista').style.backgroundColor = corDeFundo;
  document.getElementById('sobremim-container').style.backgroundColor = corDeFundoSobreMim;
}

function alteraCorDoTexto(isDarkMode) {
  const corDoTexto = isDarkMode ? '#FFF' : '#000';
  const corDoTextoSobreMim = isDarkMode ? '#f4f3ee' : '#000';
  const corDosTitulosELinhas = isDarkMode ? '#fbfefb' : '#000';

  
  document.querySelectorAll('#contato-text').forEach(item => {
    item.style.color = corDoTexto;
  });

  document.querySelectorAll('#menu-item_text').forEach(item => {
    item.style.color = corDoTexto;
  });

  document.querySelectorAll('#text-body').forEach(item => {
    item.style.color = corDoTexto;
  });

  document.querySelectorAll('#text-sobremim').forEach(item => {
    item.style.color = corDoTextoSobreMim;
  });

  document.querySelectorAll('#hrs').forEach(item => {
    item.style.backgroundColor = corDosTitulosELinhas;
    item.style.borderColor = corDosTitulosELinhas;
  });

  document.querySelectorAll('#project-title').forEach(item => {
    item.style.color = corDosTitulosELinhas;
  });

  document.querySelectorAll('#project-link').forEach(item => {
    item.style.color = corDoTexto;
    item.style.borderColor = corDosTitulosELinhas;
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
const logoMenuMobile = document.getElementById('headermobile-menu_logo');

logoMenuMobile.addEventListener('click', () => {
    document.getElementById('headermenumobile-menu_lista').classList.toggle('hidden');
});

// JavaScript
document.getElementById('checkbox').addEventListener('change', function() {
    document.body.classList.toggle('dark-mode');
    
    // Opcional: Salvar a preferência do usuário
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', this.checked ? 'enabled' : 'disabled');

    if (isDarkMode) {
      document.getElementById('switch-sun').src = '/imgs/sun.png';
      document.getElementById('switch-moon').src = '/imgs/moon.png';
      document.getElementById('menu-icon').src = '/imgs/menu-icon-dark.png';
    } else {
      document.getElementById('switch-sun').src = '/imgs/sunlight.png';
      document.getElementById('switch-moon').src = '/imgs/moonlight.png';
      document.getElementById('menu-icon').src = '/imgs/menu-icon.png';
    }

  });
  
  // Opcional: Verificar a preferência do usuário ao carregar a página
  if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    document.getElementById('checkbox').checked = true;

    const isDarkMode = document.body.classList.contains('dark-mode');

    if (isDarkMode) {
      document.getElementById('switch-sun').src = '/imgs/sun.png';
      document.getElementById('switch-moon').src = '/imgs/moon.png';
      document.getElementById('menu-icon').src = '/imgs/menu-icon-dark.png';
    } else {
      document.getElementById('switch-sun').src = '/imgs/sunlight.png';
      document.getElementById('switch-moon').src = '/imgs/moonlight.png';
      document.getElementById('menu-icon').src = '/imgs/menu-icon.png';
    }
  }
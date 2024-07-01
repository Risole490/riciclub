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
  });
  
  // Opcional: Verificar a preferência do usuário ao carregar a página
  if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    document.getElementById('checkbox').checked = true;
  }
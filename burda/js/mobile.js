const toggleButton = document.getElementById('toggleButton');
    const contentToToggle = document.querySelector('ul');
    const menu = document.querySelector('.menu');
    
    let isMenuOpen = false;
    
    function toggleMenu() {
      isMenuOpen = !isMenuOpen;
    
      if (isMenuOpen) {
        menu.classList.add('open');
        menu.classList.remove('close'); 
        contentToToggle.classList.add('show');
      } else {
        menu.classList.remove('open');
        menu.classList.add('close');
        contentToToggle.classList.remove('show');
      }
    }
    toggleButton.addEventListener('click', toggleMenu);
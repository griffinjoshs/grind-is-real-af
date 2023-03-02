// Function to toggle between light and dark mode
// toggle color modes
// window.onload = () => { 
    const toggleBgColor = document.querySelector('#toggle-bgColor');

    const storedTheme = localStorage.getItem('theme');
    
    const setTheme = (theme) => {
    document.documentElement.setAttribute('data-bs-theme', theme);
    localStorage.setItem('theme', theme);
    }
    
    
        const themeChanger = () => {
            if (toggleBgColor.checked) {
                setTheme('dark');
                document.documentElement.style.setProperty('--main-color', 'black');
                document.documentElement.style.setProperty('--second-color', '#212529');
              } else {
                setTheme('light');
                document.documentElement.style.setProperty('--main-color', 'white');
                document.documentElement.style.setProperty('--second-color', '#f8f9fa');
                
              }
        }
    
        toggleBgColor.addEventListener('change', themeChanger)
      
    
    if (storedTheme) {
    document.documentElement.setAttribute('data-bs-theme', storedTheme);
    toggleBgColor.checked = storedTheme === 'dark';
    }
    // }
    
    themeChanger()
    
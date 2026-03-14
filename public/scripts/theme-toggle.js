(function() {
  const theme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = theme || (systemPrefersDark ? 'dark' : 'light');
  
  document.documentElement.classList.toggle('dark', initialTheme === 'dark');
  
  window.toggleTheme = function() {
    const currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', newTheme);
  };
})();

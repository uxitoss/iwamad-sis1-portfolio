const btn = document.getElementById('theme-toggle');
const root = document.documentElement;

if (localStorage.getItem('theme') === 'light') {
  root.dataset.theme = 'light';
}

btn.addEventListener('click', () => {
  const isLight = root.dataset.theme === 'light';

  if (isLight) {
    delete root.dataset.theme;     
    localStorage.setItem('theme', 'dark');
  } else {
    root.dataset.theme = 'light';
    localStorage.setItem('theme', 'light');
  }
});
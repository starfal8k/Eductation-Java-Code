// theme.js

let lightTheme = true;

// Проверяем localStorage на наличие сохраненной темы
if(localStorage.getItem('theme') === 'dark') {
    lightTheme = false;
}

function setTheme() {
    const pageStyle = document.getElementById('pageStyle');
    
    if (lightTheme) {
        pageStyle.href = 'light-mode.css';
    } else {
        pageStyle.href = 'dark-mode.css';
    }
}

function toggleTheme() {
    lightTheme = !lightTheme;
    localStorage.setItem('theme', lightTheme ? 'light' : 'dark');
    setTheme();
}

// Вызываем функцию для установки темы при загрузке страницы
setTheme();
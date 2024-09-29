function toggleTheme() {
    const body = document.body;
    const themeToggle = document.getElementById('theme-toggle');
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
      themeToggle.classList.remove('fa-moon');
      themeToggle.classList.add('fa-sun');
    } else {
      themeToggle.classList.remove('fa-sun');
      themeToggle.classList.add('fa-moon');
    }
  }
  
  function showPhoneNumber() {
    alert("Номер телефона: +7 (123) 456-7890");
  }

  function copyEmail() {
    const email = "lina21sd@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      alert("Email скопирован в буфер обмена!");
    }).catch((err) => {
      alert("Ошибка копирования email: " + err);
    });
  }
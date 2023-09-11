

const news = [
    {
      title: "Elon Musk quiere demandar una ONG por acusarlo de antisemita y hacerlo perder dinero",
      category: "Negocios",
      date: "5 de septiembre 2023 ",
      content: "El empresario -dueño de la red social X- aseguró que los dichos en su contra impactaron en los ingresos de la plataforma.",
      imgSrc: "./assets/elon-musk.webp"
    },
    {
      title: "Logitech renueva su clásico K380, el teclado inalámbrico de tres cabezas",
      category: "Tecnologia",
      date: "6 de septiembre de 2023",
      content: "También presentó un nuevo mouse Pebble, que al igual que el teclado puede vincularse a tres dispositivos en simultáneo",
      imgSrc: "./assets/logi.avif"
    },
    {
      title: "Messi, candidato al Balón de Oro: los argentinos en carrera y todos los nominados",
      category: "Deportes",
      date: "2023-06-13",
      content: "La Pulga, que ya lo ganó en siete oportunidades, está en la nómina de 30 futbolistas de la revista France Football. Dibu Martínez, Julián Álvarez y Lautaro Martínez, los compatriotas en la lista. Neymar y Cristiano Ronaldo quedaron afuera.",
      imgSrc: "./assets/lionel-messi_862x485.webp"
    },
    {
        title: "Los jugadores de Genshin Impact no aguantan más y comienzan un ataque a los desarrolladores con un 'review bombing' que también afecta a Honkai: Star Rail",
        category: "Entretenimiento",
        date: "06-09-2023",
        content: "El cabreo de la comunidad ha ido aumentando a lo largo de los últimos meses, y estalló por culpa de una filtración sobre el próximo aniversario del juego",
        imgSrc: "./assets/genshin.jpeg"
      },
      {
        title: "La sorpresa de Scaloni en la última práctica de la Selección Argentina antes del debut con Ecuador",
        category: "Deportes",
        date: "06-09-2023",
        content: "Los campeones del mundo, con Messi entre los titulares y la duda de Lautaro Martínez o Julián Álvarez, comenzarán el camino rumbo al Mundial 2026.",
        imgSrc: "./assets/scarloni.webp"
      },
      {
        title: "Starfield será el paraíso de los modders: permitirá crear planetas",
        category: "Entretenimiento",
        date: "30 de agosto de 2023",
        content: "El título de Bethesda Game Studios, que se comercializará el próximo 6 de septiembre, promete herramientas suculentas para la creación de mods.",
        imgSrc: "./assets/starfiel.avif"
      },
      {
        title: "Bethesda podría revelar el juego de Indiana Jones en 2024, según insinúa Todd Howard",
        category: "Entretenimiento",
        date: "6/9/2023",
        content: "Todd Howard, director de Bethesda, deja caer que el juego de Indiana Jones de MachineGames se dejará ver el año que viene. Lleva anunciado desde 2021.",
        imgSrc: "./assets/indiana.webp"
      },
      {
        title: "Presentaron a Colorpik, el marcador universal: tiene 16 millones de colores en un solo estuche",
        category: "Tecnologia",
        date: "5 de septiembre de 2023",
        content: "Este marcador tiene cartuchos de tinta en su interior, que se pueden combinar a voluntad para hacerlo pintar con determinado color, y luego cambiar a otro",
        imgSrc: "./assets/lapiz.avif"
      },
  ];


  
  const newsContainer = document.querySelector('.containerNews');
  const favoritesContainer = document.querySelector('.favorite-news-list');
  


let favoriteNews = JSON.parse(localStorage.getItem('favoriteNews')) || [];

function saveFavoriteNews() {
    localStorage.setItem('favoriteNews', JSON.stringify(favoriteNews));
}

function loadNews() {
    newsContainer.innerHTML = '';

    news.forEach(newsItem => {
        const newsElement = document.createElement('div');
        newsElement.classList.add('news-article');
        newsElement.innerHTML = `
            <img src="${newsItem.imgSrc}" alt="${newsItem.title}">
            <h3>${newsItem.title}</h3>
            <p>${newsItem.content}</p>
            <button onclick="addToFavorites('${newsItem.title}')">Agregar a Favoritos</button>
        `;
        newsContainer.appendChild(newsElement);
    });
}

function loadFavoriteNews() {
    favoritesContainer.innerHTML = '';

    favoriteNews.forEach(news => {
        const favoriteNewsItem = document.createElement('div');
        favoriteNewsItem.classList.add('favorite-news-item');
        favoriteNewsItem.innerHTML = `
            <img src="${news.imgSrc}" alt="${news.title}">
            <h3>${news.title}</h3>
            <p>${news.content}</p>
            <button onclick="removeFromFavorites('${news.title}')">Eliminar</button>
        `;

        favoritesContainer.appendChild(favoriteNewsItem);
    });
}

function addToFavorites(title) {
    const selectedNews = news.find(item => item.title === title);


    const isDuplicate = favoriteNews.some(news => news.title === title);

    if (selectedNews && !isDuplicate) {
        favoriteNews.push(selectedNews);
        saveFavoriteNews();
        loadFavoriteNews();
    }
}

function removeFromFavorites(title) {
    favoriteNews = favoriteNews.filter(item => item.title !== title);
    saveFavoriteNews();
    loadFavoriteNews();
}

function filterNews(category) {
  const container = document.querySelector('.containerNews');
  container.innerHTML = '';

  const filteredNews = category === 'all' ? news : news.filter(item => item.category === category);

  filteredNews.forEach(newsItem => {
      const newsElement = document.createElement('div');
      newsElement.classList.add('news-article');
      newsElement.innerHTML = `
          <img src="${newsItem.imgSrc}" alt="${newsItem.title}">
          <h3>${newsItem.title}</h3>
          <p>${newsItem.content}</p>
          <button onclick="addToFavorites('${newsItem.title}')">Agregar a Favoritos</button>
      `;
      container.appendChild(newsElement);
  });
}



loadNews();
loadFavoriteNews();

  


































function validateForm(event) {
    event.preventDefault(); 


    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
    const successMessage = document.getElementById('successMessage');

    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
    successMessage.textContent = '';

  
    if (name === '') {
        nameError.textContent = 'Por favor, ingresa tu nombre.';
        return; 
    }

    
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.match(emailPattern)) {
        emailError.textContent = 'Por favor, ingresa un correo electrónico válido.';
        return;
    }


    if (message === '') {
        messageError.textContent = 'Por favor, ingresa tu mensaje.';
        return;
    }


    successMessage.textContent = 'Mensaje enviado con éxito!';

  
    document.getElementById('contactForm').reset();
}

const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', validateForm);


document.addEventListener('DOMContentLoaded', function() {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const menu = document.querySelector('.menu');

  hamburgerMenu.addEventListener('click', function() {
      menu.classList.toggle('active');
  });
});



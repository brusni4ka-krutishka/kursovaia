document.getElementById('head').innerHTML = `<meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <link rel="stylesheet" href="./css/styles.css" />
    <link rel="stylesheet" href="./css/reset.css" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Коктейль-бар</title>`;

document.getElementById('header').innerHTML = `<div class="head_container">
        <img src="./img/logo.png" alt="" id="logo" />
        <nav id="nav_bar">
          <ul>
            <li><a href="index.html">Главная</a></li>
            <li><a href="menu.html">Меню</a></li>
            <li><a href="About.html">О нас</a></li>
            <li><a href="Contacts.html">Контакты</a></li>
            <li><a href="Search.html">Поиск</a></li>
          </ul>
        </nav>
      </div>`;

document.getElementById('footer').innerHTML = `<div id="foot_container">
        <div class="container1">
          <p>Адрес: Бали, Индонезия</p>
          <br />
          <p>Режим работы: круглосуточно</p>
          <br />
          <p>Телефон: +(62-21) 522-29-12</p>
        </div>
        <div class="container2">
          <h4>Подписывайтесь на нас!</h4>
          <br />
          <ul class="podpiski">
            <li>
              <a href="#">
                <img src="../img/инст.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="../img/facebook.svg" alt="" srcset="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="../img/vk.svg" alt="" srcset="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="../img/ok.svg" alt="" srcset="" />
              </a>
            </li>
          </ul>
        </div>
      </div>`;

// async function getResponse() {
//   let response = await fetch('cocktails.json');
//   let content = await response.json();
//   content = content.splice(0, 10);
//   for (key in content) {
//     console.log(content[key]);
//   }
// }
// getResponse();

let content, filtered, radioButtonArray, isCheked;

function getResponse() {
  let page = window.location.pathname.split('/').pop();

  switch (page) {
    case 'koktail.html':
      request(`https://api.npoint.io/1316454332ee5e08f86d`, 1);
      break;
    case 'zakuski.html':
      request(`https://api.npoint.io/2d7924c95f8fdc00376d`, 2);
      break;
    case 'desert.html':
      request(`https://api.npoint.io/cd8bc0116679705d3efa`, 2);
      break;
    default:
      break;
  }
  //Асинхронная ф-ция, отправляет запрос и получает ответ

  async function request(ref, num) {
    let response = await fetch(ref);
    content = await response.json(); //Преобразовывает ответ сервера в JSON
    num === 1 ? Addcocktails(content) : Addmeal(content);
  }
}
getResponse();

function refresh() {
  isCheked = document.querySelector(`.filterOn`).checked;
  radioButtonArray = [...document.getElementsByClassName('radio')];
  filtered = radioButtonArray.filter((item) => item.checked);

  document.getElementById('main').innerHTML = '';
  Addcocktails(
    isCheked
      ? content.filter((item) => item.alcohol == filtered[0].value)
      : content
  );
  radioButtonArray.map((item) =>
    isCheked
      ? item.removeAttribute('disabled')
      : item.setAttribute('disabled', 'disabled')
  );
}

function Addcocktails(jsonresp) {
  document.getElementById('main').innerHTML = ``;
  jsonresp.map((item) => {
    document.getElementById('main').innerHTML += `
     <div class="menu_cocktails">
     <div class="menu_zakuski">
          <p class="names">${item.name}</p>
          <div class="zakuski_photo">
            <img src="${item.imgsrc}" class="koktail_eda" />
            <div class="description">
              <p class="cost">Цена: ${item.cost}</p>
              <div class="line"></div>
              <p class="cost" id="weight">Объем: ${item.volume}</p>
              <div class="line"></div>
            </div>
          </div>
          <p class="text_zakuski">
            ${item.description}
          </p>
        </div>
      </div>      

    `;
  });
}

function Addmeal(jsonresp) {
  jsonresp.map((item) => {
    document.getElementById('main').innerHTML += `
     <div class="menu_zakuski">
        <p class="names">${item.name}</p>
        <div class="zakuski_photo">
          <img src="${item.imgsrc}" class="photo_eda" />
          <div class="description">
            <p class="cost">Цена: ${item.cost}</p>
            <div class="line"></div>
            <p class="cost" id="weight">Вес: ${item.weight}</p>
            <div class="line"></div>
          </div>
        </div>
        <p class="text_zakuski">
          ${item.description}
        </p>
      </div>

    `;
  });
}

function onEntry(entry) {
  entry.map((change) => {
    change.isIntersecting
      ? change.target.classList.add('element-show')
      : change.target.classList.remove('element-show');
  });
}

let observer = new IntersectionObserver(onEntry, { threshold: [0.2] });
let elements = document.querySelectorAll(
  '.human, .portfolio,.menu_button,.menu_img,.menu_about, .abob, .inner_text, .containt'
);

for (let elm of elements) {
  observer.observe(elm);
}

// Прятающееся верхнее меню
let currentScroll = 0,
  element = document.getElementById('header').classList;

window.addEventListener('scroll', (e) => {
  scrollY >= 100 && currentScroll < scrollY
    ? element.add('header_unshown')
    : element.remove('header_unshown');
  currentScroll = scrollY;
});

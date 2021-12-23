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
  }

  async function request(ref, num) {
    let response = await fetch(ref);
    content = await response.json();
    num === 1 ? Addcocktails(content) : Addmeal(content);
  }
}
getResponse();

function refresh() {
  isCheked = document.querySelector(`.filterOn`).checked;
  radioButtonArray = Array.from(document.getElementsByClassName('radio'));
  filtered = radioButtonArray.filter((item) => item.checked);

  document.getElementById('main').innerHTML = '';
  isCheked
    ? (() => {
        Addcocktails(
          content.filter((item) => item.alcohol == filtered[0].value)
        );
        radioButtonArray.map((item) => item.removeAttribute('disabled'));
      })()
    : (() => {
        Addcocktails(content);
        radioButtonArray.map((item) =>
          item.setAttribute('disabled', 'disabled')
        );
      })();
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
              <div>&nbsp;</div>
              <p class="cost">Цена: ${item.cost}</p>
              <div class="line"></div>
              <div>&nbsp;</div>
              <p class="cost" id="weight">Объем: ${item.volume}</p>
              <div>&nbsp;</div>
              <div class="line"></div>
              <div>&nbsp;</div>
            </div>
          </div>
          <p class="text_zakuski">
            ${item.description}
          </p>
        </div>
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
            <div>&nbsp;</div>
            <p class="cost">Цена: ${item.cost}</p>
            <div class="line"></div>
            <div>&nbsp;</div>
            <p class="cost" id="weight">Вес: ${item.weight}</p>
            <div>&nbsp;</div>
            <div class="line"></div>
            <div>&nbsp;</div>
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
  entry.forEach((change) => {
    change.isIntersecting
      ? change.target.classList.add('element-show')
      : change.target.classList.remove('element-show');
  });
}

let observer = new IntersectionObserver(onEntry, { threshold: [0.3] });
let elements = document.querySelectorAll('.human, .portfolio');

for (let elm of elements) {
  observer.observe(elm);
}

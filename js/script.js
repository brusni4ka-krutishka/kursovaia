function getResponse() {
  let page = window.location.pathname.split('/').pop();

  switch (page) {
    case 'koktail.html':
      koktails();
  }

  async function koktails() {
    let response = await fetch(`https://api.npoint.io/1316454332ee5e08f86d`);
    let content = await response.json();
    main(content);
  }
}
getResponse();

function main(jsonresp) {
  jsonresp.map((item) => {
    document.getElementById('main').innerHTML += `
     <div class="menu_main">
     <div class="menu_zakuski">
          <p class="names">${item.name}</p>
          <div class="zakuski_photo">
            <img src="${item.imgsrc}" class="koktail_eda" />
            <div class="description">
              <div>&nbsp;</div>
              <p class="cost">Цена: ${item.cost}</p>
              <div class="line"></div>
              <div>&nbsp;</div>
              <p class="cost">Размер порции</p>
              <p class="cost" id="weight">Вес: 320г</p>
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

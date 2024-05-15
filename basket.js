function addBask(itemId, title, price) {
    const json = {
        "id": itemId,
        "title": title,
        "price": price
    };
    setCookie("itemid_" + itemId, json);
    
    data = document.getElementById("cart_num");
    data.innerText = parseInt(data.innerText) + 1;
    loadAllItemInBasket()
}


function loadAllItemInBasket() {
    cookies = getCookie();
    let ids = Object.keys(cookies);
    data = document.getElementById("cart_num");
    data.innerText = ids.length;
    let product__list = $("#popup_product_list");

    for (let i = 0; i < ids.length; i++)
    {
        console.log(cookies[ids[i]]['price']);

        let img = document.getElementById("item_" + cookies[ids[i]]['id']).getAttribute("src");
        product__list.append(`
        <div class="popup__product">
            <div class="popup__product-wrap">
                <img src="${img}" alt="vedro" class="popup__product-image" />
                <h2 class="popup__product-title">
                    ${cookies[ids[i]]['title']}
                </h2>
            </div>
            <div class="popup__product-wrap">
                <div class="popup__product-price">${cookies[ids[i]]['price']}</div>
                <button class="popup__product-delete"></button>
            </div>
        </div>`);
    }
}


const getCookie = () => {
    
    let cookieValue = '';
    let cookieArray = new Array();
    let result = new Array();
  
    cookieValue = document.cookie;

    if(cookieValue){
      cookieArray = cookieValue.split(';');
        
      cookieArray.forEach(data => {
        data = data.split('=');
  
        result[data[0]] = JSON.parse(data[1]);
      });
    }
    return result;
  }


const setCookie = (name, json) => {

    let cookieValue = '';
    let expire = '';
    let period = '';
  

    cookieValue = name + '=' + JSON.stringify(json) + ';';
  
    cookieValue += 'path=/ ;';
  
    period = 30;
    expire = new Date();
    expire.setTime(expire.getTime() + 1000 * 3600 * 24 * period);
    expire.toUTCString();
    cookieValue += 'expires=' + expire + ';' + "secure;";
    document.cookie = cookieValue;
};


loadAllItemInBasket();

function calculateTotalPrice() {
    let cookies = getCookie();
    let ids = Object.keys(cookies);
    let total = 0;

    for (let i = 0; i < ids.length; i++) {
        total += Number(cookies[ids[i]]['price']);
    }
    
    // Обновление итоговой суммы в HTML
    let totalCostElement = document.getElementById('popup_cost');
    totalCostElement.innerText = total;

    // Расчет и обновление итога со скидкой
    let discount = Number(document.getElementById('popup_discount').innerText);
    let totalWithDiscount = total - discount;
    document.getElementById('popup_cost_discount').innerText = totalWithDiscount;
}

calculateTotalPrice();

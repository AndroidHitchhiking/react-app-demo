export function productObject(name, price, image) {
    let result = Object.assign({});
    result.name = name;
    result.price = price;
    result.image = image;
    result.id = Math.floor((Math.random() * 100) + 1);
    return result;
  }
  
export function addInitialList() {
    let resultList = [];
    let product1 = productObject("HP Inspirion", 700, "http://hpservicecenterschennai.in/images/hp_laptop_service_centers_in_guindy.png");
    let product2 = productObject("MacBook Pro 2018", 1500, "http://hpservicecenterschennai.in/images/hp_laptop_service_centers_in_guindy.png");
    let product3 = productObject("Dell 5500", 3000, "http://hpservicecenterschennai.in/images/hp_laptop_service_centers_in_guindy.png");
    let product4 = productObject("VIsta 6350", 2500, "http://hpservicecenterschennai.in/images/hp_laptop_service_centers_in_guindy.png");
    resultList.push(product1);
    resultList.push(product2);
    resultList.push(product3);
    resultList.push(product4);
    return resultList;
  }
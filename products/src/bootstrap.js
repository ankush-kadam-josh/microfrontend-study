import faker from 'faker';

let products = '';

//create products from faker
for(let i = 0;i<20;i++){
  const name = faker.commerce.productName();
  products+=`<div>${i+1+') '+name}</div>`
}

//insert products to target element from html page
document.querySelector('#dev-products').innerHTML=products;

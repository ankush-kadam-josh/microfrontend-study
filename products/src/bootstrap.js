import faker from 'faker';

const mount  = (el) => {
  let products = '';

  //create products from faker
  for(let i = 0;i<5;i++){
    const name = faker.commerce.productName();
    products+=`<div style="padding: 4px">${i+1+') '+name}</div>`
  }

  //insert products to target element from html page
  el.innerHTML=products;
}

//Assuming our container doesn't have an element with id dev-products
if(process.env.NODE_ENV === 'development'){
  const el = document.querySelector('#dev-products'); 

  if(el){
    //We are probably running in isolation
    mount(el);
  }
}

export { mount }

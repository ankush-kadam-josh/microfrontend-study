import faker from 'faker';

//using faker get number of items in our cart
const cartItemsCount = faker.datatype.number({min: 0, max: 3});

const mount = (el) => {
  //handle cart contents depend on number of cart items in the cart
  let cartText;
  switch(cartItemsCount) {
    case 0:
      cartText = `<hr /><div>No items in our cart!</div><hr />`
      break;
    case 1:
      cartText = `<hr /><div>Your cart have <b>${cartItemsCount}</b> item!</div><hr />`
      break;
    default:
      cartText = `<hr /><div>Your cart have <b>${cartItemsCount}</b> items!</div><hr />`
  }

  //insert cart to target element from html page
  el.innerHTML = cartText;
}

//Assuming our container doesn't have an element with id dev-cart
if(process.env.NODE_ENV === 'development'){
  const el = document.querySelector('#dev-cart'); 

  if(el){
    //We are probably running in isolation
    mount(el);
  }
}

export { mount }




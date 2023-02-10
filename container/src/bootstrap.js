import { mount as productMount} from 'products/ProductsIndex';
import { mount as cartMount } from 'cart/CartIndex';

console.log('This is Container');

//select and control where to mount product into
productMount(document.querySelector('#my-products'));

//select and control where to mount cart into
cartMount(document.querySelector('#my-cart'));

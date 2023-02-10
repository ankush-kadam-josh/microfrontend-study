/**
 * This pattern allows webpack to identify that before loading the project into browser,
 * we first need to check for resources required, (faker shared resource in this case(see webpack file of products and cart projects))
 * and it will load all the dependencies first asynchronously and then loads up the project into browser
 * 
*/
import('./bootstrap')

// 📁 -> math.js

// 😃 -> named export : addition function
export const add = function( a, b ) {
    return a + b;
}

// 😃 -> named export : division function
export const divide = function( a, b ) {
    return a / b;
}

/*------------------------*/

// 📁 -> module-a.js
import { add } from './math.js'
add( 1, 2 );

/*------------------------*/

// 📁 -> module-b.js
import { add } from './math.js'
add( 1, 2 );

/*------------------------*/

// 📁 -> module-c.js
import { add, divide } from './math.js'
add( 1, 2 );
divide( 1 / 2 );
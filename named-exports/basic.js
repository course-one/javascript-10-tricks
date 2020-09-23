// 📁 -> math.js

// 😐 -> default export : addition function
export default function( a, b ) {
    return a + b;
}

// 😒 -> named export : division function
export const divide = function( a, b ) {
    return a / b;
}

/*------------------------*/

// 📁 -> module-a.js
import add from './math.js'
add( 1, 2 );

/*------------------------*/

// 📁 -> module-b.js
import addition from './math.js'
addition( 1, 2 );

/*------------------------*/

// 📁 -> module-c.js
import sum, { divide } from './math.js'
sum( 1, 2 );
divide( 1 / 2 );
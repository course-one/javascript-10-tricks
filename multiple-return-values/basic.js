// function that returns an object
function calculate( a, b ) {
    return {
        a: a + b,
        s: a - b,
        d: a / b,
    };
}

// get results
var { a, s, m = 1, d: div } = calculate( 6, 3 );

// get `addition` result
// ✅ -> 9
console.log( a );

// get `subtraction` result
// ✅ -> 3
console.log( s );

// get `multiplication` result
// ✅ -> 1
console.log( m );

// get `division` result
// ✅ -> 2
console.log( div );
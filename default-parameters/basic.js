var user = {
    fistName: 'John',
    lastName: undefined,
};

// returns uppercase of the `name` argument
function makeUpperCase( name ) {
    return name.toUpperCase();
}

// proper (string) argument provided
// ✅ -> JOHN
console.log( makeUpperCase( user.fistName ) );

// no argument value provided
// ❌ -> TypeError: Cannot read property 'toUpperCase' of undefined
console.log( makeUpperCase() );

// `undefined` argument value provided
// ❌ -> TypeError: Cannot read property 'toUpperCase' of undefined
console.log( makeUpperCase( undefined ) );

// potentially `undefined` argument value provided
// ❌ -> TypeError: Cannot read property 'toUpperCase' of undefined
console.log( makeUpperCase( user.lastName ) );
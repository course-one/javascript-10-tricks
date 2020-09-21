var user = {
    fistName: 'John',
    lastName: undefined,
};

// returns uppercase of the `name` argument
function makeUpperCase( name = 'defult-value' ) {
    return name.toUpperCase();
}

// proper (string) argument provided
// ✅ -> JOHN
console.log( makeUpperCase( user.fistName ) );

// no argument value provided
// ✅ -> DEFULT-VALUE
console.log( makeUpperCase() );

// `undefined` argument value provided
// ✅ -> DEFULT-VALUE
console.log( makeUpperCase( undefined ) );

// potentially `undefined` argument value provided
// ✅ -> DEFULT-VALUE
console.log( makeUpperCase( user.lastName ) );

// `null` argument value provided
// ❌ -> TypeError: Cannot read property 'toUpperCase' of null
console.log( makeUpperCase( null ) );
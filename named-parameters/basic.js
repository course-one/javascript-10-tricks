var user = {
    fname: 'Ross',
    lname: 'Geller',
    age: 21,
};

// define a function
function printUser( { fname, lname } ) {
    console.log( `Hey, ${ fname } ${ lname }.` );
}

// pass an object literal
// ✅ -> Hey, Monica Geller.
printUser( { fname: 'Monica', lname: 'Geller' } );

// pass an object variable
// ✅ -> Hey, Ross Geller.
printUser( user );

// pass an object literal with missing keys
// ✅ -> Hey, Jack undefined.
printUser( { fname: 'Jack' } );

// pass an `undefined` value
// ❌ -> TypeError: Cannot destructure property `fname` of 'undefined' or 'null'.
printUser();
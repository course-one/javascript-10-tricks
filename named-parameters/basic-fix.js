var user = {
    fname: 'Ross',
    lname: 'Geller',
    age: 21,
};

// define a function
function printUser(
    {
        fname = 'John',
        lname = 'Doe',
        age: years = 18
    } = {}
) {
    console.log( `Hey, ${ fname } ${ lname }, you are ${ years } years old.` );
}

// pass an object literal
// ✅ -> Hey, Monica Geller, you are 18 years old.
printUser( { fname: 'Monica', lname: 'Geller' } );

// Hey, Ross Geller, you are 21 years old.
// ✅ -> Hey, Ross Geller.
printUser( user );

// pass an object literal with missing keys
// ✅ -> Hey, Jack Doe, you are 18 years old.
printUser( { fname: 'Jack' } );

// pass an `undefined` value
// ✅ -> Hey, John Doe, you are 18 years old.
printUser();
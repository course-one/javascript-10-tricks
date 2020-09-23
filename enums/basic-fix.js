// define an enum
const PAYMENT_STATUS = {
    UNPAID: Symbol(),
    PROCESSING: Symbol(),
    REJECTED: Symbol(),
    PAID: Symbol(),
};

/*--------------*/

// 👍 scalable (no refactoring needed)
function printInfo( { status = PAYMENT_STATUS.UNPAID } = {} ) {
    if( status === PAYMENT_STATUS.UNPAID ) {
        // make payment
    }
}

// ✅ -> this is scalable and safe
printInfo( { status: PAYMENT_STATUS.PAID } );

// ❌ -> doesn't represent an enum value
printInfo( { status: Symbol() } );
// define an enum
const PAYMENT_STATUS = {
    UNPAID: 'unpaid',
    PROCESSING: 'processing',
    REJECTED: 'rejected',
    PAID: 'paid',
};

/*--------------*/

// 👎 not scalable (needs refactoring)
function printData( isPaid ) {
    if( isPaid ) {
        // make payment
    }
}

printData( false );

/*--------------*/

// 👍 scalable (no refactoring needed)
function printInfo( { status = PAYMENT_STATUS.UNPAID } = {} ) {
    if( status === PAYMENT_STATUS.UNPAID ) {
        // make payment
    }
}

// 😃 this is scalable and safe
printInfo( { status: PAYMENT_STATUS.PAID } );

// 😐 this could be a problem
printInfo( { status: 'paid' } );

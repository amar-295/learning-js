// Immediately Invoked Functions Expressions (IIFE)

// IIFE used for removing problem caused by global scope pollution

(function chai() {   // first () => definition; second () => execution
    // Named IIFE
    
    console.log(`DB CONNECTED`);
})();

( (name) => { 
     console.log(`DB CONNECTED TWO ${name}`);
} )("Amarnath")
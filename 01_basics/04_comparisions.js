//console.log(2 > 1);// greater than
//console.log(2 < 1);// less than
//console.log(2 >= 1); // greater than equal
//console.log(2 <= 1); // less than equal 
//console.log(1 == 1); // equal 
//console.log(2 != 1); // not equal

//console.log(null > 0); // false
//console.log(null == 0); // false
//console.log(null >= 0); // true

/* The reason is that an equality check == and comparisions >, <, >=, <=, work differently
   Comaprisions convert null to a number, treating it is 0. 
   That's why (10) null >= 0 is true and (8) null > 0 is false. */

// undefined will give false in all these three cases.

//console.log("2" == 2); // conversion (string 2 converted in number)
//console.log("2" === 2); // datatype check
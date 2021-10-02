function rollTheDice() {
    let x = Math.random() * 5 + 1;
    return Math.round(x);
}
console.log(rollTheDice());
    
console.log("truth table for &&");
console.log("false && false = ", false && false);
console.log("true && false = ", true && false);
console.log("false && true = ", false && true);
console.log("true && true = ", true && true);
console.log("truth table for ||");                                                                         
console.log("false ||  false = ", false || false);
console.log("true  || false = ", true ||false);
console.log("false ||  true = ", false || true);
console.log("true  || true = ", true || true); 
console.log("truth table for ~");
console.log("! false   = ", ! false  );
console.log("! true  = ", ! true );

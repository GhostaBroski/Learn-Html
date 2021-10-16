function getTestGrade(score){
     if( score >= 90){
        return "A"
    } else if( score < 90 && score >= 80 ){
        return "B"
    } else if( score  < 80 && score >= 60 ){
        return "C"
    } else{
        return "D"
    }

}

console.log(getTestGrade(100) === "A");
console.log(getTestGrade(60) === "C");
console.log(getTestGrade(81) === "B");
console.log(getTestGrade(59) === "D");

function min(a,b){
    if( a < b){
        return a
    }else 
        return b
}


function calculateIncomeTax(salary){
    /*if( salary <= 12570){
        return 0
    }else if( salary = 12571 && salary <= 50270 ){
        return( salary - 12570) * 0.2
    }else if( salary >= 50271 && salary <= 150000){
        return
    }*/
    let basicRatetax = 0; 
    if( salary > 12570){
      basicRatetax = (min(salary, 50270) - 12570) * 0.2 
    }

    let higherRateTax = 0
    if( salary > 50270){
        higherRateTax = (min(salary, 150000) - 50270) * 0.4
    }
        
    let additionalRateTax = 0
    if ( salary > 150000){

        additionalRateTax = ( salary - 150000) *0.45
    }



    return basicRatetax + higherRateTax + additionalRateTax
    alert(additionalRateTax + higherRateTax + basicRatetax)

}
console.log(calculateIncomeTax(30000))
console.log(calculateIncomeTax(75000))
console.log(calculateIncomeTax(47983))
console.log(calculateIncomeTax(9821))
console.log(calculateIncomeTax(89750))

for(let j = 0; j < 5; j++){
    for(let i = 0; i  <= j; i++){
        process.stdout.write("*")
     }  
     process.stdout.write("\n")
} 

for(let j = 0; j < 5; j++){
    for(let i = 0; i  <= j; i++){
        process.stdout.write("*")
     }  
     process.stdout.write("\n")
} 

function reverseArray(array){
    if(array.lenght < 1)
    return []
    /*
    1. start with an array
    2. write an new array
    3. for loop the array from the end to the begining
    4. insert element to end of an new array.
    5. return new array
    */
   let newArray = []
   for(let i = array.length - 1; i >= 0; i--){
       newArray.push(array[i])   
   }
   return newArray
}


console.log(reverseArray([1,2,3,4,5,6]))
console.log(reverseArray([]))

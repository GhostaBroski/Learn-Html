function findElementIndex(array, value) {
    if(array.length === 0){
        return -1
    }
       
    for(let i = 0; i < array.length; i++)  { 
        if(array [i] === value){
            return i
        }
       
        
    }

    return -1
}
console.log(findElementIndex([1,2,3], 3) == 2)
console.log(findElementIndex([1,2,3,4], 5) == -1)             
console.log(findElementIndex([], 1) == -1)

function filterArray(array, predicate){
        let newArray = [];
        /*
        1 iterate over array
        2. For each element in array
        3. USe to predicatee to decide if it is kept
        4. if  predciate is true, add this elemnt to newArrat
        5.End of loop
        6.return result array
        */
        for(let i = 0; i < array.length; i++){
            if(predicate(array[i] )){
                newArray.push(array[i])
            }
            
        }
 
        return newArray
}
console.log( filterArray(["acc", "ba", "cdd", "dssds"], (x) => x.length < 4 ));
function mapArray(array, transform){
    let newArray = []
    /*
    1.Create new empty array
    2.iterate each element
    3. Transform element to new value using function
    4.add new value to new array
    5. end of loop
    6. Return result array
    */
    for(let i = 0; i < array.length; i++){
        let  newElement = transform(array[i])
        newArray.push(newElement)
    }
    return newArray
}
console.log(mapArray([1,2,3,4], (x) => x * x))

let a = {
    temperature: 15.3,
    location: "Glasgow"
};
let b = a  
b.location = "edinburgh"
console.log(a)
console.log(b)

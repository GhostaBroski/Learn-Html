console.log("hello world");
//practise: Comupte array sum
let sum = 0;
let nums = [1000000,999,9999]
for(let a = 0; a< nums.length; a++){
    sum = nums[a] + sum;
}
console.log("sum", sum)
 
function computeSum(nums) {
    let sum = 0
    for(let x = 0; x < nums.length; x++) {
        sum = sum + nums[x];
    }
    return sum;
}

let sum2 = computeSum([1,2,3,4,5]);
console.log("sum2",sum2)

function computeCheck(a) {
     
    if(a% 3 ==0 ){
        return  true;
    }
    if(a% 7 == 0){
        return true
    }
    return false
}
console.log("computeCheck", computeCheck(11))
function alert(x) {
    let a = 6
    if(a = 3+3) {
        return true
    }
    return  false
}

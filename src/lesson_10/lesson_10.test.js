const { it, expect } = require("@jest/globals")


function arrayEqual(array1, array2){
    /* 
    1. check if lengths are different, then return false.
    2. check every element.
    3.iterate elements of array1, array2,
    4. if element are different, set result false and break
    5.return element
    */
    if( array1.length !== array2.length){
        return false
    }
    let result = true
    let i = 0
    while(i < array1.length){
        if(array1[i] != array2[i]){
            result = false
            break
        }
        i++
    }
    return result 
}
describe("arrayEqual", () => {
     it("should be false if length are different", () => {
         let array1 = [0]
         let array2 = [0,0]
         let result = arrayEqual(array1, array2)
         expect(result).toBeFalsy()
     })   
     it("should be true if array are same", () => {
        let array1 = [0]
        let array2 = [0]
        let result = arrayEqual(array1, array2)
        expect(result).toBeTruthy()
    })   
    it("should be false if array element are different", () => {
        let array1 = [1]
        let array2 = [0]
        let result = arrayEqual(array1, array2)
        expect(result).toBeFalsy()
    })   
    
})
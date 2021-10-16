const { expect } = require("@jest/globals")


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
describe("getTestGrade",() => {
    it("grade should be A if  >=90", ()=>{
        let grade = getTestGrade(90);
        expect(grade).toBe('A')
    })
    it("grade should be B if 80 <= score <= 89", ()=>{
        let grade = getTestGrade(80);
    
        expect(grade).toBe('B')
        grade = getTestGrade(89);
        expect(grade).toBe('B')
    })
 
})


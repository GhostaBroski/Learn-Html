function power(x,n){
    if(x ==0 && n ==0){
        return -1
    }
    
    let y = 1
    for( let i = 0; i < n; i++){
         y = x*y
       
    }
    return y
}
describe("power(x,n)", () => {
    it("should return -1 if x == 0 and n ==0", () => {
        expect(power(0,0)).toBe(-1);
    })

    it("should return 1 if n ==0", () => {
    expect(power(3,0)).toBe(1);
    })
    it("should return x if n == 1", () => {
        expect(power(10,1)).toBe(10);
        expect(power(5,1)).toBe(5);
        expect(power(10000,1)).toBe(10000);
        
    })
    it("should return correct powers of x to n", () =>{
            expect(power(2,10)).toBe(1024)
            expect(power(1,100)).toBe(1)
            expect(power(3,2)).toBe(9)

    })
    })

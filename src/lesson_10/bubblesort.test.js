

function bubbleSort(array){
    let change = true
    while(change){
        change = false
        for( i = 0; i < array.length -1; i++){
            if( array[i] > array[i+1]){
                let tmp = array[i]
                array[i] = array[i+1]
                array[i+1] = tmp
                change = true
            }

        }
    }
}
describe("bubbleSort",() => {
    it("array should be sorted", ()=>{
        let array1 = [5,3,6,4,8]
        bubbleSort(array1)
        expect(array1).toStrictEqual([3,4,5,6,8])
    })
})
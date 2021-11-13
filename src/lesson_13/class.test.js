class MyArray{
    data = []
    constructor(...initialValues) {
        this.data = [...initialValues]
    }
     length() {
       return this.data.length 
     }
     getValue(index) {
        return this.data[index]
     }
     insertValue(index, newValue) {
         this.data[index] = newValue 
     }
     find(value) {
         for(let i = 0; i < this.data.length; i++){
             if(this.data[i] == value){
                 return i 
             }
         }
         return null
     }
 

}
class Animal {
    height = 0;
    family = "";
    makesound() {}
}
class Dog extends Animal{
    constructor() {
        super();
        this.family = "canidae";
        this.height= 35.7;
    }
    makeSound() {
        console.log("woof!");
    }
}
class Cat extends Animal{
    constructor() {
        super();
        this.family = "felidae";
        this.height= 45.5;
    }
    makeSound() {
        console.log("Meow!");
    }
}
let c = new Cat();
if(c instanceof Animal) {
    console.log("cat is an instance of Animal class");
}
if(c instanceof Cat) {
    console.log("cat is an instance of Cat");
}
if(c instanceof Dog) {
    console.log("cat is an instance of Dog")
}
let pets = [new Cat(), new Dog()];
pets.forEach(p => p.makeSound());





describe("MyArray",() => {
    it("should be empty when intialized with empty values", () => {
        let arr = new MyArray();
        expect(arr.length()).toBe(0);
    })
    it("should return correct value when intialized with values", () => {
        let arr = new MyArray(1,2,3,4);
        arr.insertValue(0,5);
        expect(arr.getValue(0)).toBe(5)
    })
    it("should say if value exist or not when insert with wanted value", () => {
        let arr = new MyArray(1,2,3,4,5);
        expect(arr.find(3)).toBe(2);
        expect(arr.find(9)).toBe(null);
    })
})

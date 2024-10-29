// Exercise 1

// class Odam{
    
//     constructor (name, age) {
//     this.name = name;
//     this.age = age;
//     }


//     salomber(){
//         console.log(`name: ${this.name}, age: ${this.age}`);
//     }

// }

// let thomas = new Odam("Thomas", 24)
// console.log(thomas);



// Exercise 2


// class Names {
//     constructor (name){
//         this.name = name;
//     }


//     getName(){
//         console.log(`Sizning ismingiz: ${this.name}`);
//     }

//     changeName(){
//         console.log(`Sizning yangi ismingiz: ${this.name}`);
        
//     }

// }

// let islom = new Names ("Islom");
// islom.getName();

// let thomas = new  Names ("Thomas");
// thomas.changeName();





// Exercise 3

// class Hisob{
//     #balans;
//     constructor(initialBalance){
//         this.#balans = initialBalance;
//     }


//     hisobniToldir(miqdor){
//         this.#balans += miqdor;
//     }



//     hisobniOl(){
//         return this.#balans;
//     }

// }


// const acc = new Hisob(100);

// acc.hisobniToldir(30);
// console.log(acc.hisobniOl());



// Exercise 4


// class Animal{
//     constructor(name,sound){
//         this.name = name;
//         this.sound = sound;
//     }

//     makeSound(){
//         console.log(`${this.name}: ${this.sound}`);
//     }

// }


// class Dog extends Animal{
//     constructor(name,sound){
//         super(name,sound);
//     }


//     makeSound() {
//         console.log(`${this.name}: ${this.sound}`);
//         const audio = new Audio('./audio/barking-dog.mp3');  
//         audio.play();
//     }


// }




// class Cat extends Animal{
//     constructor(name,sound){
//         super(name,sound);
//     }


//     makeSound() {
//         console.log(`${this.name}: ${this.sound}`);
//         const audio = new Audio('./audio/meow.wav');  
//         audio.play();
//     }


// }




// let dog1 = new Dog("It","Vov!");
// dog1.makeSound()

// const button = document.querySelector(".dog__barking");

// button.addEventListener("click", () => {
//     dog1.makeSound();
// });


// let cat1 = new Cat("Cat","Meow!");
// cat1.makeSound()

// const button1 = document.querySelector(".cat__meowing");

// button1.addEventListener("click", () => {
//     cat1.makeSound();
// });



// Exercise 5


// class Mashina{
//     #motorHolati;
//     constructor(holati){
//         this.#motorHolati = holati
//     }


//     motorniYoq(){
//         this.#motorHolati = true;
//         return this.#motorHolati;
//     }

//     motorniOch(){
//         this.#motorHolati = false;
//         return this.#motorHolati;
//     }


//     motorYoqilganmi(){
//         return this.#motorHolati;
//     }


// }



// let car = new Mashina();
// console.log(car.motorniYoq());
// console.log(car.motorniOch());
// console.log(car.motorYoqilganmi());



// Exercise 6


// class Vehicle{
//     constructor(type, speed){
//         this.type = type;
//         this.speed = speed;
//     }


// }


// class Car extends Vehicle{
//     constructor(type){
//         super(type)
//     }


//     eshikniOch(){
//         console.log(`${this.type} eshigi ochildi`);
//     }


//     eshikniYop(){
//         console.log(`${this.type} eshigi yopildi`);
//     }


// }


// class Bicycyle extends Vehicle{
//     constructor(type){
//         super(type)
//     }



//     savatniQoy(){
//         console.log(`${this.type}ga savat qo'yildi.`);
        
//     }



//     savatniOl(){
//         console.log(`${this.type}dan savat olindi.`);
        
//     }


    
// }


// let mers = new Car("mashina");
// mers.eshikniOch()
// mers.eshikniYop()


// let velosiped = new Bicycyle("velosiped");
// velosiped.savatniOl()
// velosiped.savatniQoy()



// Exercise 7


// class Shakl{
//     constructor(nom,rang){
//         this.nom = nom;
//         this.rang = rang;nom
//     }


// }


// class Aylana extends Shakl{
//     constructor(nom,rang,radius){
//         super(nom,rang)
//         this.radius = radius;
//     }

//     maydonniOl(){

//     }

// }





// class Rectangle extends Shakl{
//     constructor(nom,rang,kenglik,balandlik){
//         super(nom,rang)
//         this.kenglik = kenglik;
//         this.balandlik = balandlik;
//     }

//     maydonniOl(){
        
//     }
// }


// let circle1 = new Aylana()
// circle1.maydonniOl()




// Exercise 8



class Animal{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }


    static gettingOld(age){
        if (this.age > 10) {
            return true;
        }
        return false;
    }


}


class Dog extends Animal{
    constructor(name,age){
        super(name,age)
    }
}
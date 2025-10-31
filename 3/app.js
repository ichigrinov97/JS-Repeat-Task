//  Напишите рекурсивную функцию sumTo(n), которая возвращает сумму чисел от 1 до n.
//  sumTo(5); // 15
//  sumTo(10); // 55




// function sumTo(n) {
//     if(n == 0) return 0 ;
//     return n + sumTo(n - 1);
    
// }


// console.log(sumTo(5));
 

//  Реализуй рекурсивную функцию getLength(arr), которая возвращает количество элементов массива.
//  getLength([10, 20, 30]); // 3
//  getLength([]); // 0




// function getLength(arr) {
//     if(arr.length == 0) return 0;
//     arr.pop()
//     return 1 + getLength(arr)
   
// }

// console.log(getLength([10,20,30]));


//  Реализуйте рекурсивную функцию pow(x, n), которая возвращает xⁿ.
//  pow(2, 3); // 8
//  pow(5, 2); // 25


// function pow(x,n) {
//     if(n == 1) return x;
//     return x* pow(x,n-1)
// }

// console.log(pow(2,3));


//  Напишите рекурсивную функцию, которая вычисляет сумму всех элементов массива.
//  sumArray([1, 2, 3, 4]); // 10
//  sumArray([10, -5, 15]); // 20



// function sumArray(arr) {
//     if(arr.length == 0) return 0;

//     return arr.pop() + sumArray(arr)
// }

// console.log(sumArray([1,2,3,4]));


// Создай функцию createGreeter(name), которая возвращает функцию, печатающую приветствие.
//  const greetJohn = createGreeter('John);
//  greetJohn(); // "Hello, John!«


// function createGreeter(name) {

//     let text = 'Hello'
    
//     return function(){
        
//         return text + ',' + name;
//     }

// }
 
// const greetJohn = createGreeter('John')
// console.log(greetJohn());


// Создай функцию createCounter(), которая возвращает внутреннюю функцию, увеличивающую счётчик при 
// каждом вызове.
//  const counter = createCounter();
//  counter(); // 1
//  counter(); // 2


// function createCounter() {
//     let count = 0

//     return function(){
//         count ++
//         return count;
//     }
// }

// const counter = createCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());

// Создай функцию makeMultiplier(factor), которая возвращает новую функцию, умножающую число на factor.
//  const double = makeMultiplier(2);
//  double(10); // 20
//  double(4); // 8
//  double(2); // 4


// function makeMultiplier(factor) {

//     return function(n){
        
//         return factor *n;
//     }
// }

// const double = makeMultiplier(2);
// console.log(double(10));


// Создай IIFE, которое выводит в консоль "Скрипт запущен!" при загрузке.


// (function(){
//     console.log('Скрипт запущен');
    
// })();

// Создай IIFE, внутри которого есть замыкание – счётчик и возвращаемая функция.
//  const counter = (function() {
//  })();
//  counter(); // 1
//  counter(); // 2



// const counter = (function(){
//     let count = 0;

//     return function(){
//         return count += 1 ;
//     } 
// })();


// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());

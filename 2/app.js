// // 1Напишите функцию, которая возвращает новый массив, где каждый элемент умножен на 2. Метод: map
//  double([1,2,3]); // [2,4,6]



// function double() {
//     const arr = [1,2,3];
//     const res = arr.map(el => el*2);
//     console.log(res);
    
// }

// double();


//  2. Вернуть массив только с положительными числами. Метод: filter
//  positive([1,-2,3,0,5]); // [1,3,5]


// function positive() {
//     const arr = [1,-2,3,0,5];
//     const res = arr.filter(el=> el>0)
//     console.log(res);
    
// }

// positive();



//  3.
//  Определите, есть ли в массиве пользователей хотя бы один младше 18 лет. Метод: some
//  hasMinor([{age:20},{age:15},{age:30}]); // true


// function hasMinor() {
//     const arr = [{age:20},{age:15},{age:30}]

//     const res = arr.some(el => el.age <18? true:false)
//     console.log(res);
    
// }
// hasMinor();




//  4. Проверить, что все элементы массива — непустые строки. Метод: every
//  allNotEmpty(["a","b","c"]);   // true


// function allNotEmpty() {
//     const arr = ['a','д','c']
//     const res = arr.every(el => el.length )
//     console.log(res);
    
// }

// allNotEmpty();



//  5.
//  Найти сумму чисел массива. Метод: reduce
//  sum([1,2,3,4]); // 10


// function sum() {
//     const arr = [1,2,3,4];
//     const res = arr.reduce((summ, el) => summ +=el,0)
//     console.log(res);
    
// }
// sum()


//  6. Найти первый отрицательный элемент массива. Если нет, вернуть null. Метод: find
//  f
//  irstNegative([1,2,-3,4]); // -3


// function isrstNegative() {
//     const arr = [1,2,-3,4]
//     const res = arr.find(el => el <0)
//     console.log(res);
    
// }
// isrstNegative()


// 7.
//  Найти индекс первого чётного элемента. Метод: findIndex 
// f


// function findIndex() {
//     const arr = [1,3,5,6,7]
//     const res = arr.findIndex(el => el%2 == 0);
//     console.log(res);
    
// }
// findIndex()


//  irstEvenIndex([1,3,5,6,7]); // 3


//  8. Вернуть объект, где ключ — символ строки, а значение — сколько раз он встречается. Метод: forEach
//  charCount("hello"); // {h:1, e:1, l:2, o:1}

// function charCount() {
//     const str = 'hello'.split('')
//     const obj = {}
//     str.forEach(el => {
//         obj[el] = (obj[el]??0) +1
//     })
//     console.log(obj);
    
// }
// charCount()

//  9. У вас есть массив объектов {id, name}, вернуть массив только с именами. Метод: map 
// names([{id:1, name:"Ann"}, {id:2, name:"Bob"}]); // ["Ann","Bob"]

// function names() {
//     const arr = [{id:1,name:'Ann'},{id:2,name:'Bob'}]
//     const newArr = []
//     const res = arr.map(el =>{
//        return newArr.push(el.name)
//     })
//     console.log(newArr);
    
// }
// names()




//  10. Найти самое длинное слово в массиве строк. Метод: reduce
//  longest(["a","abc","ab"]); // "abc"



// function longest() {
//     const arr = ['a','abc','ab']
//     const long = arr.reduce((lng,el) =>{
//         return el.length > lng.length?el:lng
//     },'')
//     console.log(long);
    
// }
// longest()



// 10. Дана строка.Сделать первую букву каждого слова заглавной.
//  capitalizeWords("hello world"); // "Hello World«


// function capitalizeWords() {
//     const str = 'hello world'.split(' ')
//     const newstr = []
//     str.forEach(el => {
//         newstr.push(el[0].toUpperCase()+el.slice(1))
//     })
//     console.log(newstr.join(' '));
    
// }
// capitalizeWords()



//  11.
//  На входе число N. Реализуйте функцию, находящую все делители числа N.
//  divisors(12); // [1,2,3,4,6,12]

// function divisors() {
//     const n = 12;
//     const arr = [];
//     for (let i = 1; i <= n; i++) {
//         if(n%i ==0){
//             arr.push(i)
//         }
//     }
//     console.log(arr);
    
// }
// divisors()


//  12. Функция в качестве параметра принимает строку и считает количество слов в строке.
//  wordCount("Hello world from JS"); // 4

// function wordCount() {
//     const str = 'Hello world from JS'.split(' ')
//     console.log(str.length);
    
// }
// wordCount()



//  
//  13. Функция в качестве параметра принимает массив чисел и удаляет дубликаты из массива. (new Set)
// removeDuplicates([1,2,2,3,4,4,5]); // [1,2,3,4,5]

// function removeDuplicates() {
//     const arr = [1,2,2,3,4,4,5]
//     const set =new Set(arr)
//     console.log(Array.from(set));
    
    
// }
// removeDuplicates()



//  14. Функция, которая находит все пары чисел в массиве, сумма которых равна N.
//  twoSum([2,7,11, 1, 15, 8], 9); // [2,7,1,8]


function twoSum() {
    const n = 9;
    const arr = [2,7,11,1,15,8];
    const newArr = []
    for (let i = 0; i < arr.length -1; i++) {
        for (let g = i+1; g < arr.length; g++) {
            if(arr[i] + arr[g] == n){
                newArr.push(arr[i],arr[g])
            }
        }
    }
    console.log(newArr);
    
    
}

twoSum()
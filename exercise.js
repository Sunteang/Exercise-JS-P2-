// Exercise1
function greeting(name){
    return `greeting ${name}`;
};

console.log(greeting("teacher"));

// Exercise2
function sumNumber(num1, num2){
    return num1 + num2;
};

console.log(sumNumber(23, 12));

// Exercise3
let numbers = [1, 2, 3, 4, 5];

const totalAverage = (numbers) => {
    const sum = numbers.reduce((total, number)=> total + number , 0);
    const average = sum / numbers.length;
    return average;
};

console.log(totalAverage(numbers));

// Exercise4
const calcuBMI = function(weight, height){
    const bmi = weight / (height * height);
    return bmi;
};
console.log(calcuBMI(45, 165));

// Exercise5
const products = [
    {name: "apple", price: 1.2, quantity:0},
    {name: "orange", price: 2.3, quantity:10},
    {name: "banana", price: 0.8, quantity:20},
    {name: "watermelon", price: 2.1, quantity:0}
];

function filterZeroQuantity(products){
    return products.filter((products)=> products.quantity > 0);
};

const filterProducts = filterZeroQuantity(products);
console.log(filterProducts);

// Exercise6
function isPasswordStrong(password){
    if (password.length >=8){
        return "Password is strong";
    }else{
        return "password not strong";
    }
};
console.log(isPasswordStrong("1324567"));
console.log(isPasswordStrong("ogmypass101"));

// Exercise7
function countOfVowels(inputString){
    const vowels = 'aeiouAEIOU';
    let vowelCount = 0;

    for (let char of inputString){
        if (vowels.includes(char)){
            vowelCount++;
        }
    }
    return vowelCount;
};

console.log(countOfVowels("serey Sunteang Ios Org"));

// Exercise8
const listNumber = [2, 4, 5, 1, 3, 8, 7, 6];

function sortListsAscending(listNumber){
    return listNumber.sort((a, b)=> a - b );
};

console.log(sortListsAscending(listNumber))

// Exercise9
function getMedian(numbers){
    numbers.sort((a, b)=> a - b);

    const getMidIndex = Math.floor(numbers.length / 2);
    if (numbers.length % 2 !==0){
        return numbers[getMidIndex]
    }
    return (numbers[getMidIndex-1]+ numbers[getMidIndex])/2;
};

const num1 =[ 1,3,5,6,7,8,9];
const num2 =[ 1,3,5,6,7,8,9,1];

console.log(getMedian(num1));
console.log(getMedian(num2));

// Exercise10
function factorial(num){
    if (num<0){
        return "negative number"
    }else if (num===0 || num===1){
        return 1;
    }else{
        let result = 1;
        for (let i = 2 ; i <= num ; i++){
            result *= i;
        }
        return result;
    }
}

console.log(factorial(5));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(2));
console.log(factorial(-2));


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
let arr = [1, 2, 4, 4, 5];
const average = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum/arr.length;
};
console.log(average(arr));

// Exercise4
(function(){
    weight = 50;
    height = 1.70
   BMI = weight / (height*height);
   console.log(BMI);
})();

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
let string = "New network connection detected";

function countVowels(string){
    let vowels = ['a','e','i','o','u']
    let count  = 0;

    for (let i = 0 ; i < string.length ; i++){
        for (let j = 0 ; j < vowels.length ; j++){
            if (string[i] === vowels[j]){
                count++;
            }
        }
    }
    return count;
}
console.log("Count Vowels: ", countVowels(string));

// Exercise8
let listNumber = [3,1,8,7,9,5,6,12,34,2,4,23,67,43,56];

function sortNumber(listNumber){
    for (let i = 0 ; i < listNumber.length ; i++){
        for (let j = i + 1 ; j < listNumber.length ; j++){
            if (listNumber[i]> listNumber[j]){
                let storeNumber = listNumber[i];
                listNumber[i] = listNumber[j];
                listNumber[j] = storeNumber;
            }
        }
    }
    return listNumber;
}

console.log(" sort a list of numbers in ascending order", sortNumber(listNumber))


// Exercise9
let numberList1 = [7,14,5,19,26,42,13];
let numberList2 = [8,21,14,36,17,2,56,41];

function findMedian(numberList1){
    let median;

    for (let i = 0; i < numberList1.length ; i++){
        for (let j = i+1 ; j < numberList1.length ; j++){
            if ( numberList1[i]> numberList1[j]){
                let storeNum = numberList1[i];
                numberList1[i]= numberList1[j];
                numberList1[j]= storeNum;
            }
        }
    }
    console.log(numberList1)
    if (numberList1.length%2!==0){
        median = numberList1[((numberList1.length+1)/2)-1] ;
    }else{
        median= (numberList1[((numberList1.length)/2)-1] + numberList1[(numberList1.length)/2])/2;
    }
    return median;
}
console.log("Median of odd length of the element: ",findMedian(numberList1))
console.log("Median of even length of the element: ",findMedian(numberList2))

// Exercise10
function factorial(num){
    if (num<0){
        return "negative number"
    }else if (num===0 || num===1){
        return 1;
    }else{
        return num * factorial(num - 1);
    }
}

console.log(factorial(5));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(2));
console.log(factorial(-2));


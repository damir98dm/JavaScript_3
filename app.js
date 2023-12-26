// Задание 1

const input = +prompt('Введите количество бананов');
let banana = 1;

for(i = 1; banana <= input ; banana++){
    console.log(banana + ' banana');
    if( banana == 1) break;
}

for(i = 2; i <= input ; i++){
    console.log(i + ' bananas');

}


// Задание 2

const input1 = +prompt('Введите число у которого хотите посчитать сумму четных чисел');

let num = 0;

for( i = 1; i < input1; i++) {
    if(i %2 == 0){
       num+=i
    }
}
console.log('Сумма четных чисел = ' + num );
alert( 'Сумма четных чисел = ' + num  );


// Задание 3

const num1 = +prompt('Введите число');
const degree = +prompt('Введите степень');
let result = 1;

for(i = 0; i < degree ; i++){
    result = result* num1;
}
alert('Число в степени равняется = ' + result)
console.log('Число в степени равняется = ' + result);


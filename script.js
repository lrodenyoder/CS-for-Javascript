const data = [12,23,38,40,54,62,71,87,99];

const binarySearch = (arr, num) => {
    let left = 0;
    let right = arr.length - 1;
    let middle = Math.floor((left + right) / 2);

    if(num === arr[middle]){
        return 'found it';
    } else if(num < arr[middle]) {
        right = middle;
        return `bring right down to ${right}`;
    } else if(num > arr[middle]) {
        left = middle + 1;
        return `bring left up to ${left}`
    }
};

console.log(binarySearch(data, 38));

const improvedBinarySearch = (arr, num, left, right) => {
    let middle = Math.floor((left + right) / 2);

    //range overlapped, never found number
    if (left > right){
        return -1;
    } else if(num === arr[middle]){
        return middle;
    } else if(num < arr[middle]){
        return improvedBinarySearch(arr, num, left, middle - 1);
    } else {
        return improvedBinarySearch(arr, num, middle + 1, right);
    }
};

//set initial left and right values on first call
console.log(improvedBinarySearch(data, 23, 0, data.length - 1));




const {bubbleSort, quickSort} = require('./sort');
const {mostDuplicates, optimizedDuplicates} = require('./dupes');
const Benchmark = require('benchmark');

const numbers = [];

for(let i = 0; i < 10000; i++){
    numbers.push(Math.floor(Math.random() * 10000) + 1);
};


const suite = new Benchmark.suite;

suite
    .add('bubble sort', function(){
        const testArray = [...numbers];
        bubbleSort(testArray);
    })
    .add('quick sort', function(){
        const testArray = [...numbers];
        quickSort(testArray);
    })
    .add('js sort', function() {
        const testArray = [...numbers];
        testArray.sort((a, b) => {
            return a - b;
        });
    })
    .add('duplicates test', function(){
        mostDuplicates(numbers);
    })
    .add('optomized duplicates', function(){
        optimizedDuplicates(numbers);
    })
    .on('complete', function(){
        this.forEach(result => console.log(`${result.name} averaged ${result.stats.mean * 1000} milliseconds`));
    })
    .run();




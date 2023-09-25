//Task One
//Write a function that can calculate the average of a array of values (numbers)

function avgarray(array){
    let sum=0;
for (let index = 0; index < array.length; index++) {
    sum+=array[index];
}
const avg=sum/array.length;
return avg;
}

let thisarray=[10,15,24,65,22];
console.log(avgarray(thisarray));

//Task Two
//Print values of array using map function along with index as following output (”Value at index 1 is 10”, …)

const Arr12 = [2, 3, 4, 5, 35]
const Array13 = Arr12.map(element => {
    return element;
})

console.log(Array13);

//Task Three
//Write an object of person with key values as below and print the values of the object not keys

let person = {
Name: 'Ace' ,
Age: '22',
Country: 'Pakistan',
Semester: '7',
CMS: '072-21-0021',
list : {
contactNumber1: '06050030301',
email1: 'hellodearmuskan@gmail.com',
contactNumber2: '0389399283',
email2: 'hello@gmail.com',
contactNumber3: '2938382093',
email3: 'hxys@gmail.com',
}
}


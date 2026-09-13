// Bai tap 1 - Arrow Function

const sum = (a, b) => a + b;

const average = (...numbers) => {
    return numbers.reduce((total, number) => total + number, 0) / numbers.length;
};

const checkNumber = (number) => number > 10;

console.log("Tong:", sum(5, 3));
console.log("Trung binh:", average(7, 8, 9));
console.log("Lon hon 10:", checkNumber(15));

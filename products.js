// Bai tap 3 - Map, Filter, Reduce

const products = [
    {id: 1, name: "Laptop", price: 2000, available: true},
    {id: 2, name: "Phone", price: 800, available: false},
    {id: 3, name: "Tablet", price: 500, available: true},
    {id: 4, name: "Keyboard", price: 100, available: true},
    {id: 5, name: "Mouse", price: 50, available: false}
];

const productNames = products.map(product => product.name);

const availableProducts = products.filter(product => product.available);

const totalValue = products.reduce(
    (total, product) => total + product.price, 0
);

console.log(productNames);
console.log(availableProducts);
console.log(totalValue);

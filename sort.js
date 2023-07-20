function sortProduct(product){
    return product.sort((a,b)=> a.price - b.price)
}
const product = [
    { name: "Product A", price: 15 },
    { name: "Product B", price: 8 },
    { name: "Product C", price: 20 },
  ];
console.log(sortProduct(product))
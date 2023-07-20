const oddSquare = (arr) =>{
    const oddNumbers = arr.filter(number => number%2 === 0)
return oddNumbers.map(number => number**2);
}
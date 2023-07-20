function removeDuplicate(arr){
    const array = [];
    for(let i=0; i < arr.length; i++){
        if(!array.includes(arr[i])) {
            array.push(arr[i]);
        }
    }
    return array;
}
console.log(removeDuplicate([1,2,3,2,5,1,5]))
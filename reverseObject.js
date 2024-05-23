function reverseObject(originalObj) {
    const reversedObj = {};
    for (let key in originalObj) {
            let value = originalObj[key];
            reversedObj[value] = key;
    }
    return reversedObj;
}

const originalObj = {aa: "1", bf: "3", cq: "5"};
console.log(reverseObject(originalObj));// Output: { '1': 'aa', '3': 'bf', '5': 'cq' }

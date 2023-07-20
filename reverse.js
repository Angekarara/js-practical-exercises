function reverse(str){
    const str2 = str.split(' ');
    return str2.map(word => word.split('').reverse().join('')).join(' ')
}
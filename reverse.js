function reverse(str){
    return str.map(word => word.split('').reverse()).join('')
}
function extractWordsAndNumbers(input){
    const results = []
    for(let inp of input){
        console.log(inp)
        let matches = inp.match(/\d+/g)
        if(matches){
            results.push(parseInt((matches).join("")))
        }
        
    }
    return results
}
const input = ["Hello123", "World456", "49", "Another789"];
const output = extractWordsAndNumbers(input);// Expected output [  "Hello",123, "World", 456, 49, "Another", 789]

console.log(output);
 
function topThreeWords(text) {
    let words = text.match(/\b[a-zA-Z']*[a-zA-Z][a-zA-Z']*\b/g);

    if (!words) {
        return [];
    }

    words = words.map(word => word.toLowerCase());

    let occurrences = {};
    words.forEach(word => {
        if (occurrences[word]) {
            occurrences[word]++;
        } else {
            occurrences[word] = 1;
        }
    });
  const arr = Object.entries(occurrences)
  const sort = arr.sort((a,b) => b[1] - a[1]).slice(0,3)
   const s = Object.fromEntries(sort)
  
    return Object.keys(s);
}
console.log(topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"))//['e','ddd','aa']
console.log(topThreeWords("a a a  b  c c  d d d d  e e e e e"))//['e','d','a']
console.log(topThreeWords("  //wont won't won't "))// ["won't", "wont"]
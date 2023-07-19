function countZeros(n) {
  let count = 0;
  while (n>0) {
    count += Math.floor(n / 10);
    n /= 10;
  }

  console.log(count) ;
}
countZeros(2000);
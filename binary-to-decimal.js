
const testCases = ['101110', '11000'];
const expectation = [46, 24];

function convert(number) {
  const length = number.length;
  let total = 0;
  for (let i=0; i<length - 1; i++) {
    if(number[i] == 1) {
      total += Math.pow(2, length - 1 - i)
    }
  }
  console.log(total);
  return total;
}

testCases.forEach( (binaryNumber, index) => {
  if(convert(binaryNumber) != expectation[index] )
    console.log(`Error on ${binaryNumber} -> ${expectation[index]}`)
});


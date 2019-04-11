
const testCases = [25, 40];
const expectation = ['11001', '101000'];

function convert(decimalNumber) {
  let quotient = decimalNumber;
  let remainder;
  let result = [];
  do {
    remainder = quotient % 2;
    quotient = Math.floor(quotient / 2);
    result.unshift(remainder);
  } while (quotient >= 2 );

  result.unshift(quotient);

  console.log(result.join(''));
  return result.join('');
}

testCases.forEach( (binaryNumber, index) => {
  if(convert(binaryNumber) != expectation[index] )
    console.log(`Error on ${binaryNumber} -> ${expectation[index]}`)
});


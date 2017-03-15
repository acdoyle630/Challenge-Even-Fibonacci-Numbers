/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */
function _sumFibs( maxFibValue ) {
  var current = 2;
  var previous = 1;
  var sum = 0;
  var fibArr = [1, 2];
  var result = 0;
  for (var i=1; i<maxFibValue; i++) {
  	sum = current + previous;	
  	previous = current;			
  	current = sum;	
  	fibArr.push(sum);	
  	if(fibArr[i] % 2 === 0 && fibArr[i] <= maxFibValue){
  		result+=fibArr[i];
  	}		
}
	
	

  return result;
}
_sumFibs(4000000);

// bonus round
function _highestFibonacciNumber (maxFibValue){
  var highest = 0;
  var current = 2;
  var previous = 1;
  var counter = 0;
  var fibArr = [1,2];
  for (var i=1; i<maxFibValue; i++) {
  	counter = current + previous;
  	previous = current;
  	current = counter;
  	if(counter <= maxFibValue){
  	fibArr.push(counter);
  	highest = fibArr[fibArr.length-1];
  }
  
  }
  return highest;
}

  //define your base case, validate your input

  
  //do your work here
  console.log(_highestFibonacciNumber(100));

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs : _sumFibs,
  highestFibonacciNumber : _highestFibonacciNumber
};
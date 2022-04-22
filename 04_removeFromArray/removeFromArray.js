const removeFromArray = function(arr, a, b, c, d) {
  let theArray = Array.from(arr);
  let indexA = theArray.indexOf(a);
  if (indexA > -1) {
  theArray.splice(indexA, 1);    
  } 
  let indexB = theArray.indexOf(b);
  if (indexB > -1) {
  theArray.splice(indexB, 1);    
  } 
  let indexC = theArray.indexOf(c);
  if (indexC > -1) {
  theArray.splice(indexC, 1);    
  } 
  let indexD = theArray.indexOf(d);
  if (indexD > -1) {
  theArray.splice(indexD, 1);    
  } 
  return theArray;
}



// Do not edit below this line
module.exports = removeFromArray;

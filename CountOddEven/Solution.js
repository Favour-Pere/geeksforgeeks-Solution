
  function countOddEven(arr) {
        // Your code here
    let oddCount = 0;
    let evenCount = 0;
    
    for (let index = 0; index < arr.length; index++) {
        if(arr[index] % 2 === 0){
            evenCount++;
        }
        else{
            oddCount++;
        } 
    }
    return [oddCount, evenCount]; 
}


arr = [1, 2, 3, 4, 5];

console.log(countOddEven(arr));
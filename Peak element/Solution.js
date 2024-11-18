
class Solution {
    peakElement(arr) {
        // Code here
    for (let i = 0; i < arr.length; i++) {
        if(i == 0){
            if(arr[i] >= arr[i +1])
            return i;
        }
        else if(i == arr.length - 1){
            if(arr[i] >= arr[i-1])
                return i;
        }
        else{
        if(arr[i] >= arr[i - 1] && arr[i] >= arr[i + 1]){
            return i;
        } 
        }
    }
   return -1;     
}
}
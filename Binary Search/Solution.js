class Solution {
    binarysearch(arr, k) {
    let first = 0;
    let last = arr.length - 1;
    
    while (last >= first) {
        let mid = Math.floor((first + last) / 2);
        
        if (arr[mid] === k) {
            return mid;
        }
        
        if (arr[mid] < k) {
            first = mid + 1;
        } else {
            last = mid - 1;
        }
    }
    return -1;
    }
}
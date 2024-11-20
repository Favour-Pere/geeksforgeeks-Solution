
class Solution {
    countryAtWar(arr1, arr2) {
        let countryA = 0;
        let countryB = 0;
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] > arr2[i]) {
                countryA++;
            }
            else if (arr2[i] > arr1[i]) {
                countryB++;
            }
        }

        if (countryA > countryB) {
            return "A";
        }
        else if (countryB > countryA) {
            return "B";
        }
        else {
            return "DRAW"
        }
    }
}


arr1 = [1, 2, 3, 4, 5];

arr2 = [4, 3, 2, 1, 2];

test = new Solution();

console.log(test.countryAtWar(arr1, arr2));
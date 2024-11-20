class Solution{
    isParenthesisBalanced(s) {
        // code here
        const stack = [];
        const bracketPairs = { 
            '}' : '{',
            ')' : '(',
            ']' : '['
        }

        for (const char of s) {
            if(char === '{' || char === '(' || char === '['){
                stack.push(char);
            }
            else if(char === '}' || char === ')' || char === ']'){
                if(stack.length === 0 || stack[stack.length -1] !== bracketPairs[char] ){
                    return false;
                }

                stack.pop();
            }
        }

        return stack.length === 0;
    }
}
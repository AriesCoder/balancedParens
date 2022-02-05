// Sample Strings
let sample1 = "This ( is unbalanced."
let sample2 = "(This (is (a) balanced) string.)"
let sample3 = "This is () also ) unbalanced."
let sample4 = "Balanced."
let sample5 = "balanced () but ( not ) valid(."

// Write your solution below:
const hasBalancedParens = (string) => {
    let openParen = '('
    let closedParen = ')'
    let parenArr = []
    let openCount = 0
    let closedCount = 0

    for(let i = 0; i < string.length; i++){
        if(string[i]=== openParen || string[i] === closedParen){
            parenArr.push(string[i])
        }
    }
    for(let j = 0; j < parenArr.length; j++){
        if(parenArr[0] === closedParen || parenArr[parenArr.length-1] === openParen){ //check if the parentheses are valid or not
            return 'not a valid parenthesis'
        }
        else if(parenArr[j] === openParen){
            openCount +=1
        }
        else{
            closedCount +=1
        }
    }
    return openCount === closedCount
}

console.log(hasBalancedParens(sample5))
'use strict';

function bracketValidation(str) {
  const validationStack = new Stack();
  if (typeof str !== 'string') {
    return false;
  }
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(' || str[i] === '{' || str[i] === '[') {
      validationStack.push(str[i]);
    }
    if (str[i] === ')') {
      if (validationStack.peek() === '(') {
        validationStack.pop();
      }
    }
    if (str[i] === '}') {
      if (validationStack.peek() === '{') {
        validationStack.pop();
      }
    }
    if (str[i] === ']') {
      if (validationStack.peek() === '[') {
        validationStack.pop();
      }
    }
  }
  if (validationStack.length === 0) {
    return true;
  }
  return false;
}

/**
 * 단축 평가
 * : 논리 연산에서 굳이 불필요한 연산을 생략하는 방법
 */

console.log(false && true);
console.log(('엄청 긴 수식') && ('엄청 긴 수식 2'));
// false가 나올 가능성이 높은 수식을 먼저 연산 (and 연산)
//                                        | ------> 불필요한 연산         
console.log(true && true && true && false && true && true && true);

// true가 나올 가능성이 높은 수식을 먼저 연산 (or 연산)
//                                           | ------> 불필요한 연산         
console.log(false && false && false && false && true && false && false);





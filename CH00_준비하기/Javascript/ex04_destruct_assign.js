/*
* 구조 분해 할당(Destructin assignment)
* : 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에
* 담을 수 있게하는 자바스크립트 표현싣ㄱ
*/

let a, b, rest;

[a, b] = [10, 20];
[a, b, ...rest] = [10, 20, 30, 40, 50];

// 객체 구조 분해
const o = {p:42, q:ture};

let {p, q} = o;
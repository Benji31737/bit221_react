/* [const]
  constant(상수)를 뜻
    '항상 같은 수'
  변수(變數)인데 상수(常數)
  변치 않는 값을 갖는 변수
  - const로 선언한 변수는 값의 재할당 불가(X)
  - 반드시 선언과 동시에 값이 할당되어야
 */  


  const PI = 3.141592;
  let radius = 10;
  console.log(`반지름이 ${radius}인 원의 넓이는 ${radius**2*PI} 입니다.`);

var sn;
sn = 'K2022-13';
console.log('SN : ' + sn);

const SN = 'K2022-13';

/* [let]
 * 변수(變數)
 * 다른 값이 재할당 가능(O)
 */
let score;
score = 100;
score = 200;


/*
* var vs let
*/
var some = 104;
some = 1004;


/*
* 호이스팅(Hoisting)
*/

// var로 변수를 위에서
console.log('odd = ', odd);

var odd=1;

console.log('odd = ', odd);

/*
*변수 범위(scope) : 프로그램 내에서 변수의 접근 수준
*var : 함수형 변수(function-scope)
*let : 영역형 변수(block-scope)
*/
9


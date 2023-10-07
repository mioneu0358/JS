console.log("Hello World");
/**변수(Varialble)
 * 변수 선언 종류: var, let, const
 * var: JavaScript 초창기의 변수 선언 방식
 * ex)
 * var x ; // x라는 식별자로 변수 생성, 다만 값이 저장되어있지 않다.
 * console.log("x = ",x); // x = undefined 하고 출력 
 * 
 * x = 5;
 * console.log("x = ", x); // x = 5 하고 출력  
 * 
 * 변수 여러개 동시에 생성 및 초기화
 * var a = 1, b = 2, c = 3;
 */





/** 호이스팅(Hoisting): 변수 선언 끌어올림
 * 선언 되지 않은 변수를 참조하려 할 경우 참조 에러 발생
 * 단, 참조 보다 밑에 변수를 선언한다면, 호이스팅 발생, 변수에 값이 저장되어 있다 하더라도 undefined로 구분
 * JavaScript는 실행 방식은 interpreter방식이긴 하나, 코드를 실행하기 전에 먼저 실행 환경을 구성한다.
 * 먼저 선언문들을 확인하고, 메모리에 공간을 할당한다. 그렇다고 해서 변수에 값이 저장되어있는 상태가 아닌 값이 없는 undefined로 본다.
 */

// console.log("y = ",y);
// var y = 3;              // 이 코드가 없으면 위 console.log("y = ",y); 코드는 에러를 발생시킨다.


/** let과 const
 * let: var 이후에 나온 변수 선언방식, 호이스팅에 적용되지 않으며, 참조범위(scope)를 벗어나면 참조되지 않는다.
 *     그래서 앞으로 var는 사용하지 않고 let으로만 변수를 선언할 예정
 * const: 변수의 상수화, const 키워드로 선언된 변수는 상수로서의 의미를 가지는 것이고, 상수라는 의미 그대로 변하시킬 수 없는 값이 된다.
 */
//console.log("a = ",a);  // let으로 생성한 변수이므로 호이스팅 되지 않아 에러 발생
let a = 3;
console.log("a = ",a);    // a = 3하고 출력
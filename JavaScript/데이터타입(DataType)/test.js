/** 정적 타입과 동적타입
 * 정적 타입 언어: C, C++,C#, java....
 * C언어 코드 변수 선언 방식
 * int i = 3;
 * char c = 'a';
 * float f = 3.12;
 * 변수 선언시 자료형을 명시하며 해당 자료형의 크기만큼 메모리 공간을 할당
 * 
 * 
 * 동적 타입언어: python, Javascript, Ruby...
 * 
 * JavaScript 데이터타입의 종류
 * 원시타입(Primary Type): Number(숫자),String(문자열),Boolean(논리), undefined(값이저장되어있지 않다.), null(값이저장되어있지 않다.), Symbol(고유값 생성)
 * 기본적으로 원시타입은 immutable(불변의, 변하지 않는)하다.
 * 객체타입(Object Type): 원시탑을 제외한 나머지 
 * 
 * 원시타입
 * Number: 정수(int)와 실수(float)를 구분하지 않고 Number로 표현한다. JavaScript는 모든 수를 64bit의 부동소수점으로 표현하고 있다. (단, 배열 인덱스와 비트 연산은 32bit 정수로 처리한다.)
 * 단, 부동소수점은 오차가 발생하므로 정확도가 보장되는 정수는 2의 53승까지이다. 900719925470992
 * 코드 작성시 직접 입력하는 상수값들을 리터럴(Literal)이라고 한다. 정수리터럴의 경우 10,8(0o),16(0x)진수등을 표현하는 방식,부동소수점 리터럴은(3.12, 1e3,등이있다.)
 * 이 이외의 값으로는 infinity, NaN 등이있다.
 * 
 * String
 * 
 * 
 * Boolean(논리값)
 * true/false 두개의 논리값을 가지는 자료형
 * 
 * Undefined와 null
 * 둘 다 값이 없다를 의미
 * undefiend: 보통 사용자의 의도없이 값이 저장되지 않았다면 JS가 자동으로 넣어주는 값
 * 값을 아직 할당하지 않은 변수의 값, 객체의 없는 프로퍼티를 읽을때, 없는 배열의 요소를 확인 할때, 함수의 결과값이 없을때, 함수를 호출할때 전달받지 못한 인수를 표현할때
 *  
 * null: 사용자가 의도적으로 값이 없다를 나타내는 리터럴
 * 
 * Symbol(심볼)
 * ECMAScript6에서 추가된 원시값. 심볼은 자기 자신을 제외한 모든 값과 다른 유일무이한 값으로 표현
 * Symbol.for() 메서드를 사용하면 문자열과 연결된 심벙를 생성할 수 있다.
 */

let bye = "Good \x62\x79\x65"      // Latin-1 또는 ASCII 표현방식
console.log(bye);

// 반가워요 출력(4자리 유니코드)
let Hello = "반\uAC00워요!";
console.log(Hello);

// Read My JavaScript [책 아이콘]출력
// 16진수 코드 포인트(새로운 문자를 표현하기 위한 확장판)   서로게이트 페어
let readBook = "Read My Javascript \u{1F4D6}"
console.log(readBook);

// boolean
let xa = 3;
console.log("xa == ",3,"=", xa == 3);
console.log("xa == ",4,"=", xa == 4);

// undefined/null
let empty;
console.log(empty);    // undefined
empty = null;
console.log(empty);    // null


// Symbol

let sym1 = Symbol();            // Symbol(값)에서 값이 의미하는건 변수를 설명하는 값을 넣을 뿐, 설명이 같다고 해서 두 Symbol이 같은것은 아니다.
let sym2 = Symbol();
console.log(sym1 == sym2);      // Symbol은 유일무이한 값이므로 어떤 값들과 비교하더라도 다르다.

let Heart = Symbol("하트");
console.log(Heart.toString());

let sym3 = Symbol.for("club");  // Symbol.for(문자열) 로 같은 키값을 활용한 동일한 심볼을 만들 수 있다.
let sym4 = Symbol.for("club");
console.log(sym3 == sym4);

let sym5 = Symbol("club");
console.log(sym4 == sym5);
/*****************
 * 1. string 메소드
 ******************/

let str ="hello world!";

console.log("charat(0):",str.charAt(0));
console.log("str[0]:", str[0]);
//charCodeAt: 특정 인덱스의 유니코드 값(숫자)
console.log("charCodeAt:", str.charCodeAt(0));
//str.codePointAt:특정 인덱스의 유니코드 값(숫자/undifined)
console.log("str.codePointAt:", str.codePointAt(0));
//concat:입력받은 문자열을 원본 문자열에 이어붙이고 새로운 문자열을 반환
console.log('concat("안녕"):', str.concat("안녕"));

//endsWith: ES6부터 추가된 함수, 해당 문자열로 끝나는지 확인
console.log("endsWith(world!)",str.endsWith("world!"));

//starsWith: ES6부터 추가된 함수. 해당 문자열로 시작하는지 확인
console.log("starsWith(hello)",str.startsWith("hello"));

//inclueds : ES6부터 추가된 함수. 원본 문자열 안에 substring이 존재하는지 확인
console.log('includes("llo wor")',str.includes("llo wor"));

//indexof: 원본 부자열에 substring을 찾고 그 시작위치를 반환
console.log('indewof("world")',str.indexOf("world"));

//lastindewof():원본 문자열에서 substring을 찾고 그 마지막 위치를 반환
console.log('lastindexof("l")',str.lastIndexOf("l"));

//localeCompare: C의 strcmp와 비슷한 역할 옵션으로 locale(code page)값을 넘길 수 있다.
console.log('localeCompare("g"):',str.localeCompare('g'));
console.log('localeCompare("hello world!"):',str.localeCompare('hello world!'));
console.log('localeCompare("i"):',str.localeCompare('i'));

//match: 정규 표현식(Regular expression, RegEx)으로 표현된 문자의 필터에 걸리는부분 문자열 반환.
//matchAll: 위와 같으나 매칭되는 모든 부분 문자열 반환.


//slice: 시작~끝 위치 까지의 부분 문자열 반환
console.log('slice(0,5)',str.slice(0,5));

//split: 주어진 부분 문자열로 원본 문자열을 잘라서 배열로 반환
console.log('split(" "):',str.split(' '));


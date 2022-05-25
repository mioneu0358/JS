/*****************
 * 3. spread 연산자
 ******************/


// arr 과 newArr은 다른 메모리 영역의 데이터임.
//spread연산자(...x)는 뒤에 오는 순회 가능한 x의 데이터를
//x0,x1,x2,...xn 식으로 펼쳐놓는다.
// let arr = ["apple", "orage", 100];
// let newArr = [...arr];

// console.log('두 배열의 값:',arr,newArr);
// console.log("둘의 참조는 같은가?:", arr === newArr);



// *** == 와 === 의 차이***
// javascript에서의 == : 숫자를 숫자 리터럴과 비교해도 허용
// javascript에서의 === : 무조건 같은 타입의 비교만 허용
// console.log('0 == "0":',0 == "0");
// console.log('0 == []:',0 == []);
// console.log('"0" == []:',"0" == []);

// console.log('0 === "0":',0 === "0");
// console.log('0 === []:',0 === []);
// console.log('"0" === []:',"0" === []);


// spread연산자의 활용
// 활용1. 새로운 배열 생성시, 배열 사이에 배열 끼워넣기
let parts = [300,400,500];
let full = [100,200, ...parts, 600];
console.log(full);

// 활용2. 함수의 개별 파라미터로 값 전달하기.
function sum(a,b,c){
    console.log(a+b+c);

}
let nums = [100,200,300,400];
sum(...nums);

// 만약 spread를 쓰지 않는다면 sum(nums[0],num[1].num[2])



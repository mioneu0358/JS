/*****************
 * 2. 배열 순회
 ******************/

let data = [1,2,undefined,NaN, null, 'Hello"'];

// 첫번째 방법 - for문
for(let i=0; i< data.length; i++){
    console.log('for문에서:', data[i]);
}

//두번째 방법 - forEach 메소드
data.forEach(function(currValue){
    console.log('forEach에서:', currValue);
});


//세번째 방법- for-in문
//for-in에는 문제점이 있다.
// 새로운 정보를 Array 의 prototype에 등록하는 경우, 배열 순회시
// 가지고 있지 않은 "상위 객체"의 정보까지 모두 가져와버림
Array.prototype.getIndex = function(){return "Array의 새로운 함수;"}
for (let i in data){
    console.log('for-in문에서:', data[i]);
}
// 이 같은 상황이 발생하지 않을 것이라고 보장할 수 없기 때문에, for-in은 되도록 쓰지 않는다.

//네번째 방법 - for-of문(ES6에서 추가)
// 파이썬의 for-in문법이랑 똑같다고 생각하면 된다.
//순회 가능한 객체의 데이터를 하나씩 가져온다. (문자열에도 사용 가능)
for(let value of data){
    console.log('for-of문에서:', value);
}

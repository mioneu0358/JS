/*****************
 *1. Map and WeakMap
 ******************/

 const {inspect} = require('util');
// let obj = {name:"unique"};

 //Map = Key-value 구조
//  let myMap = new Map();
//  // map에  값 삽입
//  myMap.set(1,"1")
//  myMap.set({ name : 'park'},29);
//  myMap.set(obj,30);

//  console.log(myMap);
// //map에서 값 출력

// 객체는 내용이 같다고 실제로 같은 객체는 아니다.
//  console.log(myMap.get({ name: 'park' }))
//  console.log(myMap.get(obj));

//  myMap.forEach((value,key)=>{
//      console.log(key , value);
//  });

 //WeakMap: WeakSet과 마찬가지로 키값으로 객체만 받을수 있다.

 let myWeakMap = new WeakMap();
 let func = function(){};
 myWeakMap.set(func,0);
// console.log(inspect(myWeakMap, {'showHidden' : true}));

// 함수의 호출 횟수를 알아보고자 할 때 이런식으로 응용가능
let count = 0;
for(let i =0; i<10; i++){
    count = myWeakMap.get(func);
    func();
    count ++;
    myWeakMap.set(func, count);
}
console.log(inspect(myWeakMap, {'showHidden' : true}));

//얖은 참조 이므로 GC의 대상.
func = null;

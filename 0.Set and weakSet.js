/*****************
 *0. Set and WeakSet
 ******************/


// let arr = [1,2,3,4];
// let mySet = new Set();
// console.log(toString.call(mySet))
// mySet.add(arr);
// mySet.add("park");
// mySet.add(1);
// mySet.add(1);
// console.log(mySet)
// console.log(mySet.has("park"));

// let arr2 = arr;
// // 참조형이기 때문에 원본갑싱 변겨오디면 Set 내부에서도 바뀌어 보임.
//   arr[0] = 'change';
//   console.log(mySet);
// // 여기서 참조가 소실되어도 Set의 arr은 GC의 대상이아니다.(깊은 참조)
// arr = null;


// for(let item of mySet){
//     console.log(item);
// }


// WeakSet: 참조를 가지는 객체만 저장 가능
//          객체 형태를 중복없이 저장하려고 할때 유용하다.

let array = [1,2,3,4];
let array2 = [5,6,7,8];
let obj = {array,array2};
let myWeakSet = new WeakSet();

myWeakSet.add(array);
myWeakSet.add(array2);
myWeakSet.add(obj);

// 참조가 없는 객체들은 add가 불가능
// myWeakSet.add("123");
// myWeakSet.add(1);

// 외부에서 array에 대한 참조를 제거하면GC의 대상이 됨(얕은 참조)
array = null;

// util이라는 모듈을 가져오고 모듈중 ispect라는 함수를 콕 찝어 가져온것.
const {inspect} = require('util');
console.log(inspect(myWeakSet,  {'showHiddeon' : true}));
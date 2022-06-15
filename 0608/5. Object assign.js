/*****************
 * 5. Object assign
 ******************/


//Object.create= 기존 객체를 Deep copy한 새로운 객체를 반환

const personObj = {
    showName: function(){
        console.log(this.name);
    },
    showAge : function(){
        console.log(this.age);
    }

}

let myPersont1 =Object.create(personObj);
myPersont1.name = "홍길동";
myPersont1.age = 20;
// myPersont1.showName();
// myPersont1.showAge();


//Object.assign = 0번 인자값(객체)에 1번 인자값(객체)을 추가한 객체를 반환함.
// 기존 prototype 객체에 필요한 객체를 추가하여 활용할 수 있다.
let myPersont2 = Object.assign(Object.create(personObj),{
    name: '박찬빈',
    age: 29
});

// myPersont2.showName();
// myPersont2.showAge();

// 주의
let myPersont3 = Object.assign(personObj,{
    name1: "원본에"
});


let myPersont4 = Object.assign(personObj,{
    name2: "새로운 값이 계속 추가"
});


console.log(personObj);

/************************
 * 4. Class
 ************************/

// 기존의 javascript는 class가 없다.ES6에서 추가됨

//class 이전의 객체 생성방식 => 객체 Prototype을 정의

function Person(name = '박찬빈'){
    this.name = name;
}

Person.prototype.showName = function(){
    console.log(this.name);
};

const p1 = new Person();
p1.showName();


// class를 통한 객체 생성방식

class People{
    constructor(name = "박찬빈", age = 29){
        this.name = name;
        this.age = age;
    }

    showName(){
        console.log(this.name);
    }

    
}
// 선언 형태만 다를 뿐, 기존 객체  Prototype 함수와 동일하다.

People.prototype.showAge = function(){
    console.log(this.age);
};
console.log("Person의 타입은?",typeof Person);
console.log("People의 타입은?",typeof People);

const p2 = new People();
p2.showAge();
p2.showName();
/*****************
 * 0. Object
 ******************/

//1. 리터럴 방식
// 객체의 기본적인 생성방법. 프로퍼티를 수동으로 설정
const name = 'park';
const age = 29;
const obj ={
    //프로퍼티 : 값
    //프로퍼티랑 값이 같으면 프로퍼티 생략 가능
    name: name,
    age: age
};
console.log('obj =', obj);


//2. Object()생성자 함수 사용
// new 키워드를 사용하여 빈  object객체를 생성후 프로퍼티 설정
// new = malloc과 같이 새로운 공간을 만들어준다는 의미
const obj2 = new Object();
obj2.name ='park';
obj2.age = 29;
obj2["job"] = "programmer";
console.log('obj2=', obj2);


//3. 생성자 함수를 직접 만들어 사용.
//생성자 함수를 직접 정의 하여, this 키워드를 통해 프로퍼티 생성
function myObject(){
    // new를 붙여 호출한경우 
    // this = {}; 가 암시적으로 생성
    // console.log(this);


    this.name = 'park';
    this.age = 29;
    this.setName = function(newName){
        this.name = newName;
    }
    this.getName =function(){
        return this.name;
    }
    this.setage = function(newage){
        this.age = newage;
    }
    this.getage = function(){
        return this.name;
    }
    this.printInfo = function(){
        console.log('name:', this.name, ',', 'age:', this.age);
    }
    //new를 붙여 호출한 경우
    //return this; 암시적으로 this를 리턴
}
const obj3 = new myObject();
obj3.setage(30);
obj3.setName('kim');
// obj3.printInfo();

console.log(obj3);

const obj4 = myObject();
console.log(obj4);


// 4.간단한 객체 생성법(ES6)
//key, value가 서로 동일한 이름이라면 , key를 생략할수 있다.
function simpleObject(name, age){
    return {
        //new를 툽여 생성할 필요가 없다.
        // 이 안의 this는 이미 이 객체를 가리킨다.
        name,
        age,
        getName(){return this.name;},
        setName(newName){this.name = newName;},
        getAge(){return this.age;},
        setAge(newAge){this.age = newAge;},
        printinfo(){console.log('name:', this.name, ',', 'age:', this.age);}
    };
}
var obj5 = simpleObject('park.',29);
obj5.printinfo();

var obj6 = new simpleObject("kim",30);
obj6.printInfo();

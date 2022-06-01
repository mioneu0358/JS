/*****************
 * 1. Destructing 
 ******************/

// 기존 배열 데이터를 읽는 방식
let data = ["apple",'banana','melon'];
let apple = data[0];
let banana = data[1];
console.log(apple,banana);

//Destructing 을 통해 읽는 방식.
//[]를 사용한 이유는 받아올 데이터가 배열이기때문에사용
let [,a,b] = data;
console.log(a,b);

let obj = {
    name :'park',
    age: 29,
    job: "programmer",
};
let name0 = obj.name;
let age0 = obj["age"];
console.log(name0,age0);

//Destructing을 통해 객체 데이터 가져오기
var {name,job} = obj;
console.log(name,job);


//3. json 형식 데이터를 Destructing 으로 가져오기
let persons = [
    {
        "name" : 'park',
        "age": 29,
        "todo":[
            'work',"study", "sleep"
        ]
    },
    {
        "name": "kim",
        "age": 30,
        "todo": [
            "work",'eat',"sleep"
        ]
    }
]
/*
let [,person2] = persons;
var {name,todo} = poerson2;
console.log(name, todo);*/

var[,{name,todo}] = persons;

console.log(name, todo);

// 매개변수 Destructing
function getTodoList([{todo}])
{
    console.log(todo);
}
getTodoList(persons);

/*****************
 * 1. let과 closure
 ******************/

// document: HTML에서 생성되는 DOM 객체. 모든 객체들의 root.
// let list = document.querySelectorAll("li");

// 가져온 li 태그가 붙은 객체들에게 클릭 이벤틀을 부여.
// for(var i=0; i<list.length; i++){
//     //넘겨준 callback함수는 나중에 실행된다.
//     //함수 내에서 참조하는 i는 closure변수로 , 값이 아닌 변수 자체를 참조한다.
//     //따라서 , 리스너에 등록된 모든 함수의 i는 동일한 값을 출력한다.
//     list[i].addEventListener("click", function() {
//         console.log(i + "번째 리스트 입니다.");
//         }
//     );
// }
//위의 문제를 해결하기 위해 "블록 범위"의 지역 변수 let을 활용한다

// for(let i =0; i< list.length; i++){
//     list[i].addEventListener("click", function(){
//         console.log(i+ "번째 리스트 입니다.");
//         }
//     );
//     //생성된 n은 블록범위이기 때문에 for문의 마지막에서 소멸하지만,
//     //closure가 바인딩 하고 있기 때문에 활성 객체로 존재함.
// }

//closure(클로저)란 무엇인가?------------------------------------------
/*
    클로저는 자바스크립트 고유의 개념이 아닌, 함수를 일급 객체로 취급하는 함수형 프로그래밍  
    언어에서 사용되는 중요한 특성이다(함수형 언어: Erlang, Scala, Hasell, lisp...등)

    MDN에서 정의하는 클로저에 대한 개념:
    "A closure is the combination of a function bundled together (enclosed)
    with references to its surrounding stata(the lexical environment"
    직역하면 클로저라고 하는 것을 함수와 그 주변 환경 (렉시컬 환경)에 대한 참조의 조합"을 의미한다.
    즉, 함수가 어디에서 선언되었는지 따라 참조가능한 변수들이 달라진다.
*/

// inner 는 outer의 내부에 존재하기 때문에 inner의 
// 상위 스코프에 있는 변수나 함수를 참조할 수 있다.
// 이를, "렉시컬 스코핑(lexical scoping)"이라 한다.

// function outer(){
//     var x =10;
//     var inner = function() {console.log(x);};
//     inner();
// }
// outer();

//코드를outer에서 호출하는 것이 아니라 반환하는 것으로 바꾼다면?
// function outer(){
//     var x =10;
//     var inner = function() {console.log(x);};
//     return inner;
// }

// //outer를 호출하면 내부함수 inner가 반환된다.
// //outer의 호출이 끝나면, outer에 대한 컨텍스트는 소멸한다.

// var inner= outer();
// //outer 컨텍스트는 종료되었지만, x의 값은 정상적으로 출력
// inner();

// 위 처럼, 자신을 포함하고 있는 외부 함수보다 내부 함수가 더 오래 유지되는 경우.
// 외부 함수 밖에서 내부 함수가 호출되더라도, 외부함수의 지역변수에 접근할 수 있는데.
//이러한 함수를 클로저(closure)라고 부른다.
// -----------------------------------------------------------------------



// 실행 컨텍스트(excution context)란 무엇인가?------------------------------------------

// 실행 컨텍스트는 scope, hoisting, this, funcion, closure등의 동작원리를 담고 있는 
// 자바스크립트의 핵심 원리이다.
// ECMAScrpit 스펙에 따르면 실행 컨텍스트를 실행 가능한 코드를 형상화하고 구분하는 추상적인개념이라고 정의한다.
// -> 실행 컨텍스트는 실행 가능한 코드가 실행되기 위해 필요한 환경이라고 할 수 있다.

// 자바 스크립트 엔진은 코드를 실행하기 위하여 실행에 필요한 여러가지 정보를 알고 있어야한다.
// 실행에 필요한 여러가지 정보란 아래와 같은 것들이다.
// *변수: 전역 변수, 지역변수, 매개변수, 객체의 프로퍼티,\
// *함수 선언
// *변수의 유효범위(scope)
// *this
//     이와 같은 실행에 필요한 정보를 형상화 하고 구분하기 위해 
//     JS엔진은 실행 컨텍스드를" 물리 객체"의 형태로 관기한다.

// 아래의 예시를 확인해보자
var x= "xxx";
function foo(){
    var y ='yyy';
    function bar(){
        var z= 'zzz';
        console.log(x+y+z);
    }
    bar();
};
foo();
// 함수 호출시 동작은 다른 언어와 다를 것 없다.


// {/* <실행 컨텍스트의 추상적 형태> */}
// GlobalExcitionContext ={
//     lexicalEnvironment:{
//         EnvironmentRecord;{
//         Type: "Object",
//         //식별자에 대한 바인딩 구조가 여기에 쓰임.
//         },
//     outer:<null>,
//     this: <global object>
// }
    
// }
// FunctionExecutionContext={
//     LexicalEnvironment:{
//         EnvironmentRecord:{
//             Type: "Declaritive",
//             // 식별자에 대한 바인딩 구조가 여기에 쓰임.
//         },
//         // outer: <전역 또는 외부 함수에 대한 참조>
//         // this: <함수가 어떻게 호출되느냐에 따라 다름>
//     }
// }




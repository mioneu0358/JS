/************************
 * 3. Default parameter and Rest parameter
 ************************/


// 파이썬의 매개변수 기본값과 같음


// function multiply(value,size = {value:1})
// {
//     return value * size.value;
// }

// console.log(multiply(5));
// console.log(multiply(5,{value: 3}));


//rest parameter는 spread연산자와 비슷하다. 동작은 다름.
// 몇개의 인자값이 들어올지 예상할 수 없을때 활용가능.

//들어오는 값이 숫자인지 아닌지 판별하는 함수 작성\
//rest parameter를 사용하지 않을때 arguments사용
//arguments는 배열이 아닌 유사배열이므로 배열의 기능 사용 불가

function checkNum1(){
    let argArr = Array.from(arguments);
    argArr.forEach((value)=>{
        if (typeof value === "number")
            console.log(value,"는 숫자입니다.");
        else
            console.log(value,"는 숫자가 아닙니다.");
    });
}
checkNum1(10,2,"5");


//rest parameter사용
function checkNum2(...argArr){
    argArr.forEach((value)=>{
        if (typeof value === "number")
            console.log(value,"는 숫자입니다.");
        else
            console.log(value,"는 숫자가 아닙니다.");
    });
}
checkNum2(10,2,"5");

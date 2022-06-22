/*****************
 * 5. 문제
 * 
 * 
 * filter, includes, from 을 사용해서 문자열 'e'가 포함된
 * 배열을 만들어서 반환하기
 ******************/



// //[].filter(function(currValue){return true or false})


function print(){
    const inputList = document.querySelectorAll('li');
    const inputArr = Array.from(inputList); //iterable객체를 배열로 반환
    
    const resultArr = inputArr.filter(function(currValue){
        return currValue.textContent.includes("e");
    })
    return resultArr;

}

console.log(print())

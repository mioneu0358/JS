/*****************
 * 4.from 메소드
 ******************/
// 가변 매개변수처럼 사용이 필요한 경우 함수의  arguments 속성을 사용
// 실제로 파라미터는 비었지만 넘긴값은 arguments에 저장된다.
function addMark(){
    // 배열이 아닌것(Array-like, iterable object)을 배열로 만들어주는 from 사용.
    let newArr = Array.from(arguments);

    let newData = newArr.map(function(value){
        return value + '!';
    });
    console.log(newData);
}
addMark(1,2,3,4,5);


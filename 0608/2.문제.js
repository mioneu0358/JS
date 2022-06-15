/*****************
 *2. Lotto번호 만들기
 유일한 값을 추출하는 과정에서 Set을 사용할것
 함수에 변수를 전달하는 과정에서 Destructing을 사용할 것
 ******************/
//0.0~1.0사이의 랜덤한 실수 반환
// console.log(Math.random());

 const SETTING = {
     name : "LUCKY LOTTO",
     data : "2022-06-08",
     count : 6 ,
     maxNumber : 45
 };
 function getRandomNumber({count,maxNumber})
 {
    let nums = new Set();
    let num = 0;
    while (nums.size < count)
    {
        num = Math.random()* maxNumber;
        nums.add(Math.ceil(num));
    }
    let [...ret] = nums.values();
    ret.sort((a,b) => a-b)

    return ret;

 }

 console.log(getRandomNumber(SETTING));

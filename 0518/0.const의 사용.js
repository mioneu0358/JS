/*****************
 * 0. 변수의 범위
 ******************/


// function foo()
// {   //const가 등장하기 이전의 javascript는 상수값을
//         // code convention으로 대문자 표기법을 사용하였다.
//     var HOME_NAME = 'home';
    
//     //실제 상수로 인식되며 이후 재할당이 불가능하다.
//     const homename = 'home';
//     // homeName = 'newHome';
// }

// const와 immutable array(또는 immutable한 객체들)
// const는 "불변(immutable)"을 의미하지 안흔다.
// 만약 const에  할당된 값이 배열이나 오브젝트 값은 "mutable" 객체라면,
// 해당 객체를 접근하여 값을 수정하는 것은 가능하다.

// function foo2(){
//     const list = ["apple", "orange", "banana"];
//     //list = "fruits"; // <- 오류 발생.
//     list.push("watermelon"); //오류가 아님.
//     //즉 , const를 사용하더라도 배열과 오브젝트의 값을 변경 가능하다.

// }
// 원본 배열의 immutability를 지켜주기 위해서는 어떻게 해야 할까?
// function foo3(){
//     const list = ["apple", "orange", "banana"];
//     // const변수의 경우 "방어적"으로 사용하는 습관이 필요함.
//     const list2 = list.concat("watermelon");
//     //원본 배열은 그대로 두고 원본 배열을 수정한 복사본을 생성
//     console.log("list와 list2는 서로 같다?", list== list2);
//     console.log("list:", list);
//     console.log("list2:", list2);
// }
// foo3();

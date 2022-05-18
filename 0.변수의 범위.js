/*****************
 * 0. 변수의 범위
 ******************/
 //변수 선언의 종류
 //var , let, const

 //var: 옛날 Javascript 버전에서 사요하던 변수 선언 키워드
 //let, const :비교적 최근에 사요하기 시작한 변수 선언 키워드

 //전역으로 선언되 var, let변수는 스크립트 어디서든 참조 가능
 var namevar = "global var";
 let namelet = "global let";

function func() {
    console.log(namevar);
    console.log(namelet);

    //아래쪽 코드의 실행결과 var로 선언된 변수는
    // 동일 영역 내에서 어디든지 참조가 가능하다.
    // 그러므로 최근에는 쓰지 않는것이 대세다.

    for(var i =0; i< 10; i++){
        console.log('for 블록 안쪽 i = ' + i)
    }
    console.log('for 블록 바깥 i = ' + i);

    if (ture){
        var ifvar ='ifvar';
    }
    console.log(ifvar);

    //let은 var와 다르게 블록 범위를 가지는 변수다.
    //따라서 선언된 블록을 벗어나면 더이상 참조할수 없다.

    /*for (let j =0; j< 10; j++){
        console.log('for블록 안쪽 j = ' +j);
    }
    console.log('for 블록 바깥 j = ' + j);*/


    //const 키워드는 C의 const처럼 변수를 상수화 한다.
    const number = 10;
    //number = 9;
}


func();
 
window.addEventListener('load', function() {
    loadUserInfo();
});

// 서버로 부터 user 정보 요청 및 출력
async function loadUserInfo() {
    let url    = '/git/user';
    let method = 'GET';

    // 요청 후 응답 객체 받기
    let response = await fetch(url, { method: method });
    // 응답 body에서 json 객체 받기
    let user     = await response.json();
    
    // 데이터를 뿌려줄 HTML 엘리먼트 수집
    let userImg  = document.querySelector('#user-img');
    let userName = document.querySelector('#user-name');
    let userEmail= document.querySelector('#user-email');

    userImg.src        = user.img;
    userName.innerText = user.name;
    userEmail.innerText= user.email;
}
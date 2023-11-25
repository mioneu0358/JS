window.addEventListener('load', function() {
    loadUserInfo();
    loadUserRepo();
    loadUserGist();
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
    let userLink = document.querySelector('#user-link');

    userImg.src         = user.img;
    userName.innerText  = user.nickname + ' ' + user.name;
    userEmail.innerText = user.email;
    userLink.href       = user.url;
}

// 서버로 부터 리포지터리 목록 요청 및 출력
async function loadUserRepo() {
    let url    = '/git/repo';
    let method = 'GET';

    // 요청 후 응답 객체 받기
    let response = await fetch(url, { method: method });
    // 응답 body에서 json 객체 받기
    let repo     = await response.json();

    let repoList = document.querySelector('#repo-list');

    for (let r of repo) {
        // 리스트 아이템 요소 생성
        let li = document.createElement('li');
        li.className = 'list-group-item';

        // 링크 요소 생성
        let a = document.createElement('a');
        a.href = r.url;
        a.innerText = r.title;

        // li 안에 a 삽입
        li.append(a);
        // ul 안에 li 삽입
        repoList.append(li);
    }
}

// 서버로 부터 gist 목록 요청 및 출력
async function loadUserGist() {
    let url    = '/git/gist';
    let method = 'GET';

    let response = await fetch(url ,{ method: method });
    let gist     = await response.json();

    let gistList = document.querySelector('#gist-list');

    for (let g of gist) {
        let li = document.createElement('li');
        li.className = 'list-group-item';

        let a = document.createElement('a');
        a.href = g.url;
        a.innerText = g.filename;

        li.append(a);
        gistList.append(li);
    }
}
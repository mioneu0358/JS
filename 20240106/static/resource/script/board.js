window.addEventListener('DOMContentLoaded', function() {
    loadCategories();
    loadPosts();
});

/**
 * 카테고리 불러오기
 */
async function loadCategories() {
    let response = await fetch('/board-api/category', {
        method : 'GET',
        headers: { 'Content-Type': 'application/json' }
    });
    let categories = await response.json();

    let categoryList = document.querySelector('#category-list');

    for (let category of categories) {
        let a = document.createElement('a');
        a.className = 'category';
        a.innerText = category.title;

        categoryList.append(a);
    }
}


/** 
 * 카테고리 번호에 해당하는 post 불러오기
 */
async function loadPosts() {
    let response = await fetch('/board-api/posts', {
        method : 'GET',
        headers: { 'Content-Type': 'application/json' },
        // body: JSON.stringify({'categori_id': 1})
    });
    let posts= await response.json();
    console.log(posts);

    let postList = document.querySelector('#post-list');

    for (let post of posts) {
        let a = document.createElement('a');
        a.className = 'post';

        let No = document.createElement('div');
        No.className = 'w10 txt-center';
        No.innerText = post.no;

        let title = document.createElement('div');
        title.className = 'w70 txt-left';
        title.innerText= post.title;

        let crt = document.createElement('div');
        crt.className = 'w10 txt-center';
        crt.innerText=post.crt;
        
        let view = document.createElement('div');
        view.className='w10 txt-center';
        view.innerText = post.view;

        a.append(No);
        a.append(title);
        a.append(crt);
        a.append(view);

        postList.append(a);
    }
}

// <!-- <a class="post">
// <div class="w10 txt-center">1</div>
// <div class="w70 txt-left">제목테스트</div>
// <div class="w10 txt-center">2023-12-16</div>
// <div class="w10 txt-center">12</div>
// </a> -->
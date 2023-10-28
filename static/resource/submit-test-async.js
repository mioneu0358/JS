/** @file submit-test-async.js */
window.addEventListener('load', function() {
    let form = document.querySelector("#submit-form-async");
    // form 전송시 이벤트 핸들러 등록
    form.addEventListener('submit', function(evt) {
        evt.preventDefault();   // 기존 이벤트(form 전송) 방지
        
        // form Data를 가져옴(input값)
        let formData = new FormData(form);

        //form 메서드와 액션을 가져옴
        let url    = form.getAttribute('action');
        let method = form.getAttribute("method");
        
        console.log(url);
        // 서버로 비동기 전송 처리
        fetch(url, {
            method: method,
            body: formData
        }).then(function(response) {
            console.log(response);
        });

    });

});
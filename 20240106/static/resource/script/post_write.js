let quill = null;

window.addEventListener('DOMContentLoaded', function() {
    // Quill 에디터 초기화
    quill = new Quill('#editor', {
        theme: 'snow'
    });

    loadCategoryDropdown();
});

/**
 * 카테고리 드롭다운 초기화
 */
async function loadCategoryDropdown() {
    let response = await fetch('/board-api/category', {
        method : 'GET',
        headers: { 'Content-Type': 'application/json' }
    });
    let categories = await response.json();

    let dropdown = document.querySelector('#category');

    for (let category of categories) {
        let option       = document.createElement('option');
        option.value     = category.category_id;
        option.innerText = category.title;

        dropdown.append(option);
    }
}
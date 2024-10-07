document.addEventListener('DOMContentLoaded', () => {
    const All_Those_Posts = document.getElementById('Tiktokery_Lets_Go');
    let postCount = 0;


    function Create_Those_Tiktaks(post) {
        const Them_Post_UwU = document.createElement('div');
        Them_Post_UwU.classList.add('post');
        
        Them_Post_UwU.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        `;
        
        All_Those_Posts.appendChild(Them_Post_UwU);
    }

    function MORE_POSTS() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `https://jsonplaceholder.typicode.com/posts?_start=${postCount}&_limit=3`, true);
        xhr.onload = function () {
            if (xhr.status === 200) {
                const posts = JSON.parse(xhr.responseText);
                posts.forEach(post => Create_Those_Tiktaks(post));
                postCount += posts.length;
            }
        };
        xhr.send();
    }


    MORE_POSTS();


    window.addEventListener('scroll', () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
            MORE_POSTS();
        }
    });
});
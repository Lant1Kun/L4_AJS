function sortedPost(callback) {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP Error! sry. Status: ${response.status}`);
        }
        return response.json();
    })
    .then(posts => {
        const sortedPosts = posts.sort((a, b) => b.title.length - a.title.length);
        callback(null, sortedPosts);
    })
    .catch(e => {
        callback(e, null);
    });
}
function showSortedPosts() {
    sortedPost((err, posts) => {
        if (err) {
            console.log('Ошибка ', err);
            return;
        } else {
            console.log("Отсортированные posts");
            posts.forEach(element => {
                console.log(element);
            });
        }
    })
}

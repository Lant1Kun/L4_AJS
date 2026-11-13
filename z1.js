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



function sortedComments(callback) {
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then(response => {
        if (!response.ok) {
            console.log('Server error occured sry kys', response.status);
        }
        return response.json();
    })
    .then(comments => {
        const sortedComments = comments.sort((a, b) => a.name.localeCompare(b.name));
        callback(sortedComments, null);
    })
    .catch(e => {
        callback(null, e);
    })
}
function showSortedCommnts() {
    sortedComments((comments, err) => {
        if (err) {
            console.log('Ошибка ', err);
            return;
        } else {
            console.log('Отсортированные comments');
            comments.forEach(el => {
                console.log(el);
            })
        }
    })
}


function filterUsers() {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            if (!response.ok) {
                console.log('Server error occured sry kys', response.status);
            }
            return response.json();
        })
        .then(users => {
            const filtredUsers = users.map(({ id, name, username, email, phone}) => ({ id, name, username, email, phone}));
            return filtredUsers;
        })
}
function showFilterUsers() {
    filterUsers()
        .then(users => {
            console.log('Данные users');
            console.log(users);
        })
        .catch(err => {
            console.log('Ошибка', err);
        }) 
}


function filterTodos() {
    return fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => {
        if (!response.ok) {
            console.log('Server error occured sry kys', response.status);
        }   
        return response.json();     
    })
    .then(todos => {
        const filtredTodos = todos.filter(el => el.completed === false);
        return filtredTodos;
    })
}
function showFiltredTodos() {
    filterTodos()
    .then(todos => {
        console.log("Все todos где поле completed = false");
        console.log(todos);
    })
    .catch(err => {
        console.log("Ошибка", err);
    })
}

async function sortPostsAsync() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        if (!response.ok) {
            throw new Error(`HTTP Error! sry. Status: ${response.status}`);
        }
        const posts = await response.json();
        const sortedPosts = posts.sort((a, b) => b.title.length - a.title.length);
        return sortedPosts; 
    }
    catch(e) {
        console.log("Ошибка", e.message);
        throw e;
    };
}

function showSortedAsyncPosts() {
    sortPostsAsync()
    .then(posts => {
        console.log(posts);
    })
    .catch(err => console.log(err));
}


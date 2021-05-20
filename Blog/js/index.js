const posts = [];

//Send values from title, text and author fields
function send() {
    const title = document.getElementById("post-title").value;
    const text = document.getElementById("post-text").value;
    const author = document.getElementById("post-author").value;
    const post = new Post(title, text, author);
    posts.push(post);
    renderPosts(posts);
}

function Post(title, text, author) {
    this.title = title;
    this.text = text;
    this.author = author;
    this.index = Date.now();
    this.getListObject = function () {

        const li = document.createElement('li');

        const h3 = document.createElement('h3');
        const pText = document.createElement('p');
        const pAuthor = document.createElement('p');
        const button = document.createElement('button');
        const _this = this;

        h3.innerText = this.title;
        pText.innerText = this.text;
        pAuthor.innerText = this.author;
        button.innerText = "DELETE";
        li.id = this.index;

        li.appendChild(h3);
        li.appendChild(pText);
        li.appendChild(pAuthor);
        li.appendChild(button);

        // li.id = "myPost";
        // button.id = "delete";

        //Delete post by click Delete button
        button.onclick = function deletePosts() {
            //console.log(_this.index);
            for (let i = 0; i < posts.length; i++) {
                if (posts[i].index == _this.index) {
                    posts.splice(i, 1);
                    renderPosts(posts);
                    i = i - 1;
                }
            }
        };

        return li;
    }
}

function renderPosts(posts) {
    //clear old list
    const list = document.getElementById("post-list");
    //create a new list
    list.innerHTML = '';

    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        const li = post.getListObject();
        list.appendChild(li);
    }
}
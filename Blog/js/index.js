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

class Post {
    constructor(title, text, author) {
        this.title = title;
        this.text = text;
        this.author = author;
        this.index = Date.now();
        
        this.getListObject = function () {

            const li = document.createElement('li');
            const h3 = document.createElement('h3');
            const pText = document.createElement('p');
            const pAuthor = document.createElement('p');
            const buttonDelete = document.createElement('button');
            const editButton = document.createElement('button');
            const _this = this;

            h3.innerText = this.title;
            pText.innerText = this.text;
            pAuthor.innerText = this.author;
            buttonDelete.innerText = "DELETE";
            editButton.innerText = "EDIT";
            li.id = this.index;

            li.appendChild(h3);
            li.appendChild(pText);
            li.appendChild(pAuthor);
            li.appendChild(buttonDelete);
            li.appendChild(editButton);

            // li.id = "myPost";
            // button.id = "delete";
            //Delete post by click Delete button
            buttonDelete.onclick = function deletePosts() {
                //console.log(this.index);
                for (let i = 0; i < posts.length; i++) {
                    if (posts[i].index == _this.index) {
                        posts.splice(i, 1);
                        renderPosts(posts);
                        i = i - 1;
                    }
                }
            };

            editButton.onclick = function editPost(){
                for (let i = 0; i < posts.length; i++) {
                    if (posts[i].index == _this.index) {
                        console.log("Edited post: " + posts[i].index);
                        renderPosts(posts);
                    }
                }
            }

            return li;
        };
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
class Post {
    title;
    content;

    constructor(title, content) {
        this.title = title;
        this.content = content;
    }

    toString(){
        return `"Post: ${this.title}"
"Content: ${this.content}`;
    }
}

class SocialMediaPost extends Post{
    likes;
    dislikes;
    comments;

    constructor(title, content, likes, dislikes) {
        super(title, content);
        this.likes = likes;
        this.dislikes = dislikes;
        this.comments = [];
    }

    addComment(comment){
        this.comments.push(comment);
    }

    toString() {
        return super.toString() +
            `Rating: ${this.likes - this.dislikes} 
 * ${this.comments.join('\n * ')}`;
    }
}

class BlogPost extends Post{
    views;

    constructor(title, content, views) {
        super(title, content);
        this.views = views;
    }

    view(){
        this.views++;
        return this;
    }

    toString() {
        return super.toString() + `\nViews: ${this.views}`;
    }
}

let blogPost = new BlogPost('mece', 'meci', 9);
console.log(blogPost.view().toString());
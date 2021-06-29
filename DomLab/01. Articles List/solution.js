function createArticle() {
let inputTitle = document.getElementById('createTitle');
let inputContent = document.getElementById('createContent');

let articles = document.getElementById('articles');
let article = document.createElement('article');

let title = document.createElement('h3');
title.innerText = inputTitle.value;
let content = document.createElement('p');
content.innerText = inputContent.value;

article.appendChild(title);
article.appendChild(content);
articles.appendChild(article);

inputTitle.value = '';
inputContent.value = '';
}

function deleteArticle(){
    let articles = document.getElementById('articles');
    let children = articles.children;
    let tagName = children[children.length - 1].tagName;
    console.log(tagName);
    if (tagName === 'ARTICLE'){
        let child = children[children.length - 1];
        articles.removeChild(child);
    }
}
function toggle() {
    let headElement = document.getElementsByClassName('head')[0];
    let buttonElement = headElement.firstElementChild;
    let divElement = headElement.nextElementSibling;

    console.log(divElement.style.display);

    if (divElement.style.display === 'none'){
        buttonElement.innerHTML = 'less';
        divElement.style.display = 'block';
    }else {
        buttonElement.innerHTML = 'more';
        divElement.style.display = 'none';
    }
}
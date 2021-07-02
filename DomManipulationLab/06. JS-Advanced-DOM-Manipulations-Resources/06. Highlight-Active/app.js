function focus() {
    let formElement = document.querySelector('div');

    console.log(formElement);

    formElement.addEventListener('focus', focus, true);
    focus = (e) => {
        e.target.parentElement.style.background = 'gray';
    }

    formElement.addEventListener('blur', function (e) {
        e.target.parentElement.style.background = '';
    }, true);
}
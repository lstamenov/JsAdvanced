function validate() {
    let inputText = document.getElementById('email');

    let validateEmail = (e) => {
        let pattern = new RegExp('[a-z0-9]+@[a-z]+\\.[a-z]+');
        let email = e.target.value;
        if (pattern.test(email)){
            e.target.style.background = 'green';
        }else {
            e.target.previousSibling.style = 'error';
        }
    }

    let focusValidate = (e) => {
        e.target.style.background = '';
    }

    inputText.addEventListener('blur', validateEmail, true);
    inputText.addEventListener('focus', focusValidate, true);
}
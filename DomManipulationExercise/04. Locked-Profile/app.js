function lockedProfile() {
    let buttons = document.getElementsByTagName('button');
    let showHideElements = (e) => {
        let profileElement = e.target.parentElement;
        let lockElement = profileElement.getElementsByTagName('input')[0];
        if (!lockElement.checked){
            let hiddenElements = profileElement.getElementsByTagName('div')[0];
            if (e.target.innerHTML === 'Show more'){
                e.target.innerHTML = 'Show less';
                hiddenElements.style.display = 'block';
            }else {
                e.target.innerHTML = 'Show more';
                hiddenElements.style.display = 'none';
            }
        }
    }
    [...buttons].forEach(button => button.addEventListener('click', showHideElements));
}
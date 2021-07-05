function solve() {
    let changeStyleButton = document.getElementById('dropdown');
    let stylesElement = document.getElementById('dropdown-ul');

    let showStyles = () => {
        if (stylesElement.style.display === 'block'){
            stylesElement.style.display = 'none';
        }else {
            stylesElement.style.display = 'block';
        }
    }
    changeStyleButton.addEventListener('click', showStyles);

    let setColour = (e) => {
        console.log(e.target);
        let boxElement = document.getElementById('box');
        console.log(e.target.style.borderBottomColor);
        boxElement.style.backgroundColor = e.target.innerHTML;
    }

    [...stylesElement.children].forEach(e => e.addEventListener('click', setColour));

}
function solve(){
    let tableBodyElement = document.getElementsByTagName('tbody')[0];

    function changeBackground(e) {
        for (let i = 0; i < tableBodyElement.children.length; i++) {
            console.log(tableBodyElement.children[i]);
            if (tableBodyElement.children[i].style.backgroundColor){
                tableBodyElement.children[i].style.backgroundColor = e.target.style.backgroundColor;
            }
        }
        e.target.parentElement.style.backgroundColor = '#413f5e';
    }

    tableBodyElement.addEventListener('click', changeBackground)
}

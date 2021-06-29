function growingWord() {
    let growingParagraph = document.getElementsByTagName('h1')[0];
    console.log(growingParagraph);

    if (!growingParagraph.style.fontSize){
        growingParagraph.style.fontSize = '2px';
    }else {
        let prevSize = growingParagraph.style.fontSize;
        growingParagraph.style.fontSize = parseInt(prevSize) * 2 + 'px';
    }

    let colors = document.getElementById('colors');
    let firstColorElement = colors.firstElementChild;

    growingParagraph.style.color = firstColorElement.innerHTML.toLowerCase();
    colors.append(firstColorElement);
}
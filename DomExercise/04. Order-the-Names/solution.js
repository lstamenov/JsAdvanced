function solve() {
    let divElementExercise = document.getElementById('exercise');
    let listDiv = divElementExercise.firstElementChild.nextElementSibling;
    let orderedListElement = listDiv.firstElementChild.nextElementSibling;

    let inputElement = document.getElementsByTagName('input')[0];

    let name = inputElement.value;

    let listElements = orderedListElement.children;

    let count = 'A'.charCodeAt(0);
    let letterCount = name.charCodeAt(0);

    console.log(listElements[0].innerHTML);
    console.log(letterCount - count);

    console.log(listElements[letterCount - count].innerHTML);

    if (listElements[Number(letterCount - count)].innerHTML === ''){
        listElements[Number(letterCount - count)].innerHTML = name;
    }else {
        listElements[Number(letterCount - count)].innerHTML += `, ${name}`;
    }

    inputElement.value = '';
}
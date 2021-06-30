function deleteByEmail() {
    let customersElement = document.getElementById('customers');
    let resultElement = document.getElementById('result');
    let inputElement = document.getElementsByTagName('input')[0];
    console.log(inputElement.value);

    let tableBody = customersElement.children[1];

    console.log(tableBody.children);

    let isDeleted = false;

    for (let i = 0; i < tableBody.children.length; i++) {
        let tableRecord = tableBody.children[i];
        let email = tableRecord.lastChild.previousSibling;

        console.log(email.innerHTML);

        if (email.innerHTML === inputElement.value){
            tableRecord.remove();
            isDeleted = true;
        }
    }

    console.log(isDeleted);
    if (!isDeleted){
        resultElement.innerHTML = 'Not Found';
    }else {
        resultElement.innerHTML = 'deleted.';
    }
}
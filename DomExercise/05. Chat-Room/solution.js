function solve() {
    let messagesElement = document.getElementById('chat_messages');
    let newMessageElement = document.createElement('div');
    newMessageElement.setAttribute('class', 'message my-message');

    let inputElement = document.getElementById('chat_input');
    newMessageElement.innerHTML = inputElement.value;

    messagesElement.appendChild(newMessageElement);
    inputElement.value = '';
}




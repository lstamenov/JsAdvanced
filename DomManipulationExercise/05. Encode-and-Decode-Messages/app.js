function encodeAndDecodeMessages() {
    let mainElement = document.getElementById('main');
    let buttons = mainElement.getElementsByTagName('button');
    let sendButton = buttons[0];
    let readButton = buttons[1];

    function getMessage(number, message) {
        let encodedMessage = '';
        for (let i = 0; i < message.length; i++) {
            encodedMessage += String.fromCharCode(message.charCodeAt(i) + number);
        }
        return encodedMessage;
    }

    let encodeAndSend = (e) => {
        let textElement = e.target.previousElementSibling;
        console.log(textElement);
        let message = textElement.value;
        let encodedMessage = getMessage(1, message);
        textElement.value = '';
        let sentMessage = readButton.previousElementSibling;
        sentMessage.value = encodedMessage;
    }

    sendButton.addEventListener('click', encodeAndSend);

    let decodeMessage = (e) => {
        let encodedMessageElement = e.target.previousElementSibling;
        encodedMessageElement.value = getMessage(-1, encodedMessageElement.value);
    }
    readButton.addEventListener('click', decodeMessage);
}
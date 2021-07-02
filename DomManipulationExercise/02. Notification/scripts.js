function notify(message) {
    let notificationElement = document.getElementById('notification');
    let contentElement = document.getElementById('content');
    let button = contentElement.lastElementChild;

    button.addEventListener('click', function () {
        notificationElement.innerHTML = message;
        notificationElement.style.display = 'block';

        setTimeout(function () {
            notificationElement.style.display = 'none';
        }, 2000);
    });
}
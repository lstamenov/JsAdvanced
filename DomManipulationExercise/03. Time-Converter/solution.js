function attachEventsListeners() {
    let daysElement = document.getElementById('daysBtn');
    let hoursElement = document.getElementById('hoursBtn');
    let minutesElement = document.getElementById('minutesBtn');
    let secondElement = document.getElementById('secondsBtn');

    let daysInput = document.getElementById('days');
    let hoursInput = document.getElementById('hours');
    let minutesInput = document.getElementById('minutes');
    let secondsInput = document.getElementById('seconds');

    daysElement.addEventListener("click",function () {
        hoursInput.value = String(Number(daysInput.value) * 24);
        minutesInput.value = String(Number(hoursInput.value) * 60);
        secondsInput.value = String(Number(minutesInput.value) * 60);
    });

    hoursElement.addEventListener("click",function () {
        daysInput.value = String(Number(hoursInput.value) / 24);
        minutesInput.value = String(Number(hoursInput.value) * 60);
        secondsInput.value = String(Number(minutesInput.value) * 60);
    });

    minutesElement.addEventListener("click",function () {
        secondsInput.value = String(Number(minutesInput.value) * 60);
        hoursInput.value = String(Number(minutesInput.value) / 60);
        daysInput.value = String(Number(hoursInput.value) / 24);
    });

    secondElement.addEventListener("click",function () {
        minutesInput.value = String(Number(secondsInput.value) / 60);
        hoursInput.value = String(Number(minutesInput.value) / 60);
        daysInput.value = String(Number(hoursInput.value) / 24);
    });

    let clearButton = document.getElementById('clear');
    clearButton.addEventListener('click', function () {
        secondsInput.value = '';
        minutesInput.value = '';
        hoursInput.value = '';
        daysInput.value = '';
    })
}
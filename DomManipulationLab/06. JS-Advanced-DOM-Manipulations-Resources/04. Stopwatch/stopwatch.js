function stopwatch() {
    let timeElement = document.getElementById('time');
    let timeAsArray = timeElement.innerHTML.split(":");

    let startButton = document.getElementById('startBtn');
    let stopButton = document.getElementById('stopBtn');

    let minute = Number(timeAsArray[0]);
    let seconds = Number(timeAsArray[1]);

    let interval;
    startButton.addEventListener('click', start)

    function start(e) {
        stopButton.removeAttribute('disabled');
        e.target.setAttribute('disabled', 'true');
        interval = setInterval(function () {
            seconds++;
            if (seconds > 59){
                minute++;
                seconds = 0;
            }
            timeElement.innerHTML = `${minute.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }, 1000);
    }

    stopButton.addEventListener('click', stop);

    function stop(e){
        e.target.setAttribute('disabled', 'true');
        startButton.removeAttribute('disabled');
        clearInterval(interval);
    }
}
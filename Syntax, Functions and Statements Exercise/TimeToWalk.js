let calcTime = (steps, footPrintSize, speed) => {
    let distanceInMeters = steps * footPrintSize;
    let speedMetersInSecond = speed / 3.6;

    let rest = Math.floor(distanceInMeters / 500);
    let time = distanceInMeters / speedMetersInSecond + rest * 60;

    let timeInHours = Math.floor(time / 3600);
    let timeInMinutes = Math.floor(time / 60);
    let timeInSeconds = time % 60;

    console.log(`${timeInHours}:${timeInMinutes}:${timeInSeconds}`);
}

calcTime(4000, 0.6, 5);
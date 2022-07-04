const hoursHand = $(".hand.hours");
const minutesHand = $(".hand.minutes");
const secondsHand = $(".hand.seconds");

const setRotation = function (element, rotationPercentage){
    element.css('--rotation', rotationPercentage * 360)
}

const setClock = () => {
    const currentDate = new Date();

    const secondsPercentage = currentDate.getSeconds() / 60;
    const minutesPercentage = (secondsPercentage + currentDate.getMinutes()) / 60;
    const hoursPercentage = (minutesPercentage + currentDate.getHours()) / 12;

    setRotation(secondsHand, secondsPercentage);
    setRotation(minutesHand, minutesPercentage);
    setRotation(hoursHand, hoursPercentage);
};

setClock();

setInterval(setClock, 1000);
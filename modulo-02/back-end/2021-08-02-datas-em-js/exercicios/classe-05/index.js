function taAberto(data) {
    if (data.getDay() === 0) {
        return console.log(false);
    } else if (data.getDay() === 6 && data.getHours() < 8 && data.getHours() > 12) {
        return console.log(false);
    } else if (data.getHours() >= 8 && data.getHours() <= 17) {
        return console.log(true);
    } else if (data.getHours() === 18 && data.getMinutes() < 1) {
        return console.log(true);
    } else {
        return console.log(false);
    }
};

taAberto(new Date(2021, 3, 25, 12));
taAberto(new Date(2021, 3, 26, 12));
taAberto(new Date(2021, 3, 26, 7, 59));
taAberto(new Date(2021, 3, 24, 9, 30));
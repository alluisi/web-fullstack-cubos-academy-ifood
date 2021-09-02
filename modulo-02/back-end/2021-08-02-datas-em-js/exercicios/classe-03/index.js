function taAberto(data) {
    if (data.getHours() >= 8 && data.getHours() <= 17) {
        return console.log(true);
    } else if (data.getHours() === 18 && data.getMinutes() < 1) {
        return console.log(true);
    } else {
        return console.log(false);
    }
};

taAberto(new Date(2015, 1, 1, 12));
taAberto(new Date(2015, 1, 1, 2));
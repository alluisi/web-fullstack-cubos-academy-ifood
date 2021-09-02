const { format } = require("date-fns");

function formatarA(data) {
    return console.log(format(data, "dd 'de' MMMM 'de' yyyy"));
};

function formatarB(data) {
    return console.log(format(data, "dd/MM/yyyy"));
};

function formatarC(data) {
    return console.log(format(data, "d MMM"));
};

function formatarD(data) {
    return console.log(format(data, "dd MMM yyyy"));
};

function formatarE(data) {
    return console.log(format(data, "dd 'de' MMM 'de' yyyy"));
};

function formatarF(data) {
    return console.log(format(data, "dd/MMM"));
};

formatarA(new Date(2020, 9, 5));
formatarB(new Date(2020, 9, 5));
formatarC(new Date(2020, 9, 5));
formatarD(new Date(2020, 9, 5));
formatarE(new Date(2020, 9, 5));
formatarF(new Date(2020, 9, 5));
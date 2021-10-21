const nodemailer = require('nodemailer');
const handlebars = require('nodemailer-express-handlebars');

const transportador = nodemailer.createTransport({
    // de acordo com o servidor SMTP (mailgun)
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'name@email.com',
        pass: '123456',
    },
});

transportador.use('complile', handlebars({
    viewEngine: {
        extname: '.handlebars',
        defaultLayout: false
    },
    viewPath: './views/'
}));

module.exports = transportador;
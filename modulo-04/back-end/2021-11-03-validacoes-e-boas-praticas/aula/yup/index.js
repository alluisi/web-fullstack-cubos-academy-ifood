const express = require('express');
const yup = require('yup');
const { setLocale } = require('yup');
const { pt } = require('yup-locales');

setLocale(pt);

const app = express();

app.use(express.json());

app.post('/cadastro', async (req, res) => {
    const schema = yup.object().shape({
        nome: yup.string().required('O campo nome é obrigatório'),
        idade: yup.number().strict().required(),
        email: yup.string().email().required(),
        senha: yup.string().required().min(5).max(10)
    });

    try {
        await schema.validate(req.body);

        return res.json('Validou');
    } catch (error) {
        return res.status(400).json(error.message);
    }
});

app.listen(3000);
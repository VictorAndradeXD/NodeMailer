const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
    host: 'smtp-mail.outlook.com',
    port: 587,
    secure: false,
    auth: {
        user: 'seuemai@email.com',
        pass: 'asenhadoseuemail',
    }
});

transport.sendMail({
    from: 'Nodemailer <seuemai@email.com>',
    to: 'emaildestinatario@email.com',
    subject: 'Enviando email com o nodemailer',
    html: '<h1> Olá, Dev</h1> <p> Esse é o conteúdo HTML do seu email</p>',
    text: 'Olá, Dev esse é o texto irá aparecer caso o HTML não seja carregado.'
}).then((git branch -M main) => console.log('Email enviado com sucesso!'))
.catch((err)=> console.log('Erro ao enviar o email: ', err));
'use strict';

const express = require('express');
const body = require('body-parser');
const cookie = require('cookie-parser');
const morgan = require('morgan');
const uuid = require('uuid').v4;
const path = require('path');
const app = express();
const port = 3000;

app.use(morgan('dev'));
app.use(express.static(path.resolve(__dirname, '..', 'public')));
app.use(express.static(path.resolve(__dirname, 'images')));
app.use(express.static(path.resolve(__dirname, '..', 'node_modules')));
app.use(body.json());
app.use(cookie());
const users = {
    'd.belyi350@gmail.com': {
        email: 'd.belyi350@gmail.com',
        password: 'Belyi350',
    },
    's.volodin@corp.mail.ru': {
        email: 's.volodin@corp.mail.ru',
        password: 'password',
    },
    'aleksandr.tsvetkov@corp.mail.ru': {
        email: 'aleksandr.tsvetkov@corp.mail.ru',
        password: 'password',
    },
    'a.ostapenko@corp.mail.ru': {
        email: 'a.ostapenko@corp.mail.ru',
        password: 'password',
    },
};
const ids = {};

app.post('/signup', (req, res) => {
    const password = req.body.password;
    const email = req.body.email;
    const age = req.body.age;
    if (
        !password || !email || !age ||
        !password.match(/^\S{4,}$/) ||
        !email.match(/@/) ||
        !(typeof age === 'number' && age > 10 && age < 100)
    ) {
        return res.status(400).json({error: 'Не валидные данные пользователя'});
    }
    if (users[email]) {
        return res.status(400).json({error: 'Пользователь уже существует'});
    }

    const id = uuid();
    const user = {password, email, age, images: []};
    ids[id] = email;
    users[email] = user;

    res.cookie('podvorot', id, {expires: new Date(Date.now() + 1000 * 60 * 10)});
    res.status(201).json({id});
});

app.post('/login',  (req, res) => {
 
    const email = req.body.email;
    const password = req.body.password;
    console.log(email);
    console.log(password);
    if (!password || !email) {
        console.log("1");
        return res.status(400).json({error: 'Не указан E-Mail или пароль'});
    }
    if (!users[email] || users[email].password !== password) {
        console.log("2");
        return res.status(400).json({error: 'Неверный E-Mail и/или пароль'});
    }

    const id = uuid();
    ids[id] = email;
    res.cookie('podvorot', id, {expires: new Date(Date.now() + 1000 * 60 * 10)});
    res.status(200).json({id, sessionId : id});
});

app.get('/me', (req, res) => {
    const id = req.cookies['podvorot'];
    const email = ids[id];
    if (!email || !users[email]) {
        return res.status(401).end();
    }

    res.json(users[email]);
});

app.get('/asd', (req, res) => {
    const id = req.cookies['podvorot'];
    const emailSession = ids[id];
    if (!emailSession || !users[emailSession]) {
        return res.status(401).end();
    }

    const result = Object
        .values(users)
        .filter(({email}) => email !== emailSession)
        .map(user => user.images)
        .filter(Boolean)
    ;

    res.json(result.flat());
});

app.get('/feed', (req, res) => {
    const id = req.cookies['podvorot'];
    const emailSession = ids[id];
    if (!emailSession || !users[emailSession]) {
        return res.status(401).end();
    }
    
    const result = Object
        .values(users)
        .filter(({email}) => email !== emailSession)
        .map(user => user.images)
        .filter(Boolean)
    ;

    res.json(result.flat());
});



app.listen(port, function () {
    console.log(`Server listening port ${port}`);
});
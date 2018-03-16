const express = require('express');
const path = require('path');

const app = express();

app.set('views', './views');
app.set('view engine', 'pug');

app.use('/static', express.static(path.join(__dirname, '/assets')))

app.get('/', function (req, res) {
    res.render('index', {
        data: [
            [{
                    title: 'Firebase 101',
                    desc: 'A Crash Course on Google\'s Cloud Computing Service Firebase',
                    link: 'http://presentations.flxwu.com/firebase101'
                },
                {
                    title: 'Crash Course Git',
                    desc: 'A Quick Introduction to modern Version Control using Git and Github.',
                    link: 'https://docs.google.com/presentation/d/1ue9GwJ9vSOf7HqejuaOvVJJVqGP3PWph_pXw6UQjM/edit?usp=sharing'
                }
            ],
        ]
    });
});

const normalizePort = (val) => {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

const port = normalizePort(process.env.PORT || '3000');

app.listen(port, () => console.log(`server listening on port ${port}`));
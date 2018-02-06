const express = require('express');
const routes = require('./routes');
const user = require('./routes/user');
const http = require('http');
const path = require('path');
const errorHandler = require('errorhandler');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoClient = require('mongodb').MongoClient;

let db;

const reactViews = require('express-react-views');
const app = express();

app.set( 'port', process.env.PORT || 3000 );
app.set( 'views', __dirname + '/views' );
app.set( 'view engine', 'js' );
app.engine( 'js', reactViews.createEngine() );
app.use( logger('dev') );
app.use( express.static(path.join(__dirname, 'public')) );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({extended: true}) );

if ('development' === app.get('env')) {
    app.use(errorHandler());
}

app.locals.something = 'value';
app.locals.qaz = 'qut';

app.get('/', (req, res) => {
    res.send(startPage);
});
app.get('/authorization', routes.test);
app.get('/users', user.list);
app.get('/stylesheet/:name', (req, res) => {
    res.sendFile(`${__dirname}/public/${req.params.name}`)
})
app.get('/scripts/:name', (req, res) => {
    res.sendFile(`${__dirname}/${req.params.name}`)
});

app.post('/api/authorization/', user.authorization);


mongoClient.connect('mongodb://localhost:27017/admin', (err, database) => {
    if(err) return console.log(err);

    db = database;

    http.createServer(app).listen(app.get('port'), function() {
        console.log('Express server listening on port ' + app.get('port'));
    });
});

const startPage = (
    `<!DOCTYPE html>
    <html lang="en">
         <head>
         <meta charset="UTF-8">
        <title>Title</title>
    <link rel="stylesheet" href="stylesheets/style.css" />
    </head>
    <body>

        <div id="root"></div>
        <script src="/scripts/bundle.js"></script>

    </body>
    </html>`
);
const express = require('express');
const routes = require('./routes');
const user = require('./routes/user');
const http = require('http');
const path = require('path');
const errorHandler = require('errorhandler');
const logger = require('morgan');
const bodyParser = require('body-parser')

const reactViews = require('express-react-views');
const app = express();

app.set( 'port', process.env.PORT || 3001 );
app.set( 'views', __dirname + '/views' );
app.set( 'view engine', 'js' );
app.engine( 'js', reactViews.createEngine() );
app.use( logger('dev') );
app.use( express.static(path.join(__dirname, 'public')) );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({
    extended: true
}) );
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, authorization');
    if (req.method === 'OPTIONS') {
        res.end();
    }
    next();
});

if ('development' === app.get('env')) {
  app.use(errorHandler());
}

app.locals.something = 'value';
app.locals.qaz = 'qut';

app.get('/', routes.index);
app.get('/authorization', routes.test);
app.get('/users', user.list);
app.post('/api/authorization/', user.authorization);

http.createServer(app).listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});

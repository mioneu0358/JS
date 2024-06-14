const express = require('express');
const app = express();
const expressHandlebars = require('express-handlebars');
const handlers = require('./lib/handlers');
const weatherMiddleware = require('./lib/middleware/weather');
const path = require('path');
const port = process.env.PORT || 3000;

app.engine('handlebars', expressHandlebars.engine({
    defaultLayout: 'main',
    helpers: {
        section: function(name, options) {
            if (!this._sections) this._sections = {};
            this._sections[name] = options.fn(this);
            console.log(this);
            return null;
        }
    }
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.use(weatherMiddleware);

app.get('/', handlers.home);
app.get('/section-test', handlers.sectionTest);

app.use(handlers.notFound);
// app.use(handlers.serverError);

app.listen(port, () => {
    console.log(`Express started on http://localhost:${port}`);
    console.log('press Ctrl-C to terminate');
});
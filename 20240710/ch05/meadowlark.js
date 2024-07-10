const express = require('express');
const app = express();
const expressHandlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const multiparty= require('multiparty');
const handlers = require('./lib/handlers');
const weatherMiddleware = require('./lib/middleware/weather');
const path = require('path');
const port = process.env.PORT || 3000;

app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main',
    helpers: {
        section: function(name, options) {
            if (!this._sections) this._sections = {};
            this._sections[name] = options.fn(this);
            console.log(options);
            return null;
        }
    }
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(weatherMiddleware);


app.get('/', handlers.home);
app.get('/section-test', handlers.sectionTest);

app.get('/newsletter-signup', handlers.newsletterSignup);
app.post('/newsletter-signup/process', handlers.newsletterSignupProcess);
app.get('/newsletter-signup/thank-you', handlers.newsletterSignupThankYou);

app.get('/newsletter', handlers.newsletter);
app.post('/api/newsletter-signup', handlers.api.newsletterSignup);

app.get('/contest/vacation-photo', handlers.vacationPhotoContest);
app.get('/contest/vacation-photo-error', handlers.vacationPhotoContestProcessError);
app.get('/contest/vacation-photo-thank-you', handlers.vacationPhotoContestProcessThankYou);
app.post('/contest/vacation-photo/:year/:month', (req,res) => {
    const form = new multiparty.Form();
    form.parse(req, (err,fields, files) => {
        handlers.vacationPhotoContestProcess(err,req,res,fields,files);
    });
});

app.use(handlers.notFound);
app.use(handlers.serverError);

app.listen(port, () => {
    console.log(`Express started on http://localhost:${port}`);
    console.log('press Ctrl-c to terminate');
});

const express = require('express');
const expressHandlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const multiparty = require('multiparty'); // 설치 필요
const path = require('path');
const credentials = require('./.credentials.development.json');
const handlers = require('./lib/handlers');
const weatherMiddleware = require('./lib/middleware/weather');
const flashMiddleware = require('./lib/middleware/flash');

const app = express();
const port = process.env.PORT || 3000;

app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main',
    helpers: {
        section: function(name, options) {
            if (!this._sections) this._sections = {};
            this._sections[name] = options.fn(this);
            return null;
        }
    }
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cookieParser(credentials.cookieSecret));    // cookieparser 미들웨어 설치
app.use(expressSession({
    resave: false,          // 요청이 수정되지 않았더라도 세션을 강제로 저장한다.
    saveUninitialized: false,   // true로 설정하면 새로운 세션을 수정하지않더라도 강제로 저장한다. 
                                // 쿠키를 설정하기 전에 사용자에게 허락을 받아야한다.
    secret: credentials.cookieSecret    //세션ID쿠키에 서명할떄 사용하는 키
    //name: 고유한 세션 식별자를 저장할 쿠키의이름이다. 기본값은 connect.sid다
    //store: 세션 저장소 인스턴스. 기본값은 memorystore의 인스턴스다
    //cookie: 세션 쿠키에 적용할 설정
}));

app.use(weatherMiddleware);
app.use(flashMiddleware);

app.get('/', (req, res) => handlers.home(req, res));
app.get('/section-test', handlers.sectionTest);

app.get('/newsletter-signup', handlers.newsletterSignup);
app.post('/newsletter-signup/process', handlers.newsletterSignupProcess);
app.get('/newsletter-signup/thank-you', handlers.newsletterSignupThankYou);
app.get('/newsletter-archive', handlers.newsletterArchive);

app.get('/newsletter', handlers.newsletter);
app.post('/api/newsletter-signup', handlers.api.newsletterSignup);

app.get('/contest/vacation-photo', handlers.vacationPhotoContest);
app.get('/contest/vacation-photo-error', handlers.vacationPhotoContestProcessError);
app.get('/contest/vacation-photo-thank-you', handlers.vacationPhotoContestProcessThankYou);
app.post('/contest/vacation-photo/:year/:month', (req, res) => {
    const form = new multiparty.Form();
    form.parse(req, (err, fields, files) => {
        handlers.vacationPhotoContestProcess(err, req, res, fields, files);
    });
});

app.get('/contest/vacation-photo-ajax', handlers.vacationPhotoContestAjax);
app.post('/api/vacation-photo-contest/:year/:month', (req, res) => {
    const form = new multiparty.Form();
    form.parse(req, (err, fields, files) => {
        handlers.api.vacationPhotoContest(err, req, res, fields, files);
    });
});

app.use(handlers.notFound);
app.use(handlers.serverError);

app.listen(port, () => {
    console.log(`Express started on http://localhost:${port}`);
    console.log('press Ctrl-C to terminate');
});


// async form 제출방식  플래시 메모리 리디렉트 말고 비동기로 받아와서 비동기로 띄우기
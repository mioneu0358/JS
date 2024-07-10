exports.home = (req, res) => res.render('home');
exports.sectionTest = (req, res) => res.render('section-test');
exports.notFound = (req, res) => res.render('404');
exports.serverError = (err, req, res, next) => res.render('500');

exports.newsletterSignup = (req, res) => {
    res.render('newsletter-signup', {csrf: 'CSRF token goes here'});
}
exports.newsletterSignupProcess = (req, res) => {
    console.log('Form (from quertsting: ' + req.query.form);
    console.log('CSRF token (from hidden form field): '+ req.body._csrf);
    console.log('Name (from visivle form filed): '+ req.body.name);
    console.log('Email (from visible form filed): '+ req.body.email)
    res.redirect(303, '/newsletter-signup/thank-you');
}
exports.newsletterSignupThankYou = (req, res) => {
    res.render('newsletter-signup-thank-you')
}

exports.newsletter = (req,res) => {
    res.render('newsletter', {csrf: 'CSRF token goes here'});
};
exports.api = {
    newsletterSignup: (req,res) => {
        console.log('CSRF token (from hidden form fiedl): '+ req.body._csrf);
        console.log('Name (from visible form field): '+ req.body.name);
        console.log('Email (from visible form filed): '+ req.body.email);
        res.send({result: 'success'});
    }
};


exports.vacationPhotoContest = (req, res) => {
    const now = new Date()
    res.render('contest/vacation-photo', { 
        year: now.getFullYear(), 
        month: now.getMonth() 
    });
    console.log(now.getMonth());
};
exports.vacationPhotoContestProcessError = (req, res) => {
    res.render('contest/vacation-photo-error');
};
exports.vacationPhotoContestProcessThankYou = (req, res) => {
    res.render('contest/vacation-photo-thank-you');
};
exports.vacationPhotoContestProcess = (err, req, res, fields, files) => {
    if (err) return res.redirect(303, '/contest/vacation-photo-error');
    console.log('field data: ', fields);
    console.log('files: ', files);
    res.redirect(303, '/contest/vacation-photo-thank-you');
};

module.exports = function(app) {
    app.get('/survey', (req, res, next) =>{
        res.render('public/survey.html');
        //default catch-all that leads to home.html
    })
}
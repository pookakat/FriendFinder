module.exports = function(app) {
    app.get('/api/friends', (req, res, next) => {

})

app.post('/api/friends', (req,res,next) =>{
    console.log(req.body);
})
}
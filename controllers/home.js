//exports a object
// getIndex is a method because it is tied to a function
//renders out index.ejs

module.exports = {
    getIndex: (req,res)=>{
        res.render('index.ejs')
    }
}
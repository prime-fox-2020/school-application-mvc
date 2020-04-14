

class HomeController {
    static getHome(req, res) {
        res.render('home')
    }

    static errorPage(req,res) {
        res.render('error', {error: `Page Not Found`})
    }
}
    
module.exports = HomeController
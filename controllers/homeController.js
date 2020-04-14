class HomeController {
    static getHome(req, res) {
        //render view
        res.render('home')

    }

    static notFound(req, res) {
        res.render('error', { error: '404 - Page Not Found' })
    }
}

module.exports = HomeController
class HomeController {
    static getHome(req, res) {
        res.render('home');
    }

    static notFound(req, res) {
        res.render('error', { err: '404 - Page Not Found'});
    }
}

module.exports = HomeController;
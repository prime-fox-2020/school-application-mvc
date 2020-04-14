class HomeController{
    static getHome(req, res) {
        res.render('home');
    }

    static notFound(req, res) {
        res.render('error', { error: 'Page Not Found!' });
    }
}

module.exports = HomeController;
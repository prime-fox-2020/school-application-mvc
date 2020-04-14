
class ControllerHome {
    static getHome(req, res) {
        res.render('home.ejs')
    }
}

module.exports = ControllerHome
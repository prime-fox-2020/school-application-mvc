const Models = require('../models')

class Render {
    
    static page = (page, request, response) => {

        let pageSelector = request.params.selector;

        switch (pageSelector) {

            case 'delete' : {

                Models.delete(page, request.query.id)
                    .then(red => response.redirect(302, red))
                    .catch(err => response.send(err))
            
            }; break;

            case 'edit' : {

                Models.findById(page, request.query.id)
                    .then(result => response.render(page, {form: page, data: result, activeMenu: page, hideAddNewButton: true}))
                    .catch(err => response.send(err))

            }; break;

            case 'add' : {
            
                response.render('new', {form: page, data: null, activeMenu: page, hideAddNewButton: true})

            }; break;

            default : {
                Models.show(page)
                    .then(result => response.render(page, {data: result, activeMenu: page, hideAddNewButton: false}))
                    .catch(err => response.send(err))
            }; break;
        }

    }

}

class Home {

    static render(request, response) {
        response.render('index')
    }

}

class Teachers {

    static render = (request, response) => {

        Render.page('teachers', request, response)
    }

    static post = (request, response) => {
        if (!request.params.hasOwnProperty('id')) {
            Models.newData('teachers', request.body)
        } else {
            Models.update('teachers', request.body)
        }

        response.status(302).redirect('/teachers')
    }

}

class Students {
    
    static render = (request, response) => {

        Render.page('students', request, response)

    }

    static post = (request, response) => {

        if (!request.params.hasOwnProperty('id')) {
            Models.newData('students', request.body)
        } else {
            Models.update('students', request.body)
        }

        response.redirect(302, '/students')
    }

}

class Subjects {

    static render = (request, response) => {
        Render.page('subjects', request, response)
    }

    static post = (request, response) => {
        Models.newData('subjects', request.body)
        response.redirect(302, '/subjects')
    }

}

module.exports = {Home, Teachers, Students, Subjects}
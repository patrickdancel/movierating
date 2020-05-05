const controller = require('../controllers/controller')


// CRUD
module.exports = (app) => {
    app.post('/api/v1/create', controller.create);
    app.get('/api/v1/readAll', controller.readAll);
    app.get('/api/v1/readOne/:id', controller.readOne);
    app.put('/api/v1/updateOne/:id', controller.updateOne);
    app.delete('/api/v1/deleteOne/:id', controller.deleteOne);
}

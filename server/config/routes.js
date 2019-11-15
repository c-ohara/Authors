const Authors = require('./../controller/Authors');

module.exports = (app) => {
    app.get('/authors', Authors.index);
    app.get('/authors/:id', Authors.show);
    app.post('/authors', Authors.create);
    app.put('/authors/:id', Authors.update);
    app.delete('/authors/:id', Authors.remove);
}
const Author = require('../models/author');

module.exports = app => {
    app.get('/authors', (req, res) => {
        //listar autor
    });

    app.get('/authors/:id', (req, res) => {
        // listar um autor
    });

    app.post('/authors', (req, res) => {
        console.log(req.body);

        const author = req.body;

        Author.adiciona(author, res);
    });

    app.patch('/authors/:id', (req, res) => {
        // edita author
    });

    app.delete('/authors/:id', (req, res) => {
        // deletar author
    });
}
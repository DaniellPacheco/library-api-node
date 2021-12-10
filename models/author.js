const moment = require('moment');
const connection = require('../config/connection');


class Author {
    adiciona(authorData, res) {
        const createdAt = moment().format('YYYY-MM-DD HH:mm:ss');
        const groupAll = {...authorData, createdAt};

        const nameUndefined = authorData.name == undefined;
        const nameNull = authorData.name == null;

        const validations = [
            {
                name: 'name',
                valid: nameUndefined,
                message: 'Invalid name'
            },
            {
                name: 'name',
                valid: nameNull,
                message: 'Invalid name'
            }
        ];

        const errors = validations.filter(field => !field.valid);
        const existsError = errors.length;

        if(existsError) {
            res.status(400).json(errors);
        } else {
            const sql = 'INSERT INTO Authors SET ?';

            connection.query(sql, groupAll, (errors, results) => {
                if(errors) {
                    res.status(400).json(errors);
                } else {
                    res.status(201).json(results);
                }
            })
        }
    }
}

module.exports = new Author;
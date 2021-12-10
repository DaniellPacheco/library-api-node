class Tables {

    init(connection) {
        this.connection = connection;

        this.createAuthors();
        this.createBooks();
    }


    createAuthors() {
        const sql = 'CREATE TABLE IF NOT EXISTS authors(id_author int AUTO_INCREMENT NOT NULL, name VARCHAR(60) NOT NULL, country VARCHAR(60) NOT NULL, createdAt DATETIME NOT NULL, PRIMARY KEY(id_author))';

        this.connection.query(sql, error => {
            if(error) {
                console.log(error);
            } else {
                console.log('Table "Author" created');
            }
        });
    }

    createBooks() {
        const sql = 'CREATE TABLE IF NOT EXISTS books(id_book int PRIMARY KEY AUTO_INCREMENT NOT NULL, title VARCHAR(255) NOT NULL, description VARCHAR(60) NOT NULL, author int NOT NULL, categorie VARCHAR(60) NOT NULL, createdAt DATETIME NOT NULL, CONSTRAINT fk_author_book FOREIGN KEY(author) REFERENCES authors(id_author) ON DELETE NO ACTION ON UPDATE NO ACTION)';
        this.connection.query(sql, error => {
            if(error) {
                console.log(error);
            } else {
                console.log('Table "Books" created');
            }
        })
    }
}

module.exports = new Tables;
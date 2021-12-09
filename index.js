const customExpress = require('./config/customExpress');
const connection = require('./config/connection');
const Tables = require('./config/tables');

connection.connect(error => {
    if(error) {
        console.log(error);
    } else {
        console.log("Connected Database");

        Tables.init(connection);
        
        const app = customExpress();
        
        app.listen(3000, () => console.log('The server is connected on the port 3000!'));
    }
});

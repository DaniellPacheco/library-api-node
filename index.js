const customExpress = require('./config/customExpress');

const app = customExpress();

app.listen(3000, () => console.log('The server is connected on the port 3000!'));
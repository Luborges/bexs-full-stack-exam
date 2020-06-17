const app = require('./app');

console.log(`port: ${process.env.PORT}`);
app.listen(process.env.PORT);
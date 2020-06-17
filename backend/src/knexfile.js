const path = require ('path');

module.exports = {
    development: {
        client: 'sqlite3',
        connection: {
            filename: path.resolve(__dirname, 'database', 'database.sqlite'),
        },
        migrations: {
            directory: path.resolve(__dirname, 'database', 'migrations'),
        },
        useNullAsDefault: true,
    },
    test: {
        client: 'sqlite3',
        connection: {
          filename: path.resolve(__dirname, 'database', 'test.sqlite'),
        },
        migrations: {
          directory: path.resolve(__dirname, 'database', 'migrations'),
        },
        useNullAsDefault: true,
    },
};
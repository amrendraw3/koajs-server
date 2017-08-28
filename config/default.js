module.exports = {
    app: {
        name: 'koaStarterApp',
        version: '0.0.1'
    },
    server: {
        port: 3000
    },
    template: {
        path: '../../dist',
        options: {
            extension: 'html'
        }
    },
    session: {
        secretKey: 'myKoajsSecretKey'
    },
    database: {
        name: 'tayh',
        username: 'root',
        password: 'tayh'
    }
};
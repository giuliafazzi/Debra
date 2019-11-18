const node_env = process.env.NODE_ENV
require('custom-env').env(node_env);

module.exports = {
    dialect: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    username: process.env.POSTGRES_USER || 'docker',
    password: process.env.POSTGRES_PASSWORD || '123',
    database: 'debra',
    define: {
        timestamps: true,
        underscored: true,
    },
};
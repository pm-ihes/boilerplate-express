const app = require('./app');
const { logger } = require('lib/utils');

const port = 3000;

app.listen(port, () => {
    logger.info(`Die App läuft auf port: ${port}`);
});
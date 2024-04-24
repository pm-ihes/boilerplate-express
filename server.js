const app = require("./app");
const config = require("lib/config");
const { logger } = require("lib/utils");

const port = config.server.port;

app.listen(port, () => {
    logger.info(`Die App läuft auf port: ${port}`);
});

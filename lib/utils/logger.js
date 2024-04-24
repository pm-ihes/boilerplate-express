const { createLogger } = require("bunyan");
const config = require("lib/config");
const PrettyStream = require("bunyan-prettystream");
const serializers = require("./bunyan-serializers");

const prettyStdOut = new PrettyStream();
prettyStdOut.pipe(process.stdout);

const logger = createLogger({
    name: config.service.name,
    stream: prettyStdOut,
    serializers,
});

module.exports = logger;

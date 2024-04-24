const { createLogger } = require("bunyan");
const PrettyStream = require("bunyan-prettystream");
const serializers = require("./bunyan-serializers");

const prettyStdOut = new PrettyStream();
prettyStdOut.pipe(process.stdout);

const logger = createLogger({
    name: "mail-service",
    stream: prettyStdOut,
    serializers,
});

module.exports = logger;

const { logger } = require('lib/utils');

module.exports = (req, res, next) => {
    logger.info({ req }, 'Request incoming');

    const { end }  = res;
    res.end = function (...args) {
        logger.info({ res: this }, 'Outgoing response.');
        end.apply(this, args);
    };

    next();
}
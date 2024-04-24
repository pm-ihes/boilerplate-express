module.exports = {
    req(req) {
        return {
            id: req.id,
            method: req.method,
            url: req.url,
            headers: req.headers,
            remotePort: req.connection.remotePort,
            remoteAddress: req.connection.remoteAddress,
            ip: req.ip,
        };
    },
    res(res) {
        return {
            id: res.req.id,
            statusCode: res.statusCode,
            header: res._header
        };
    }
};

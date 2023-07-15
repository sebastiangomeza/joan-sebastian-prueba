const Log = require('../models/Log');


async function createLog(req,res,next) {
    try {
        const { method, url } = req;
        await Log.create({ endpoint: url });
        next()
    } catch (error) {
        next()
    }

}

module.exports = createLog
const repository = require('../../../domain/user/repository');
const controller = require('./controller').build({repository});
const route = require('./route').build(controller);
module.exports = {route};
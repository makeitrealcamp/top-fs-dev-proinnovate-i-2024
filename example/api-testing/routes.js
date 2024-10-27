/**
 * Main application routes
 */
const task = require('./api/task');
const asset = require('./api/asset');

function routes(app) {
  app.use('/api/tasks', task);
  app.use('/api/assets', asset);
}

module.exports = routes;

/**
 * Module for Deploy view
 * @module controllers/deploy
 * @param {Object} app - Express App instance
 */
module.exports = function (app) {
    /**
     * GET Renders deploy page
     * @event GET /deploy
     * @param {Object} req - Express req object
     * @param {Object} res - Express res object
     */
    app.route('/deploy').get((req, res) => {
      let model = require('models/global')(req, res)
      model.content.pageTitle = '{content.appTitle} - Deploy'
      res.render('deploy', model)
    })
  }
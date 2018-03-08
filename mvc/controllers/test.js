/**
 * Module for Test view
 * @module controllers/test
 * @param {Object} app - Express App instance
 */
module.exports = function (app) {
    /**
     * GET Renders test page
     * @event GET /test
     * @param {Object} req - Express req object
     * @param {Object} res - Express res object
     */
    app.route('/test').get((req, res) => {
      let model = require('models/global')(req, res)
      model.content.pageTitle = '{content.appTitle} - Test'
      res.render('test', model)
    })
  }
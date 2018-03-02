/**
 * Module for Info view
 * @module controllers/info
 * @param {Object} app - Express App instance
 */
module.exports = function (app) {
    /**
     * GET Renders info page
     * @event GET /info
     * @param {Object} req - Express req object
     * @param {Object} res - Express res object
     */
    app.route('/info').get((req, res) => {
      let model = require('models/global')(req, res)
      model.content.pageTitle = '{content.appTitle} - Info'
      res.render('info', model)
    })
  }
/**
 * Module for Build view
 * @module controllers/build
 * @param {Object} app - Express App instance
 */
module.exports = function (app) {
    /**
     * GET Renders build page
     * @event GET /build
     * @param {Object} req - Express req object
     * @param {Object} res - Express res object
     */
    app.route('/build').get((req, res) => {
      let model = require('models/global')(req, res)
      model.content.pageTitle = '{content.appTitle} - Build'
      model.path = "build"
      res.render('build', model)
    })
  }
/**
 * Module attaches homepage route handlers
 * @module controllers/homepage
 * @param {Object} app - Express app object
 */
module.exports = function (app) {
  /**
   * GET Renders hompage
   * @event GET /
   * @param {Object} req - Express req object
   * @param {Object} res - Express res object
   */
  app.route('/').get((req, res) => {
    let model = require('models/global')(req, res)
    model.content.pageTitle = '{content.appTitle} - Homepage'
    res.render('homepage', model)
  })
}

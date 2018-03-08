/**
 * Module for creating a new project
 * @module controllers/newProject
 * @param {Object} app - Express app object
 */
module.exports = function (app) {
  /**
   * POST Project name
   * @event POST /
   * @param {Object} req - Express req object
   * @param {Object} res - Express res object
   */
  app.route('/').post((req, res) => {
    let rb = req.body
    let project = require('models/generateProject')(rb)
    let model = require('models/global')(req, res)
    res.app.locals.project = project;

    if (project.nav.length === 0) {
      model.tempProjectName = project.name;
      res.render('homepage', model)
    }
    else {
      for (i = 0; i < project.nav.length; i++) {
        if (project.nav[i] === 'build') {
          res.redirect(project.nav[i])
          break
        }
        else if (project.nav[i] === 'test') {
          res.redirect(project.nav[i])
          break
        }
        else if (project.nav[i] === 'deploy') {
          res.redirect(project.nav[i])
          break
        }
      }
    }
  });
}

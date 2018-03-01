/**
 * Module is the global model for all CADRE responses. Returns application title, page title,
 * current year, header data, and Node environment variables
 * @module models/global
 * @param {Object} req - Express req object
 * @param {Object} res - Express res object
 * @return {Global} - Global model object
 */
// sample static global base model
let model = {
  content: {
    appTitle: 'CADRE',
    pageTitle: '{content.appTitle}'
  }
};

// extend global model to provide additional useful vars at runtime and export it
module.exports = function (req, res) {
  var scripts = ['/js/main.js'];

  if (process.env.NODE_ENV === 'development') {
    scripts.push('/reload/reload.js')
  }

  return {

    // always static
    content: model.content,

    // recalculated each require
    currentYear: new Date().getFullYear(),
    mainDomain: req.headers['x-forwarded-host'] || req.headers.host,
    NODE_ENV: process.env.NODE_ENV,
    scripts: scripts
  }
}

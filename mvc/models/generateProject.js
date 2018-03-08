/**
 * Module takes a request body and returns a project object
 * @param  {Object} rb - Express client request body object
 * @return {Object} tempProject - tempProject object
 */
module.exports = function(rb) {
  var tempProject = {
    name: '',
    nav: []
  };

  if (rb.projectTitle) {
    tempProject.name = rb.projectTitle;
  }
  if (rb.build) {
    tempProject.nav.push(rb.build);
  }
  if (rb.test) {
    tempProject.nav.push(rb.test);
  }
  if (rb.deploy) {
    tempProject.nav.push(rb.deploy);
  }

  return tempProject;
};
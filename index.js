const nunjucks = require('nunjucks')

module.exports = (robot) => {
  // Get an express router to expose new HTTP endpoints
  // https://probot.github.io/docs/http/
  const app = robot.route()

  nunjucks.configure('views', {
    autoescape: true,
    express: app
  });

  app.get('/', (req, res) => res.render('index.njk'))
}

const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(proxy(['/api','/search', '/auth/facebook'], { target: 'http://localhost:5000' }));
}

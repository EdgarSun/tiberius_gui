var connect = require('connect'),
  directory = __dirname,
  port = 3001;

connect()
  .use(connect.logger('dev'))
  .use(connect.static(directory))
  .listen(port);

console.log('Listening on port ' + port);
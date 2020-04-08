const app = require('express')();

require('./setup/setupDB');
require('./setup/setupMiddlewares')(app);
require('./setup/setupRoutes')(app);

app.listen(process.env.PORT || 7000);

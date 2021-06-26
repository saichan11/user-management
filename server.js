var mongoose = require('mongoose'); //MongoDB integration
var app = require('./app');

// Connect to Database
mongoose.connect('mongodb+srv://Sai:<password>@realmcluster.q73en.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

// Start server
var port = 3000;
app.listen(port, function() {
    console.log('Express server listening on port %d in %s mode', port, app.settings.env);
});
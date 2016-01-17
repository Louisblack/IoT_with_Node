var light = require('./light'),
    express = require('express'),
    app = express();

app.post('/turnOn', function(req, res) {
    light.turnOn();
    res.send('Done!');
});

app.post('/turnOff', function(req, res) {
    light.turnOff();
    res.send('Done!');
});

app.listen(3000, function() {
    console.log('Light listening on port 3000!');
})

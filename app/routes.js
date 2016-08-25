module.exports = function(app, streams) {

  // GET home 
  var streams = function(req, res) {
    res.render('index', { 
                          title: 'Project RTC', 
                          header: 'WebRTC live streaming',
                          username: 'Username',
                          share: 'Share this link',
                          footer: 'pierre@chabardes.net',
                          id: req.params.id
                        });
  };

  // GET streams as JSON
  var displayStreams = function(req, res) {
    var streamList = streams.getStreams();
    // JSON exploit to clone streamList.public
    var data = (JSON.parse(JSON.stringify(streamList))); 

    res.status(200).json(data);
  };

  var welcome = function (req, res) {
      res.render('welcome', {title: 'Ruak Streams: welcome and talk to the others.'});
  };

  app.get('/streams.json', displayStreams);
  app.get('/', welcome);
  app.get('/streams', streams);
  // app.get('/', index);
  app.get('/streams/:id', streams);
};
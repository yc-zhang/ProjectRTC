module.exports = function(app, streams) {

  // GET home 
  var streams = function(req, res) {
    res.render('index', {
        title: 'streams',
        id: req.params.id,
        streams_flag: true,
        username: 'Wenting'
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
      res.render('welcome', {
          title: 'welcome and talk to the others.',
          home_flag: true
      });
  };

  app.get('/streams.json', displayStreams);
  app.get('/', welcome);
  app.get('/streams', streams);
  app.get('/streams/:id', streams);
};
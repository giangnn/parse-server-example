let express = require('express');
let ParseServer = require('parse-server').ParseServer;
let app = express();

let api = new ParseServer({
  databaseURI: 'mongodb://localhost:27017/dev', // Connection string for your MongoDB database
  //cloud: './main.js', // Absolute path to your Cloud Code
  appId: 'myAppId',
  masterKey: 'myMasterKey', // Keep this key secret!
  dotNetKey: 'myDotnetKey',
  fileKey: 'optionalFileKey',
  serverURL: 'http://localhost:1337/parse', // Don't forget to change to https if needed
  liveQuery: {
    classNames: ['Order']
  }
});

app.use('/parse', api);

let httpServer = require('http').createServer(app);
httpServer.listen(1337);
let parseLiveQueryServer = ParseServer.createLiveQueryServer(httpServer);
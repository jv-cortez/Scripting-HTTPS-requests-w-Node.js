const https = require('https');

module.exports = function getHTMLChunks (options, callback) {

    https.get(options, function (response) {

      response.setEncoding('utf8');

      var buffer = '';
      response.on('data', function (chunk) {
        buffer += chunk;
        console.log('Chunk Received. Length:', chunk.length, '\n')
      });

      response.on('end', function() {
        callback(buffer);
      });

    });

};




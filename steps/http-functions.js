module.exports = function getHTMLChunks (options, callback) {

const https = require('https');

  function getHTMLChunks (requestOptions, callback) {


    https.get(requestOptions, function (response) {

      response.setEncoding('utf8');

      var buffer = '';
      response.on('data', function (chunk) {
        buffer += chunk;
        console.log('Chunk Received. Length:', chunk.length, '\n');
      });

      response.on('end', function() {
        callback(buffer);
      });

    });

  }
  function printHTML (html) {
    console.log(html);
  }

  getHTMLChunks({
    host: 'sytantris.github.io',
    path: '/http-examples/step5.html'
  }, printHTML);

}





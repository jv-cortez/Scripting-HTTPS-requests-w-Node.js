const https = require('https');

// the host can be thought of as the domain name you want to read from,
// and the path is the resource - '/' is the root path, but if you wanted to read a
// particular resource (like '/login/index.html'), that would be defined in the path
function getAndPrintHTMLChunks (requestOptions) {


  /* Add your code here */
  // notice that https.get takes a callback with one parameter -
  // response, which is a Stream that represents the HTTP response
  https.get(requestOptions, function (response) {

    // set encoding of received data to UTF-8
    response.setEncoding('utf8');

    // the callback is invoked when a `data` chunk is received
    var buffer = '';
    response.on('data', function (chunk) {
      buffer += chunk;
      console.log('Chunk Received. Length:', chunk.length, '\n');
    });

    // the callback is invoked when all of the data has been received
    // (the `end` of the stream)
    response.on('end', function() {
      console.log('Response stream complete.', buffer, "\n");
    });

  });

}
getAndPrintHTMLChunks({
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
});

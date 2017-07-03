var getHTML = require('./http-functions');

function printReverse (html) {
  var newHTML = html.split(", ").reverse().join();
  console.log(newHTML);
}


getHTML({
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
}, printReverse);
var getHTML = require('./http-functions');

function printLowerCase (html) {
  var newHTML = html.toLowerCase();
  console.log(newHTML);
}

getHTML({
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
}, printLowerCase);
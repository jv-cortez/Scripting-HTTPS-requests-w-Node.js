var getHTML = require('./http-functions');

function printHTML (html) {
  console.log(html);
}

getHTML({
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
}, printHTML);


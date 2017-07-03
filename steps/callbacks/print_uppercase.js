var getHTML = require('./http-functions');


var link = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUpperCase (html) {
  var newHTML = html.toUpperCase();
  console.log(newHTML);
};

getHTML(link, printUpperCase);
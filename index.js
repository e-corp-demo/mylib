// mylib/index.js
const st = require('st');

// You can create a function that uses the 'st' library
function createStaticServer(dirPath) {
  return st({
    path: dirPath,
    url: '/',
    index: 'index.html',
    passthrough: true
  });
}

// Export the function so it can be used by others
module.exports = {
  createStaticServer,
};

//require babel to transpile before our tests run
require('babel-register');

//disable webpack featsures that Mocha doesn't understand'
require.extensions['.css'] = function() {};

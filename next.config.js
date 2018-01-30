const path = require('path');

/* - simoes - this doesn't work. check later */

module.exports = {
	webpack: (config) => {
		const webpack = require('webpack');
		config.resolve = config.resolve || [];
        config.resolve.modules = config.resolve.modules || [];
		config.resolve.modules.push(path.resolve('../../'));
		config.resolve.modules.push(path.resolve('./node_modules'));
		return config;
	},
	exportPathMap: function() {
    return {
      '/': { page: '/' }
    }
  }
}

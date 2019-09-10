'use strict';
const rc = require('rc');

const registryUrl = (scope, registry) => {
	const result = rc('npm', {registry: 'https://registry.npmjs.org/'});
	const url = registry || result[`${scope}:registry`] || result.config_registry || result.registry;
	return url.slice(-1) === '/' ? url : `${url}/`;
};

module.exports = registryUrl;
// TODO: Remove this for the next major release
module.exports.default = registryUrl;

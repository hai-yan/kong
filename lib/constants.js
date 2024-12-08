const constants = {
	timeouts:{
		waitForElementMs: process.env.WAIT_WEB_ELEMENT_MS || 10000,
		long_time_out: process.env.WAIT_WEB_ELEMENT_MS || 120000
	}
};

module.exports = constants;
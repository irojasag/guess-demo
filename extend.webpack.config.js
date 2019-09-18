const { GuessPlugin } = require('guess-webpack');
const { parseRoutes } = require('guess-parser');

module.exports = {
	plugins: [
		new GuessPlugin({
			GA: '201800331',
			runtime: {
				delegate: false
			},
			routeProvider() {
				return parseRoutes('.');
			},
			period: {
				startDate: new Date('09-17-2019'),
				endDate: new Date()
			}
		})
	]
};

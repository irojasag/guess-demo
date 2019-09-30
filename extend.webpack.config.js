const { GuessPlugin } = require('guess-webpack');
const { parseRoutes } = require('guess-parser');

module.exports = {
  output: {
    futureEmitAssets: false
  },
	plugins: [
		new GuessPlugin({
      GA: '201618832',
      // reportProvider() {
			// 	return Promise.resolve(JSON.parse(require('fs').readFileSync('./routes.json')));
			// },
			runtime: {
				delegate: false
			},
			routeProvider() {
				return parseRoutes('.');
      },
      jwt:{
        private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCzAp4ouehguQj5\nv9UiHEd9RT6QOGCQYufGGVJocb9JFpekZKEF3fxso2oGe/fwLaVzH/1db1Qr3598\nSbGIZkoaCi62/mIpKu/OoNzMwnZSPLilHSuUB411ZS4nNmOF9WjUDmRokNrAfgyf\nIpUBySAnuadGKsvdk4ykLonH3Yp6q6cad08HarLAFPKVpbLn1OBE9S9qKxbqNMyD\nbsP3M9NUXJBg18T/A5ectWMd4KPOsLzKWd94+ZKI+RjCFLhHjRkS1fAPP+NFwrQ7\nX0JUMca5WBJCf2+7LoHzivn/uG4M3fDpaXAwExXMJZsMYUb2CGD/HzLqY5G/4vML\ndO2oDYphAgMBAAECggEAH7P/PEG+lsC2hvrTPaUKATTeAW9GpNOrbjFmX6KDiOd0\nKFR9ExuvPLNNUAQtE0+WPXclKWLR4qpKZdnsU/afuZBjmRug2V8mFO9241muWF6y\nKeXqZZ9XzXqDq8StaBhgPiwlWsKKx2wbgqR+hNAwvnBaIGpsbBvZXOt0Ed5Zy+Ml\nsQUEA+KGF4oBen0YepkqAJQ5BOWKfCQBfG0/hSR74BsO1vw1yz6n3mXkdmpSP6o1\nmMNJQE40FVPQpGHjdMk+S5gkSqC5mO6vm6/CrIoRLXfHAgq2vRMMkDwcJ0PXa7p9\nH6sTNOSNejYzGt6iKiHvHqaitLW8JQ8NMxy5cHaBRQKBgQDzp2MBXCpfEyxE+gux\n9tGgCKPu4zu4R8s5OJPyVN2CnznXCZHgwu7R//fhrK328AbhLkuNDKo+yJ2SwEUN\nisosBNvV18B8AOSdMvPQei5U6YLREBYzJQL//yfRtcl+MPHn1T8+4c6iFIL3lzuh\nADjlySfhZ+4N6FZ+U32VZ9/d3QKBgQC8FLDoG7FMguU0NJpzdrEW8PDs3ZTLEyyx\nL3paIBnkYHxVb8xfZanf12G6RieYDfr4EXD2Ufb+q1AMp8hs0QEqpmF1v9Ib4hl1\na13M8qZ9X76ooKuY7eRRhMS5os2Zu92MP6ZMuOLzQxkLnbxx/t+VDDVMndZnwKZq\ncqgOrD5gVQKBgF4FBE49C1iepGGFf0fP7znqu59t7diBU6kj7OsA1m0WFhKlbbYm\nYlOEi1l48bQtEOqJm7u03GjXrv421S6RlMwBn/bXhz4SdiU2ySB0VTaM2N7lbzuT\nF6JDClGA7VyVdHM6NWqFZd/jPFpf8DGDTXFV+t6e5RxWwDGE9BvX9mm9AoGAM3wm\ngSMzgZJDU+sibIENMQ57pRty47Q4A7jPcWRgMhgHcQvNkj+uJMw8wFT7+a+6B7Ye\nig8d4dDbdNtpDgCYpSgufaEozuExvubJIpU55hATjO2Oi6pzWa1SfM6IIZE/sGis\nCUyDM7wmWvuu3jW61n4lCPgb/QLLi1AfmQSlfpECgYB/4peYSkxpU+F1LpQ6OHS2\nEP+aJpWfxwZ12VoYno5UBHwf5x09qa2ixIjzhMww9MIon5U9YeTjOfSquUOZhzjx\nRabWtOuItmusXFVAH1zMFha5zXhKh1F/GK9Wm+7zw3Y5seMP35yV8whDx9cnAwQx\nOcbhO0EZfD2QW5Y8TWi73g==\n-----END PRIVATE KEY-----\n",
        client_email: "demo-614@guessjsangulardemo.iam.gserviceaccount.com"
      },
			period: {
				startDate: new Date('09-29-2019'),
				endDate: new Date()
			}
		})
	]
};

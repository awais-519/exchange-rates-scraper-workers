const cheerio = require('cheerio');
const axios = require('axios');

const URL = 'https://www.iban.com/exchange-rates';

axios(URL)
	.then((resp) => {
		const html = resp.data;

		const $ = cheerio.load(html);
		const countriesWithRates = $(
			'.table.table-bordered.table-hover.downloads > tbody > tr'
		);
		countriesWithRates.each(function () {
			const rates = $(this).find('td').text();
			console.log(rates);
		});
	})
	.catch((err) => console.log(err));

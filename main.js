const cheerio = require('cheerio');
const axios = require('axios');

const URL = 'https://www.iban.com/exchange-rates';

axios(URL)
	.then((resp) => {
		const html = resp.data;

		const $ = cheerio.load(html);
		const stats = $('.table.table-bordered.table-hover.downloads > tbody > tr');

		stats.each(function () {
			const rates = $(this).find('td').text();
			console.log(rates);
		});
	})
	.catch((err) => console.log(err));

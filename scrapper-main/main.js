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

		let dataObj = new Object(); 
		countriesWithRates.each(function () {
			const rates = $(this).find('td').text();
			//console.log(rates);
			let newStr = rates.split('\t');
			newStr.shift();
			console.log(newStr);
			//formatStr(newStr, dataObj)
		});
	})
	.catch((err) => console.log(err));



	function formatStr(arr, dataObj){
		// regex to match all the words before the first digit
		let regExp = /[^A-Z]*(^\D+)/ 
		let newArr = arr[0].split(regExp); // split array element 0 using the regExp rule
		dataObj[newArr[1]] = newArr[2]; // store object 
		console.log(dataObj)
	}




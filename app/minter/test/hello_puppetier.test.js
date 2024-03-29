
let url = process.env.NEXT_PUBLIC_URL
const puppeteer = require('puppeteer')
const expect = require('chai').expect
const data = require('../utils/data.js')
const axios = require('axios').default;
const fetcher = require('../services/fetcher.js')

const fs = require('fs');
const getnftowners = require('../services/fetcher.js');

describe('Get the nft data', () => {
	it('Should launch the browser and collect all data', async () => {
		const browser = await puppeteer.launch({
			headless: false,
			devtools: false,
			slowMo: 100,
		})
		try {
			const page = await browser.newPage()

			const fakeUserAgent =
				'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36'
			await page.setExtraHTTPHeaders({ 'Accept-Language': 'en-GB,en-US;q=0.9,en;q=0.8', })
			await page.setUserAgent(fakeUserAgent)
			await page.setDefaultTimeout(300000)

		 	let db = []
			for (let i = 0; i <= 10; i++) {
				await page.goto(
                    `https://opensea.io/assets/ethereum/0xb07f97c14d1b1b08481f9e2c3b8f13226ec0c903/${i}`,{
						waitUntil: 'networkidle2',
						timeout: 300000,
					}
				)

				const link = await page.$$eval('span a', selector =>
					selector.map(tag => tag.getAttribute('href'))
				)

				let openSeaURL = link[1].split('/')

				db.push({
					contract: link[0].substring(link[0].length - 42),
					cid: openSeaURL[4],
					tokenId: openSeaURL[5].substring(0, openSeaURL[5].length - 5),
					link: link[1],
					json: [],
					price: 0,
					owner: '',
				})

				console.log('llego', i)

				await page.waitForTimeout(1000)
				if (i == 10) {
					expect(db.length).to.equal(11)
				}
			}
			await browser.close()
		

			//console.log(data);
			db = data
			let foo;
			
			for(let i = 0; i < db.length; i++){
				foo = await axios.get(db[i].link).then(res => {
					return JSON.stringify(res.data)
				})
				db[i].json = foo
			}
			
			//overrite utils/data.js with the new data and save it to the file
			fs.writeFileSync('./utils/data.js', `${JSON.stringify(db)}`)

			
			//store in a mongoDB
		} catch (error) {
			console.log('genius...', error)
		}
	})
})



//available shit
//await page.waitForSelector('h1');
// await page.goto("http://dev.to");
// await page.goBack();
// await page.waitForSelector('a');
// await page.click('a');

//await page.goto('https://devexpress.github.io/testcafe/example/');
//await page.type('#developer-name', 'Sebastian Luján', { delay: 0 });
// await page.click('#tried-test-cafe', { clickCount: 1});
// await page.select('#preferred-interface', 'JavaScript API');
//await page.goBack();

// const text = await page.$eval("h1", (element) => element.textContent);

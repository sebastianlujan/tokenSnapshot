let url = process.env.NEXT_PUBLIC_URL
const puppeteer = require('puppeteer')
const axios = require('axios').default
const fs = require('fs')

const pepe = async () => {
	const browser = await puppeteer.launch({
		headless: false,
		devtools: false,
		slowMo: 100,
	})
	try {
		const page = await browser.newPage()

		const fakeUserAgent =
			'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36'
		await page.setExtraHTTPHeaders({
			'Accept-Language': 'en-GB,en-US;q=0.9,en;q=0.8',
		})
		await page.setUserAgent(fakeUserAgent)
		await page.setDefaultTimeout(300000)

		let db = []
		for (let i = 0; i <= 10; i++) {
			await page.goto(
				`https://opensea.io/assets/ethereum/0xb07f97c14d1b1b08481f9e2c3b8f13226ec0c903/${i}`,
				{
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

			console.log('ok', i)
			//await page.waitForTimeout(1000)
		}
		await browser.close()

		console.log(db)

		let foo

		// for (let i = 0; i < db.length; i++) {
		// 	foo = await axios.get(db[i].link).then(res => {
		// 		return JSON.stringify(res.data)
		// 	})
		// 	db[i].json = foo
		// }

		//overrite utils/data.js with the new data and save it to the file
		fs.writeFileSync('./utils/data.js', `${JSON.stringify(db)}`)
		return db
	} catch (error) {
		console.log('😨 genius...', error)
	}
}

export default pepe

//to scrapp a list of selectors we can use Array.from(foo)
/* 
    we can use the methods of a node element in regular DOM

    .parentElement.nextElement
    .parentElement.nextElementSibling
    .getAttribute("src")


    i need to make something similar to this:

    list = [...document.querySelectorAll("span.sc-1xf18x6-0.sc-1w94ul3-0.sc-1d1o334-1.haVRLx.jIeJKA.eTCgWn")]
    list[1].firstChild.getAttribute("href")

    think again genius... 😨
    document.querySelectorAll("span a")[1].getAttribute("href")

*/

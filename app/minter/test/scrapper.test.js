// "use strict";
// let url = process.env.NEXT_PUBLIC_URL
// const puppeteer = require('puppeteer');

// describe('My First Puppeteer Test', () => {
//     it("Should launch the browser", async () => {
//         const browser = await puppeteer.launch({
//             headless: false,
//             slowMo: 500,
//             devtools: false,
//         });
//         const page = await browser.newPage();
        
//         await page.goto("http://example.com");
//         await page.waitForSelector('h1');
//         await page.goto("http://dev.to");
//         await page.goBack();
//         await page.waitForSelector('a');
//         await page.click('a');

//         await page.goto('https://devexpress.github.io/testcafe/example/');
//         await page.type('#developer-name', 'Sebastión Luján', { delay: 0 });
//         await page.click('#tried-test-cafe', { clickCount: 1});
//         await page.waitFor(5000)
//         await browser.close();
//     })
// })

// let scrappy

// let query = process.env.NEXT_PUBLIC_QUERY
// let url = process.env.NEXT_PUBLIC_URL

// //https://opensea.mypinata.cloud/ipfs/QmSXxjnqf5ggGSackfCoHAL3nXrVNiWG14FoWDwhwgj965/0000000000000000000000000000000000000000000000000000000000000002.json

// const pepe =  async () => {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
    
//         let openSeaURL = `${url}/0`
//         await page.goto(openSeaURL);
        

//         let nftUrl = await page.evaluate( () => {
//             let db = []
//             let items = Array.from(document.querySelectorAll("span a"))
//             console.log((items == null || items == undefined))
//             //let nodeList = page.$eval("span a", (anchor) => anchor.getAttribute("href"))
//             return items.map(item => item.getAttribute("href"));
//         })
        
//         console.log(nftUrl, "llego")
//         await browser.close()

//         // scrappy = {
//         //     tokenId: i,
//         //     cid: "uri",
//         //     // image: "ipfs://sdfkhs",
//         //     // owners: [1,2,3],
//         //     // json: {foo: "bar"},
//         //     scrapped: nftUrl
//         // }  
        
//         // db.push(scrappy)
//         // console.log(db)
//     // debugger;
//     // return db
// }

// export default pepe;

// //to scrapp a list of selectors we can use Array.from(foo)
// /* 
//     we can use the methods of a node element in regular DOM

//     .parentElement.nextElement
//     .parentElement.nextElementSibling
//     .getAttribute("src")


//     i need to make something similar to this:

//     list = [...document.querySelectorAll("span.sc-1xf18x6-0.sc-1w94ul3-0.sc-1d1o334-1.haVRLx.jIeJKA.eTCgWn")]
//     list[1].firstChild.getAttribute("href")

//     think again genius... 😨
//     document.querySelectorAll("span a")[1].getAttribute("href")

// */

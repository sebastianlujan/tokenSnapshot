const puppeteer = require('puppeteer');

let db = []
let scrappy
let query = process.env.NEXT_PUBLIC_QUERY
let url = process.env.NEXT_PUBLIC_URL
//https://opensea.mypinata.cloud/ipfs/QmSXxjnqf5ggGSackfCoHAL3nXrVNiWG14FoWDwhwgj965/0000000000000000000000000000000000000000000000000000000000000002.json

const pepe = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://en.wikipedia.org/wiki/Web_scraping")
    let title = await page.evaluate( ()=>{
        let heading = document.querySelector("#Techniques")
        //to scrapp a list of selectors we can use Array.from(foo)
        /* 

        we can use the methods of a node element in regular dom
        .parentElement.nextElement
        .parentElement.nextElementSibling
        .getAttribute("src")
        */
        return heading.textContent.trim()
    })
    console.log(title, "llego")
    await browser.close()

    scrappy = {
        tokenId: "foo",
        image: "ipfs://sdfkhs",
        owners: [1,2,3],
        json: {foo: "bar"},
        scrapped: title
    }    
    
    db.push(scrappy)
    console.log(db)
    return db
};

export default pepe;

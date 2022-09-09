const axios = require('axios').default;
const fs = require('fs');
let schema = require('./schema.js')
let secrets = require('../secrets.json')

const getnftowners = async (address, tokenId) => {
	const url = `https://deep-index.moralis.io/api/v2/nft/${address}/${tokenId}/owners?chain=eth&format=decimal`
	const options = {
		headers: {
			Accept: 'application/json',
			'X-API-Key': secrets.API_KEY,
		},
	}

	let request = await axios.get(url, options).then((res) => {
        return res.data.result
    })
    return request;
}

const populateSchema = (nftData , schema) => {
    let Schema = schema;
    let owners = []

    nftData.map( elem => owners.push(elem.owner_of))

    Schema.owner_of = owners
    Schema.token_id = nftData[0].token_id
    Schema.token_hash = nftData[0].token_hash
    Schema.block_number_minted = nftData[0].block_number_minted
    Schema.block_number = nftData[0].block_number
    Schema.contract_type = nftData[0].contract_type
    Schema.token_uri = nftData[0].token_uri
    Schema.metadata = JSON.parse(nftData[0].metadata)
    Schema.last_token_uri_sync = nftData[0].last_token_uri_sync
    Schema.last_metadata_sync = nftData[0].last_metadata_sync
    return Schema;
}

let getSchema = async () => {
    let address = secrets.ADDRESS
    
    let result = []
    for(let i = 0; i<=10; i++){
        let nftData = await getnftowners(address, i)
       
        await new Promise(r => setTimeout(r, 1000));
        let Schema = await populateSchema(nftData, schema(address))
    
        result.push(Schema)
        console.log(result)
    }
    //fs.writeFileSync(__dirname + `/nftData.json`, JSON.stringify(result))
    return result;
}

module.exports = getSchema
const axios = require('axios').default;


const address = '0xb07f97c14d1b1b08481f9e2c3b8f13226ec0c903'

const getnftowners = async (address, tokenId) => {
	const url = `https://deep-index.moralis.io/api/v2/nft/${address}/${tokenId}/owners?chain=eth&format=decimal`
	const options = {
		headers: {
			Accept: 'application/json',
			'X-API-Key': '',
		},
	}

	let request = await axios.get(url, options).then((res) => {
        return res.data.result
    })
    return request;
}

let schema = (address) => {
    return {
        token_address: address,
        token_id: null,
        owner_of: [],
        token_hash: null,
        block_number_minted: null,
        block_number: null,
        contract_type: null,
        token_uri: null,
        metadata:  null,
        last_token_uri_sync: null,
        last_metadata_sync: null
    }
}

const populateSchema = (nftData , schema) => {
    let Schema = schema;
    let owners = new Set()

    nftData.map( elem => owners.add(elem.owner_of))

    Schema.owner_of = owners
    Schema.token_id = nftData[0].token_id
    Schema.token_hash = nftData[0].token_hash
    Schema.block_number_minted = nftData[0].block_number_minted
    Schema.block_number = nftData[0].block_number
    Schema.contract_type = nftData[0].contract_type
    Schema.token_uri = nftData[0].token_uri
    Schema.metadata = nftData[0].metadata
    Schema.last_token_uri_sync = nftData[0].last_token_uri_sync
    Schema.last_metadata_sync = nftData[0].last_metadata_sync
    return Schema;
}

let getSchema = async (address, schema) => {

    let result = new Set()
    for(let i = 0; i<=10; i++){
        let nftData = await getnftowners(address, i)
       
        await new Promise(r => setTimeout(r, 1000));
        let Schema = await populateSchema(nftData, schema)
        result.add(Schema)
    }

    return JSON.stringify(result);
}

module.exports = getSchema
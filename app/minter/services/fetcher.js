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

// {
//     token_address: '0xb07f97c14d1b1b08481f9e2c3b8f13226ec0c903',
//     token_id: '0',
//     amount: '1',
//     owner_of: '0xa289364347bfc1912ab672425abe593ec01ca56e',
//     token_hash: '8b5db43422a5d4159a01938a9918c529',
//     block_number_minted: '13482115',
//     block_number: '13555168',
//     contract_type: 'ERC1155',
//     name: null,
//     symbol: null,
//     token_uri: 'https://ipfs.moralis.io:2053/ipfs/QmSXxjnqf5ggGSackfCoHAL3nXrVNiWG14FoWDwhwgj965/0000000000000000000000000000000000000000000000000000000000000000.json',
//     metadata: `
// {"name":"Egguardo",
// "description":"After months of being bullied in the empire's academy, Egguardo's fate changed when one of his dishes ended up being served at the court banquet. From that day on he was appointed as the court's head chef. Egguardo has been responsible for some of the emperor's most dangerous and eccentric expeditions. The logs for some of the missions have been cleared from the Etherean Imperial File System (EIFS).",
// "external_url":"https://www.ethereanempire.xyz",
// "image":"ipfs://QmfNce95hQPZWcawaM3kW8oRxtr9ToQfMKnnaPVk4JyNGV",
// "attributes":
// [{"trait_type":"Personality","value":"Shy"},
// {"trait_type":"Interests","value":"Cooking eggsotic & dangerous foods"},
// {"trait_type":"Hat","value":"Failed Egg Flip"},
// {"trait_type":"Rank","value":"Court's Head Chef"}]
// }`,
// //     last_token_uri_sync: '2022-05-16T14:51:27.698Z',
// //     last_metadata_sync: '2022-06-10T16:42:58.740Z'
// //   }
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

createList: (DB) => {
    const merkleList = []
    DB.map( (nftData, index) => {
        let data = {}
        data[index] = nftData.owner_of
        merkleList.push(data)
    })
    console.log(merkleList)
    return merkleList;
},

module.exports = schema;

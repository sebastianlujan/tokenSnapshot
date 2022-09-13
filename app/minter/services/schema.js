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

module.exports = schema;

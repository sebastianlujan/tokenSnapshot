# Route guide lines

## Mission: Get the images
from: https://opensea.io/collection/etherean-empire-drops

### Strategy:

1. Get All elements from this uri , address and tokenID from 0 to 10
2. scrapp details > tokenID
3. getJSON , insert it into a new metadata object
4. parse image cid (IPFS)
5. from the cid get the image
6. download it to ./assets/


`format: uri/address/tokenId [0,10]`

 - https://opensea.io/assets/ethereum/
 - 0xb07f97c14d1b1b08481f9e2c3b8f13226ec0c903/
 - 0


## Mission: Deploy image and meta
### Strategy:

1. Redeploy the images secuencially to ipfs or pinata , [research] ipfs.js and pineIT
    how to deploy NFTs from opensea
2. Redeploy metadata using the new CID by tokenId

```js
/*  
    i.e:
    meta.image = "ipfs://foobarbazthingsdjfjkh"
*/

{
    "name": "foo",
    "description": "bar", 
    "external_url": "ask to rallsen", 
    "image": "${meta.image}",
    "attributes": 
        [
        {
            "trait_type": "Rarity",
            "value": "Legendary"
        }
    ]
}

```
## Mission: Map the entire transaction tree
### Strategy:

- research
    - Research merkel trees
    - Research solutions:
        - query the event log
        - scraping on OpenSea
        - research NFTs APIs
            https://ethereum.stackexchange.com/questions/107526/how-can-i-query-to-find-all-nft-token-holders
            https://ethereum.stackexchange.com/questions/36274/a-list-of-token-holders-at-a-specific-time/64814#64814
            https://github.com/TokenMarketNet/sto/blob/master/sto/ethereum/scanner.py

            - ver : https://ethereum.stackexchange.com/questions/41684/api-to-gather-list-of-top-token-holders

            - probable answer: 
                - https://ethereum.stackexchange.com/questions/61565/list-holders-and-tokens-for-an-erc-721-contract?rq=1
                ```js
                    {
                        "dependencies": {
                            "@0xcert/ethereum-erc721": "^2.0.0-rc1",
                            "web3": "^1.0.0-beta.37"
                        }
                    }
                    // try to adapt
                    {
                        const CONTRACT_ACCOUNT = "0xE9e3F9cfc1A64DFca53614a0182CFAD56c10624F";
                        const CONTRACT_ACCOUNT = "0xE9e3F9cfc1A64DFca53614a0182CFAD56c10624F";
                        const CONTRACT_START = 6645906;
                        const INFURA_KEY = "55397e793412497fb349e0ff77f154f2";

                        const Web3 = require('web3'); // Use web3@1.0.0-beta.36+ https://github.com/ethereum/web3.js/issues/1916
                        const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/' + INFURA_KEY));
                        const erc721 = require("@0xcert/ethereum-erc721/build/erc721.json").ERC721;
                        const contract = new web3.eth.Contract(erc721.abi, CONTRACT_ACCOUNT);
                        var idToOwner = {};

                        contract.getPastEvents('Transfer', {fromBlock: CONTRACT_START, toBlock: CONTRACT_START+60000}).then(events => {
                        events.forEach(event => {
                            idToOwner[event.returnValues._tokenId] = event.returnValues._to
                        });
                        console.log(idToOwner);
                        });
                    }
                ```
            - the openSea API
            - Alchemy
            - Moralis
    - Research on 1155, holders


1. Get map the owner list and their transactions into a merkle tree 


## Mission: Mint on demand
### Strategy:


    
1. create-next-app
2. create a frontend
3. create an API
    - use firebase as DB
4. Integrate frontend and backend with the API

- tasks
    - import material
    - walletConnect
        - validate ownership
    - API
        - `GET api/wallet/[:address]` - Verify the tree?
        - `GET api/id/[:id]/owners` - returns a ownerList by Address
        - `GET api/wallet/[:address]/[:tokenID]` - returns metadata
        - Por ahora no mucho mas los minteos se manejan desde el abi

. Deploy the new 1155 contract with (entrypoint tokenId) on testnet
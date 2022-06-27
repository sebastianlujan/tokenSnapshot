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

1. Redeploy the images secuencially to ipfs or pinata , [research]
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




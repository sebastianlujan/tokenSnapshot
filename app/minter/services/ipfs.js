const pinataSDK = require('@pinata/sdk')

const secrets = require('../secrets.json')
const pinata = pinataSDK(
	secrets.API_PUBLIC_KEY_PINATA,
	secrets.API_SECRET_KEY_PINATA
)
const DB = require('../db.json')
const NFT = require('../services/NFTdata.js')

const PinataHelper = {

}

const isAuthenticated = async (pinata) => {
	const result = await pinata
		.testAuthentication()
		.then(result => {
			return JSON.stringify(result)
		})
		.catch(err => {
			return err
		})
	return result;
}

let listHashedImages = NFT.getImageListFromIPFS(DB)

for(let index = 0; index< listHashedImages.length; index++){
    NFT.downloadImage(listHashedImages[index], `./assets/${index}.png`)
}

module.exports = {
	isAuthenticated,
}

//pinMetadataToIPFS
//hashMetadata
//pinJSToIPFS
//hashFile

// const pinJSONToIPFS = async (JSONBody) => {
//     const options = {
//         pinataMetadata: {
//             name: 'NFT Metadata',
//         },
//         pinataOptions: {
//             cidVersion: 0,
//         },
//     };
//     try {
//         const result = await pinata.pinJSONToIPFS(JSONBody, options);
//         return result.IpfsHash;
//     } catch (err) {
//         console.log(err);
//     }
// };

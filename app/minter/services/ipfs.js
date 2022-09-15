const pinataSDK = require('@pinata/sdk')
const secrets = require('../secrets.json')
const pinata = pinataSDK(
	secrets.API_PUBLIC_KEY_PINATA,
	secrets.API_SECRET_KEY_PINATA
)
const DB = require('../db.json')
const fs = require('fs')
const axios = require('axios')


const isAuthenticated = async () => {
	const result = await pinata
		.testAuthentication()
		.then(result => {
			return JSON.stringify(result)
		})
		.catch(err => {
			return err
		})
}

const NFT = {
	getMetadata: DB => {
		const metadata = DB.map(elem => {
			return elem.metadata
		})
		return JSON.stringify(metadata)
	},
	getImageListFromIPFS: DB => {
		const images = DB.map(elem => {
			const CID = elem.metadata.image
			return `https://ipfs.io/ipfs/` + CID.split('/')[2]
		})
		return images
	},
	downloadImage: async (url, fileName) => {
		let response = await axios({ url, responseType: 'stream' }).then(res => {
			return new Promise((resolve, reject) => {
				res.data.pipe(fs.createWriteStream(fileName))
					.on('finish', () => {
						console.log("the file is saved",fileName)
						resolve()
					})
					.on('error', e => reject(e));
			})
			
		})
		return response
	},
	getImages: DB => {
		const images = DB.map(elem => {
			const CID = elem.metadata.image
			return CID.split('/')[2]
		})
		return images
	}  
}


let listHashedImages = NFT.getImageListFromIPFS(DB)

for(let index = 0; index< listHashedImages.length-1; index++){
    NFT.downloadImage(listHashedImages[index], `${index}.png`)
}

//const pinJSONToIPFS = async (JSONBody) => {

//pinMetadataToIPFS
//hashMetadata
//pinJSToIPFS
//hashFile

module.exports = { IsAuthenticated, NFT }

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

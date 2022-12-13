const DB = require('../db.json')
const fs = require('fs')
const axios = require('axios')

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
	getCID: DB => {
		const images = DB.map(elem => {
			const CID = elem.metadata.image
			return CID.split('/')[2]
		})
		return images
	}  
}

module.exports = NFT;


const pinataSDK = require('@pinata/sdk');
const secrets = require("../secrets.json")
const pinata = pinataSDK(secrets.API_PUBLIC_KEY_PINATA, secrets.API_SECRET_KEY_PINATA);
const DB = require("../db.json")
const fs = require("fs");
const axios = require('axios');

const isAuthenticated = async () => {
    const result = await pinata.testAuthentication().then((result) => { 
        return JSON.stringify(result)
    }).catch((err) => {
        return err
    });
}

const getMetadata = ( DB ) => {
    const metadata = DB.map( elem => {
        return elem.metadata
    })
    return JSON.stringify(metadata);    
}

const getImageListFromIPFS = ( DB ) => {
    const images = DB.map( elem => {
        return elem.metadata.image
    })
    return images
}

let listHashedImages = getImageListFromIPFS(DB);

const downloadImage = async (url, fileName) => {
    let response = await axios(url).then (res => {
        new Promise((resolve, reject) => {
            res.data.pipe(fs.createWriteStream(fileName)).on('finish', () => {
                resolve()
            }) 
        })
    })
}


//downloadImage(listHashedImages[0], "test.jpg")
console.log(listHashedImages[0])


//const pinJSONToIPFS = async (JSONBody) => {


//pinMetadataToIPFS
//hashMetadata
//pinJSToIPFS
//hashFile


//module.exports = { IsAuthenticated }


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

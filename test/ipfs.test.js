const expect = require('chai').expect
const secrets = require('../secrets.json')
const ipfs = require("../services/ipfs.js")

describe('Pinata test authentication', () => {
    it('Should pin the file', async () => {
        const authentication = ipfs.getAuthentication()
        authentication.then( result => { console.log(result) })
        //solve the pending request


        
    })
})
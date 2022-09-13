//https://medium.com/coinmonks/implementing-merkle-tree-and-patricia-trie-b8badd6d9591

/*
    Merkle Tree in Javascript.
    Tree[i][j] = H( H(Tree[i+1][2j]), H(Tree[i+1][]))

    constrains:
        0 <= i <= Tree.length
        0 <= j <= Tree[i].length
*/

const { MerkleTree } = require('merkletreejs')
const SHA256 = require('crypto-js/sha256');
const DB = require('../db.json')

const createList = (DB) => {
    const merkleList = []
    DB.map( (nftData, index) => {
        let data = {}
        data[index] = nftData.owner_of
        merkleList.push(data)
    })
    console.log(merkleList)
    return merkleList;
}

const addMerkleLeaves = ( merkleList, index ) => {
    const leaves = merkleList[index][index].map(x => SHA256(x))
    console.log(leaves)
    return leaves
}

const createMerkleTree = (leaves, cb) => {
    const tree =  new MerkleTree(leaves , cb)
    return tree;
}

const getRoot = (tree) => {
    return tree.getRoot().toString('hex')
}

const getLeaf = (address) => {return SHA256(address)}

const getProof = (tree, leaf) => {return tree.getProof(leaf)}

const verifyMerkleOwnership = (tree, proof, root, leaf) => {
    return tree.verify(proof, leaf, root)
}


let ownersList = createList(DB);

let leaves = addMerkleLeaves(ownersList , 10)
const tree = createMerkleTree(leaves, SHA256);

const address = '0x59455ba3d00bb8cbead8fe6db3973210e49d4303';

const proofOwnership = getLeaf(address);
let proof = getProof(tree, proofOwnership);
let it_verify = verifyMerkleOwnership( tree, proof, getRoot(tree), proofOwnership);

console.log(it_verify)


//module.exports = CreateMerkleTree
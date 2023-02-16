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

const Merkle = {
    addMerkleLeaves: ( merkleList, index ) => {
        const leaves = merkleList[index][index].map(x => SHA256(x))
        console.log(leaves)
        return leaves
    },
    
    createMerkleTree: (leaves, cb) => {
        const tree =  new MerkleTree(leaves , cb)
        return tree;
    },
    
    getRoot: (tree) => {
        return tree.getRoot().toString('hex')
    },
    
    getLeaf: (address) => {return SHA256(address)},
    
    getProof: (tree, leaf) => {return tree.getProof(leaf)},
    
    verifyMerkleOwnership: (tree, proof, root, leaf) => {
        return tree.verify(proof, leaf, root)
    }
}

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

let createAddressTree = (index) => {
    let ownersList = createList(DB);
    leaves = Merkle.addMerkleLeaves(ownersList , index)
    return leaves;
}

let verifyAddressTree = ( address ) => {
    const tree = Merkle.createMerkleTree(createAddressTree(index), SHA256);

    const proofOwnership = Merkle.getLeaf(address);
    let proof = Merkle.getProof(tree, proofOwnership);
    let it_verify = Merkle.verifyMerkleOwnership( tree, proof, Merkle.getRoot(tree), proofOwnership);
} 

module.exports =  { createAddressTree, verifyAddressTree }

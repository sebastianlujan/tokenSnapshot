//https://medium.com/coinmonks/implementing-merkle-tree-and-patricia-trie-b8badd6d9591

/*
    Merkle Tree in Javascript.
    Tree[i][j] = H( H(Tree[i+1][2j]), H(Tree[i+1][]))

    constrains:
        0 <= i <= Tree.length
        0 <= j <= Tree[i].length
*/

const { MerkleTree } = require('merkletreejs')
const keccak256 = require('keccak256');


const createMerkleTree = () => {
    const merkleList = [];
    const leafNodes = merkleList

    // for (let i = 0; i < 10; i++) {
    // const leaves = ['a', 'b', 'c'].map(x => SHA256(x))
    // const tree = new MerkleTree(leaves, SHA256)
    // const root = tree.getRoot().toString('hex')
    // const leaf = SHA256('a')
    // const proof = tree.getProof(leaf)
    // console.log(tree.verify(proof, leaf, root)) // true

}

createMerkleTree();


module.exports = Merkle
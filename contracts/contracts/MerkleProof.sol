//SPDX-License-Identifier: Unlicense
pragma solidity 0.8.0;

contract MerkleProof {
  function verify(bytes32[] memory proof, bytes32 root, bytes32 leaf, uint index) public view returns (bool) {
    bytes32 hash = leaf;

    for( uint = 0; i < proof.length; i++) {
      if( index % 2 == 0) {
        hash = keccak256(abi.encodePacked(hash, proof[i]));        
      } else {
        hash = keccak256(abi.encodePacked(proof[i], hash);
      }
    }
    return hash == root;
  }
}
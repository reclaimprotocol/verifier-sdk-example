// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;


import "@reclaimprotocol/verifier-solidity-sdk/contracts/Reclaim.sol";
import "@reclaimprotocol/verifier-solidity-sdk/contracts/Addresses.sol";


contract Attestor {
   address public reclaimAddress;


   constructor(){
       reclaimAddress = Addresses.OPTIMISM_GOERLI_TESTNET;
   }


   function verifyProof(Reclaim.Proof memory proof) public view{
       Reclaim(reclaimAddress).verifyProof(proof);
   }
}

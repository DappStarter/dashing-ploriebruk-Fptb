require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good argue sure spot toy note script mistake include enroll flat tongue'; 
let testAccounts = [
"0x26695c370696f21faf295ae332c72ce3c18fbc9b5ced16f98a182be93dffbd98",
"0xfaeba30500e2255c5145cf87c1c812fca8693fc95834d5f8618f9c8eb9dec34c",
"0xcdab1acde077d0286ae1bf25df867030d296b112b8b85c205406ea057ad0db54",
"0x25dd143f2d483ea797c60504ef060d7841fea5a30771cb6cba80c0938e2f207f",
"0xc94da733fa2fb3c677cbcad4553a239942a35c601791148cd7b638a1b1d7d6b2",
"0x635a2f0660ba18dd726e970fbff77049d76acb374439fce2af820922c0ae5aec",
"0x2208085ea7890a462c4147d1078d7aae2e37c8387f7d57cb99819e2b58b4ae2f",
"0x9e1c61e95a20628ba386c23725ab9bb78b291d8913af60c7f215897aa3bd2daa",
"0x596a458b4b538c9d32117692b2c6bc3518b88484c053da33ff098ca21d520df7",
"0xb16159b1b3da736519649294fd7abadfb34bd8efa7b83fc08200354be1176c6d"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


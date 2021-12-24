require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include knock flame success stone deny noise hospital give end army gentle'; 
let testAccounts = [
"0x2bf1c62fad26ed2a548183a2e781082758f8f9bd79f65dfb1d36485e8c8d6057",
"0x316b63a051a88f63f28d1a2ef2b1d8bc1f8330df1c460e4fde4a2274f34af37a",
"0xb1fa4c7cb3371816aedbd57cb0894058a3634d14ff36273b55299e57b88cb3e1",
"0xd4b0a64f9efd6791673138448ec5d0a042f6333a21b8d0c2bd7450406d2183c0",
"0xc72b4b6a66283f1f2295fe774314cb918ea47c0bc5de1bdd325b0424414e2c28",
"0xf8c2de55b1d3d95f360de14468c327c6a29fa12d2e2322dd7bcd4b807e220bde",
"0xe18374cbd9927b7a0bfef9a6696eca43c52b734027001471b5fbabebe44f6665",
"0x6ad571777b724f580ea66fa2d955e9f08dd9e789794c4820b5aa93acc747a222",
"0xe5b8de63662112155ab08a453a0e5280488f27b3c2a96a5abb60d25224710e07",
"0xbf3d0fda05ca8ebc470025dfbf745c3927b7028ef66519ca2b07614e9e152e99"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



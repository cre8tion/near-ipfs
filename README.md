# IPFS Scripts

## Instructions

### Load Environment Variables

Load API_KEY and API_SECRET from `.env`.

### Call scripts only via base folder

#### Upload Files

```nodejs
    node index.js uploadFiles -f ./data/demo/ -c 5 -n Not-BAYC
```

#### Set Token Metadata for Project

```nodejs
node index.js set-token-metadata -f ./data/demo/ -t 5 -c nft-example.not-bayc.testnet -l Not-BAYC -a not-bayc.testnet
```


#### View metadata for a single token id

```nodejs
node index.js view-token-metadata -t 0 -c nft-example.not-bayc.testnet -a not-bayc.testnet
```

Uploads the Image and Json files into ipfs and outputs the hashes into a file

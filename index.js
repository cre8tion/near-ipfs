const yargs = require('yargs');
const get = require("./utils/get");
const list = require("./utils/list");
const upload = require("./utils/upload");

const argv = yargs
    .command('getFile', 'Get a specific file from the bucket', {
        key: {
            description: 'key name',
            alias: 'k',
            type: 'string'
        }
    })
    .command('getFileHash', 'Get ipfs hash from a specific file in the bucket', {
        key: {
            description: 'key name',
            alias: 'k',
            type: 'string'
        }
    })
    .command('listFiles', 'List files from the bucket', {
        key: {
            alias: 'k',
            description: 'key name',
            type: 'string'
        }
    })
    .command('uploadFiles', 'Upload Files from a single folder', {
        filepath: {
            alias: 'f',
            description: 'folder filepath',
            type: 'string'
        },
        counts: {
            alias: 'c',
            description: 'Total NFT counts',
            type: 'number'
        },
        name: {
            alias: 'n',
            description: 'Project Name',
            type: 'string'
        }
    })
    .help()
    .alias('help', 'h').argv;

if (argv._.includes('getFile')) {
    const key = argv.key
    get.getFile(key);
}

if (argv._.includes('getFileHash')) {
    const key = argv.key
    get.getFileHash(key);
}

if (argv._.includes('listFiles')) {
    const key = argv.key
    list.listFiles(key);
}

if (argv._.includes('uploadFiles')) {
    const filepath = argv.filepath
    const counts = argv.counts
    const name = argv.name
    upload.uploadFiles(filepath, counts, name);
}

console.log(argv);
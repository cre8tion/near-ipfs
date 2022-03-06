# IPFS Scripts

## Instructions

### Load Environment Variables

Load API_KEY and API_SECRET from `.env`.

### Call scripts only via base folder

#### Upload Files

$1 = Folder Path
$2 = Total number
$3 = Project Name

```bash
    ./scripts/uploadFiles.sh ./data/demo/ 1 ProjectAlpha
```

Uploads the Image and Json files into ipfs and outputs the hashes into a file

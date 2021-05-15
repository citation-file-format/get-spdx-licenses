# Getting the list of licenses from SPDX

```
cd <to this directory>

# install the project's dependencies
npm install

# install typescript compiler if need be
npm install --global typescript

# compile the code from src/ into build/ (as per the configuration from ./tsconfig.json)
tsc

# run the script, let jq do the pretty print
node build/get-spdx-licenses.js | jq
```


## Example output

(some output omitted for brevity)

```json
{
  "$comment": "SPDX license list; releaseDate=2021-05-14; source=https://raw.githubusercontent.com/spdx/license-list-data/master/json/licenses.json",
  "license": {
    "enum": [
      "0BSD",
      "AAL",
      "ADSL",
      "AFL-1.1",
      "AFL-1.2",
      "AFL-2.0",
      "AFL-2.1",
      "AFL-3.0",
      "AGPL-1.0",
      "AGPL-1.0-only",
      ...
      "xpp",
      "zlib-acknowledgement"
    ],
    "type": "string"
  }
}
```

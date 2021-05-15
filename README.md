# Getting the list of licenses from SPDX

## By triggering the GitHub Action

The project has a GitHub Action configured to get the list of licenses. This way, you don't have to install anything on
your own machine. Just go to
[https://github.com/jspaaks/get-spdx-licenses/actions/workflows/get-spdx-licenses.yml](https://github.com/jspaaks/get-spdx-licenses/actions/workflows/get-spdx-licenses.yml),
click `Run workflow`, and the workflow should start after a few seconds delay. Wait till it finished and click to see
the terminal output. There should be an item labeled `Get the list of licenses, print it here` which contains the list
of licenses for the Citation File Format's jsonschema schema.

## By running the script locally

```
cd <to this directory>

# install the project's dependencies
npm install

# install typescript compiler if need be
npm install --global typescript

# compile the code from src/ into build/ (as per the configuration from ./tsconfig.json)
tsc

# run the script, let jq do the pretty print
node build/get-spdx-licenses.js | jq --indent 4
```


## Example output

(some output omitted for brevity)

```json
{
    "$comment": "SPDX license list; releaseDate=2021-05-14; source=https://raw.githubusercontent.com/spdx/license-list-data/master/json/licenses.json",
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
        "AGPL-1.0-or-later",
        "AGPL-3.0",
        "AGPL-3.0-only",
        "AGPL-3.0-or-later",

        "...",

        "psutils",
        "wxWindows",
        "xinetd",
        "xpp",
        "zlib-acknowledgement"
    ],
    "type": "string"
}
```

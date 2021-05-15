# Getting the list of licenses from SPDX

```
cd <to this directory>

# install the project's dependencies
npm install

# install typescript compiler if need be
npm install --global typescript

# compile the code from src/ into build/ (as per the configuration from ./tsconfig.json)
tsc

# run the script
node build/get-spdx-licenses.js

```

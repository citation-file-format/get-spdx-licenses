import fetch from 'node-fetch';

async function getit() {
    const spdxUrl = "https://raw.githubusercontent.com/spdx/license-list-data/master/json/licenses.json";
    const response = await fetch(spdxUrl);
    const data = await response.json();
    const licenseIds = data.licenses.map((license: any) => {return license.licenseId as string}).sort();
    console.log({
        "$comment": "SPDX license list; releaseDate=" + data.releaseDate + "; source=" + spdxUrl,
        "license": {
            "enum": licenseIds,
            "type": "string"
        }
    })
}

getit()



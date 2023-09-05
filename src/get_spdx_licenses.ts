import fetch from 'node-fetch';

async function getit() {
    const spdxUrl = "https://raw.githubusercontent.com/spdx/license-list-data/master/json/licenses.json";
    const response = await fetch(spdxUrl);
    const data = await response.json();
    const licenseIds = data.licenses.map((license: any) => {return license.licenseId as string});
    const sortedLicenseIds = licenseIds.sort((self: string, other: string) => {
        return self.toLowerCase().localeCompare(other.toLowerCase());
    });
    const stringified = JSON.stringify({
        "$comment": "Use https://github.com/citation-file-format/get-spdx-licenses to update this enum in the future",
        "description": `SPDX license list; releaseDate=${data.releaseDate}; licenseListVersion=${data.licenseListVersion}; source=${spdxUrl}`,
        "enum": sortedLicenseIds,
        "type": "string"
    });
    console.log(stringified);
}

getit()

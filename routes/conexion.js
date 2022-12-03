var fetch = require("node-fetch");

const auth = {
    "username": "alumnos@alumnos.org",
    "password": "m7a/s99"

}

async function getToken() {
    let tokenFetch = await fetch("http://18.214.103.65:8080/api/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(auth)
    }).then(res => res.json())
        .then(json => json.token)
        .catch(() => console.log("Conexion con API denegada"))

    return tokenFetch;
    
};

async function getData(token) {
    let dataFetch = await fetch("http://18.214.103.65:8080/api/plugins/telemetry/DEVICE/101d2fe0-454d-11ed-b4b1-1bcb8f5daa77/values/timeseries?keys=TIMESTAMP,WS,WD,Temp,RH,BP,Depth &startTs=1265046352083&endTs=1665043961492", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "X-Authorization": "Bearer " + token
        }
    }).then(res => res.json())

    return dataFetch;
}

async function filterData(data) {
    let str_total = '';
    const largo = Object.keys(data.TIMESTAMP).length;

    for(let i = 0; i < largo; i++) {
        str_total += '{';

        const str_timestamp = data.TIMESTAMP[i].value;
        const str_ws = data.WS[i].value;
        const str_wd = data.WD[i].value;
        const str_temp = data.Temp[i].value;
        const str_rh = data.RH[i].value;
        const str_bp = data.BP[i].value;

        str_total += `"timestamp":"${str_timestamp}", `;
        str_total += `"ws":${str_ws}, `;
        str_total += `"wd":${str_wd}, `;
        str_total += `"temp":${str_temp}, `;
        str_total += `"rh":${str_rh}, `;
        str_total += `"bp":${str_bp}`;

        str_total += '}\n';
    }

    return str_total;
}

module.exports = { getToken, getData, filterData };
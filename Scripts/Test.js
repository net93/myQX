




/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://nicegram.cloud/api/v6/ai-assistant/daily-reward?`;
const method = `POST`;
let headers = JSON.parse($prefs.valueForKey('nicegram'))
headers['X-timestamp'] = Date.now()
const body = ``;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});


/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://api.dfantasy.pro/api/v2/users/daily-login/1`;
const method = `POST`;
const headers = {
'Accept' : `application/json, text/plain, */*`,
'Accept-Encoding' : `gzip, deflate, br`,
'Connection' : `keep-alive`,
'Content-Type' : `application/x-www-form-urlencoded`,
'Host' : `api.dfantasy.pro`,
'baggage' : `sentry-environment=production,sentry-public_key=20b453f704a2544946cb0a2bd0149ad9,sentry-release=com.dfantasy%401.0.28%2B8,sentry-trace_id=1e2658bed1a041b1bc684316347c4323`,
'User-Agent' : `DFantasy/8 CFNetwork/1327.0.4 Darwin/21.2.0`,
'Accept-Language' : `vi-VN,vi;q=0.9`,
'Authorization' : `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OTIyMSwiZnBsSWQiOm51bGwsImVtYWlsIjoibHl0YWkuMDAxQGdtYWlsLmNvbSIsImdvb2dsZUlkIjoiMTA3OTIzMzcxMDEyNTU2MTAwMTczIiwiaWF0IjoxNjk2MTQwNzY5LCJleHAiOjE2OTg3MzI3Njl9.On3vq_9huT5DGFpF11mgVxI_RKBUbBOc9uDlBdnZUtA`,
'sentry-trace' : `1e2658bed1a041b1bc684316347c4323-5152544c96d949e8-0`
};
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

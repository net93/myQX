
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */
let cookie = $prefs.valueForKey('hik')
const url = `https://isgp.hik-partner.com/eigateway/ep/portal-points/v11/external/snCode/scanCode`;
const method = `POST`;
const headers = {
'ep-header-client-analysis' : `1692020851041_20`,
'ep-header-client-type' : `6`,
'Accept-Language' : `vi-VN,vi;q=0.9`,
'Accept-Encoding' : `gzip, deflate, br`,
'version' : `2.3.620`,
'ep-header-client-language' : `vi`,
'Connection' : `keep-alive`,
'Content-Type' : `application/x-www-form-urlencoded;charset=utf-8`,
'ep-header-client-version' : `2.3.620`,
'User-Agent' : `Hik-PartnerPro/230802.25 CFNetwork/1327.0.4 Darwin/21.2.0`,
'Cookie' : cookie,
'Host' : `isgp.hik-partner.com`,
'clientSource' : `0`,
'Accept' : `*/*`
};
let ran = randomString()
const body = `snCode=E81164${ran}`;

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



function randomString(){
    var chars = "0123456789";
    var string_length = 3;
    var randomstring = '';
    for (var i = 0; i < string_length; i++) {
        var rnum = Math.floor(Math.random() * chars.length);
        randomstring += chars[rnum];
    }
    return randomstring;
}

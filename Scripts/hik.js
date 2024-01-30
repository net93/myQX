/**
 * @hik partner checkin
 * 
 */
let cookie = $prefs.valueForKey('hik')
const url = `https://isgp.hik-partner.com/hpp/mall/shopping/point/obtain/login`;
const method = `POST`;
const headers = {
'ep-header-client-analysis' : `1691949875108_18`,
'ep-header-client-type' : `6`,
'Accept-Language' : `vi-VN,vi;q=0.9`,
'Accept-Encoding' : `gzip, deflate, br`,
'version' : `2.3.620`,
'ep-header-client-language' : `vi`,
'Connection' : `keep-alive`,
'Content-Type' : `application/json;charset=UTF-8`,
'ep-header-client-version' : `2.3.620`,
'User-Agent' : `Hik-PartnerPro/230802.25 CFNetwork/1327.0.4 Darwin/21.2.0`,
'Cookie' : cookie,
'Host' : `isgp.hik-partner.com`,
'clientSource' : `0`,
'Accept' : `*/*`
};

const myRequest = {
    url: url,
    method: method,
    headers: headers
};

$task.fetch(myRequest).then(response => {
  let res = JSON.parse(response.body)
  if(res.data){
    console.log(response.statusCode + "\n\n" + response.body);
    $notify(`HIK checkin ${res.data.continuousDays} days`, `PointObtain: ${res.data.pointObtain}`)
    $done()
  }else{$notify(`HIK can't checkin`, res.message); $done()}
}, reason => {
    console.log(reason.error);
    $notify('hik Error')
    $done();
});

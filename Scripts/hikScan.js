
let cookie = $prefs.valueForKey('hik')
const url = `https://isgp.hik-partner.com/eigateway/ep/portal-points/v11/external/snCode/scanCode`;
const method = `POST`;
let t = Date.now()
t = t+'_32'
const headers = {
'ep-header-client-analysis' : t,
'ep-header-client-type' : `6`,
'Accept-Language' : `vi-VN,vi;q=0.9`,
'Accept-Encoding' : `gzip, deflate, br`,
'version' : `2.3.621`,
'ep-header-client-language' : `vi`,
'Connection' : `keep-alive`,
'Content-Type' : `application/x-www-form-urlencoded;charset=utf-8`,
'ep-header-client-version' : `2.3.621`,
'User-Agent' : `Hik-PartnerPro/230807.5 CFNetwork/1335.0.3.1 Darwin/21.6.0`,
'Cookie' : cookie,
'Host' : `isgp.hik-partner.com`,
'clientSource' : `0`,
'Accept' : `*/*`
};
let ran = randomString()
const body = `snCode=E81158${ran}`;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(res => {
    console.log(res.statusCode);
    let resB = JSON.parse(res.body)
    let listSN = $prefs.valueForKey('hikSN')??''
    let listSN2 = $prefs.valueForKey('hikSN2')??''
    if(resB.data!=null){
         if(resB.data.points>500){
         listSN2 =body.concat('\n',listSN2)
         $prefs.setValueForKey(listSN2, 'hikSN2')
         }else{
              listSN =body.concat('\n',listSN)
              $prefs.setValueForKey(listSN, 'hikSN')}
         $notify('@.@','',resB.data.points)
         console.log(body +'\n'+ JSON.stringify(resB.data))
    }else{ 
         console.log('id: '+ resB.failData.id)
         console.log(resB.failMsg)}
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

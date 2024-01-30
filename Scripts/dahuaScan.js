
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */
let d = new Date('2024-10-12')
let ymd = d.getMonth()<9 ? `${d.getFullYear()}0${d.getMonth()+1}${d.getDate()}` : `${d.getFullYear()}${d.getMonth()+1}${d.getDate()}`



const url = `https://paapi.dahuasecurity.com/partner-api/api/app/auth/scan/scan/add`;
const method = `POST`;
const headers = {
'Connection' : `keep-alive`,
'Accept-Encoding' : `gzip, deflate, br`,
'logId' : `Ios:7.3.32:${ymd}-${randomString(6)}:2694520466366891594`,
'Content-Type' : `application/json;charset=UTF-8;`,
'Origin' : `https://appreact.dahuasecurity.com`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 15_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148`,
'token' : `b667411793d14c3d849d9e74d6e26854`,
'pacountrycode' : `VN`,
'Referer' : `https://appreact.dahuasecurity.com/`,
'Host' : `paapi.dahuasecurity.com`,
'Accept-Language' : `vi-VN,vi;q=0.9`,
'Accept' : `application/json, text/plain, */*`
};

const deviceCode = randomString(15).toUpperCase()
const body = `{"userId":"2694520466366891594","languageCode":"vi","code":"${deviceCode}","supplierCode":"","isWarrantyTreaty":true}`;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};


$task.fetch(myRequest).then(response => {
    let obj = JSON.parse(response.body)
    if(obj.data.success){console.log(response.body)
      $notify('OK')
      $prefs.setValueForKey('Dahua')
    }
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});


function randomString(lenRandom, type) {
     //define a variable consisting alphabets in small and capital letter
	var characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";                     
     //specify the length for the new string
	var randomstring = '';
	var lenCharacters;
	if (typeof(type) == 'number') {
		characters = characters.substring(0,10)} 
	else if (typeof(type) == 'string') {
		characters= characters.substring(10)
	}else {};
	lenCharacters = characters.length;
            //loop to select a new character in each iteration
	for (var i=0; i<lenRandom; i++){
		var rnum = Math.floor(Math.random() * lenCharacters);
		randomstring += characters.substring(rnum, rnum+1);
	};
	return randomstring;
}

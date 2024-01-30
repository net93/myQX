/*
   GAMES LUCKYDRAW SHOPEE
*/
(async () =>{
const games = check($prefs.valueForKey("games"))
let luckys = check($prefs.valueForKey("lucky"));
if (luckys === undefined||games === undefined) {console.log('No shopee'); $done();}

try { 
		for await(let x of luckys) { await autoPost(x)};
	}//end try
	catch (error) {
		console.log(error);$done()
	}

$prefs.removeValueForKey("lucky")
//console.log(JSON.stringify(luckys))

$done()
})()
//----------------
function check(value) { 
return value === undefined ? value : JSON.parse(value)
}
//----------------
function randomString(lenRandom, type) {
     //define a variable consisting alphabets in small and capital letter
	var characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZ";                     
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
};

//----------------
function autoPost(x){
let hShopee = $prefs.valueForKey("shopeeHeaders")
if (hShopee === undefined) {
	$notify("No headers","Open app Shopee to get headers");
	$done();
};
hShopee = JSON.parse(hShopee)
const cookie = hShopee['Cookie']
const url = `https://games.shopee.vn/api-gateway/luckydraw/api/v1/lucky/event/${x.event}`;
const headers = {
'fruit-version-type' : `h5`,
'Connection' : `keep-alive`,
'Accept-Encoding' : `gzip, deflate, br`,
'fruit-app-version' : `31715`,
'Content-Type' : `application/json`,
'games-biz-version' : `6.3.1`,
'Origin' : `https://games.shopee.vn`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 15_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Beeshop locale=vi version=31715 appver=31715 rnver=1704438358 shopee_rn_bundle_version=6002001 Shopee language=vi app_type=1`,
'afinfo' : `{"nf":1}`,
'Cookie' : cookie,
'Host' : `games.shopee.vn`,
'Referer' : `https://games.shopee.vn/luckydraw-v2/?game=wheel&activity=3e2090e8fc0e72e6&source=1&component_name=STW%20VC&md_component_id=1670395016320&microsite_pageid=12831&section_location=9`,
'games-app-version' : `31715`,
'games-runtime' : `EgretH5`,
'Accept-Language' : `vi-VN,vi;q=0.9`,
'Accept' : `*/*`,
};
const body = JSON.stringify({request_id: randomString(16,0),
app_id: x.appid,
activity_code: x.activity,
schedule_ldc_id: x.schedule_ldc_id, source:1});
const myRequest = {
	url: url,
	method: `POST`,
	headers: headers,
	body: body
};

return new Promise(function(myResolve) { 
$task.fetch(myRequest).then(response => {
	let respBody = JSON.parse(response.body);
	if (response.statusCode != 200) {
		console.log(x.gameName + '\n' + response.statusCode + '\n' + '--------------------------------' + '\n');
myResolve();
	}
	else if(respBody.msg == "success") {
		//$notify(x.gameName, respBody.msg);
		console.log(x.gameName + '\n' + JSON.stringify(respBody.data.package_name) + '\n'+ JSON.stringify(respBody.data.prize.settings.ar_notify_body) + '\n'+ '--------------------------------' + '\n');
myResolve();
	}
	else { 
		//$notify(x.gameName, respBody.msg);
		console.log(x.gameName + '\n' + response.statusCode +'\n'+ respBody.msg + '\n' + '--------------------------------' + '\n');
myResolve();
	}

})//end task fetch.then
})//end promise
}// end function autoPost

function sleep(millis)
{
    var date = new Date();
    var curDate = null;
    do { curDate = new Date(); }
    while(curDate-date < millis);
}

// Beeshop locale=vi version=29927 appver=29927 rnver=1677662815 shopee_rn_bundle_version=5070012 Shopee language=vi app_type=1 games_runtime=1 runtime_ver=1.0.38 game_bundle=3521

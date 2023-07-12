/*
*@ Get shopee event games luckydraw
*/


(async () =>{
	const games = check($prefs.valueForKey("games"));
const aa = check($prefs.valueForKey("lucky")) ?? [];
	if (games === undefined) {console.log("No games");$done()};
	//let GAME = games.map( x => `https://games.shopee.vn/gameplatform/api/v1/game/activity/${x.activity}/settings?appid=${x.appid}`);
	try { 
		for await(let x of games) { await autoGet(x, aa)} 
     console.log("SAVED: " + $prefs.valueForKey("lucky") + '\n' + '--------------------------------')

	}//end try
	catch (error) {
		console.log(error);$done()
	}//end catch

$done()
})() //end and call async.


function autoGet(game, array) {
	const url = `https://games.shopee.vn/gameplatform/api/v1/game/activity/${game.activity}/settings?appid=${game.appid}`;
const luckys = array;
let hShopee = $prefs.valueForKey("shopeeHeaders")
if (hShopee === undefined) {
	$notify("No headers","Open app Shopee to get headers");
	$done();
};
hShopee = JSON.parse(hShopee)
const cookie = hShopee['Cookie']
let has = false;
	const myRequest = {
		url: url,
		method: 'GET',
		headers: {
'Cookie' : cookie,
'Accept' : `*/*`,
'Connection' : `keep-alive`,
'Content-Type' : `application/json`,
'Host' : `games.shopee.vn`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 15_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148`,
'Accept-Encoding' : `gzip, deflate, br`,
'Accept-Language' : `vi-VN,vi;q=0.9`
},
		body: ''
	};//end myRequest
   return new Promise(function(myResolve, myReject) {
		$task.fetch(myRequest).then( response =>{
			let respBody = JSON.parse(response.body);
			let eventCode = respBody.data.basic.event_code;
			let moduleId = 0;
			for ( let i in respBody.data.modules) {
				if (respBody.data.modules[i].module_name == "Service.LUCKY_DRAW_COMPONENT") { moduleId = respBody.data.modules[i].module_id}} //end for
			let gameName = respBody.data.basic.game_name;
			const lucky = {
activity: game.activity,
appid: game.appid,
event: eventCode,
schedule_ldc_id : moduleId,
gameName: gameName};



luckys.forEach( x => x.activity == lucky.activity ? has = true : has);
if(has) {} else { luckys.push(lucky)};


//****** Save time event session 
$prefs.setValueForKey(JSON.stringify(luckys), "lucky");
//$prefs.removeValueForKey("lucky");
//******
			myResolve(); // when successful
			})//end task fecth then
		})//end Promise
}//end function autoget

function check(value) { 
return value === undefined ? value : JSON.parse(value)
}


/*
 @ Checkin on Shopee by Aite

 */
//const $ = new Env("shopee")
let hShopee = $prefs.valueForKey("shopeeHeaders")
if (hShopee === undefined) {
	$notify("No headers","Open app Shopee to get headers");
	$done();
};
hShopee = JSON.parse(hShopee)
let cookie = hShopee['Cookie']
let csrftoken = cookie.match(/csrftoken=\w{32}/)
csrftoken = csrftoken[0].split('=')
csrftoken = csrftoken[1]
const szToken = hShopee['af-ac-enc-sz-token']
const dat = hShopee['af-ac-enc-dat']

const headers = {
'x-csrftoken' : csrftoken,
'af-ac-enc-sz-token' : szToken,
'Connection' : `keep-alive`,
'x-api-source' : `rn`,
'Content-Type' : `application/json`,
'User-Agent' : `iOS app iPhone Shopee appver=30316 language=vi app_type=1`,
'Cookie' : cookie,
'af-ac-enc-dat' : dat,
'Accept' : `application/json`
};
const body = {"device_fingerprint":"F7C3EC03B0FD42BA8DF0EE27F0DD35AA","dfp": szToken};


const myRequest = {
	url: 'https://games-dailycheckin.shopee.vn/mkt/coins/api/v2/checkin_new',
	method: 'POST',
     headers: headers,
     body: JSON.stringify(body)
};

$task.fetch(myRequest).then(response => {
	let obj = JSON.parse(response.body);
	if(response.statusCode == 200) {
		if(obj.data.success) {
			$notify('🟢 Done ' + obj.data.check_in_day + 'day', obj.data.username, 'Increase_coins: '+ obj.data.increase_coins + ' coins');
			console.log(obj.data.username+ ' increase coins: '+ obj.data.increase_coins);
			$done();
		}else{
			$notify('🔴 Failed', obj.data.username, 'Try again tomorrow');
			console.log(response.body);
			$done();
		};
	}else{
          $notify('🔴 Failed', 'StatusCode: ' + response.statusCode);
		console.log(response.statusCode+'\n\n'+ response.body);
		$done();
	};
}, 
reason => {
	$notify(reason.error,'aite error');
	$done();
});


/**
 * @get session id for shopeegame lottery
 */

let hShopee = $prefs.valueForKey("shopeeHeaders")
if (hShopee === undefined) {
	$notify("No headers","Open app Shopee to get headers");
	$done();
};
hShopee = JSON.parse(hShopee)
const cookie = hShopee['Cookie']
const headers = {
	'Cookie' : cookie,
     'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 15_7_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Beeshop locale=vi`,
	'Content-Type' : 'application/json;charset=utf-8'
};
const body = '{"theme_id":"e2beb3258915d83a94d50fc8b9b5393b","source":"coin","theme_type":"number_picker_theme"}';

const myRequest = {
	url: 'https://giaitri.shopee.vn/gc-api/desktop-app-api/lottery/get-info/',
	method: 'POST',
	headers: headers,
	body: body
};

$task.fetch(myRequest).then(response => {
	let respBody = JSON.parse(response.body);
	if (response.statusCode == 200) {
		$prefs.setValueForKey(respBody.data.session.session_id,"sessionId");
		console.log($prefs.valueForKey("sessionId"));
		$done();
	}else {console.log('FAILED');
		$done();
	};
},reason => {
	console.log(reason.error);
	$done();
});

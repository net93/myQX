
/**
 * @Lottery Shopee
 * 
 */
// Random Number
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
	}
	else {};
	lenCharacters = characters.length;
            //loop to select a new character in each iteration
	for (var i=0; i<lenRandom; i++){
		var rnum = Math.floor(Math.random() * lenCharacters);
		randomstring += characters.substring(rnum, rnum+1);
	};
	return randomstring;
};

//Make request
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
	'Content-Type' : 'application/json;charset=utf-8',
};
const sessionId = $prefs.valueForKey("sessionId")
const body = {
	"my_number":randomString(6,0),
	"session_id": sessionId ,
	"source":"coin",
	"submit_type":"random"};

const myRequest = {
	url: 'https://giaitri.shopee.vn/gc-api/desktop-app-api/lottery/pick/',
	method: 'POST',
	headers: headers,
	body: JSON.stringify(body)
};
$task.fetch(myRequest).then(response => {
	let respBody=JSON.parse(response.body);
	if (respBody.data!=null){
		$notify('OK', "Today's number: "+ respBody.data.my_number);
		console.log(response.statusCode + "\n" + respBody.msg + "\n" + respBody.data.my_number);
		$done();
	} else {
		let msgArray = respBody.msg.split(": ");
		console.log(response.statusCode + "\n" + msgArray[1] + '\n' + 'Try again later');
		$done();
	};
},reason => {
	console.log(reason.error);
	$done();
});

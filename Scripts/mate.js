// Fake mate pro
/*
let obj = JSON.parse($response.body);
obj.isLifetime = true;
delete obj.hasBoughtPaidApp;
$done({body: JSON.stringify(obj)})
*/

// Reg Account Mate pro

const url = `https://mate.beyonderluu.com/api/create`;
const method = `POST`;
const headers = {
'Content-Type' : `text/plain;charset=UTF-8`
};
const data = JSON.stringify({"user":randomString(8,'')+ "@gmail.com","pass":"va123456"});

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: data
};
$prefs.setValueForKey(data, "accMatePro");
$task.fetch(myRequest).then(response => {
    console.log(data + "\n\n" + response.body);
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});


function randomString(lenRandom, type) {
     //define a variable consisting alphabets in small and capital letter
	var characters = "0123456789abcdefghijklmnopqrstuvwxyz";                     
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

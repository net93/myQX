
let url = $request.url;
url = url.match(/(\w+)/g);
for (let i in url) {
	if (url[i].length == 16) { var activity = url[i]};
	if (url[i].length == 18) { var appid = url[i]};
};
const game = { activity: activity, appid: appid };
let games = check($prefs.valueForKey("games"))??[];
let result = [];
result = games.filter(function(element){
	return element['activity'].includes(activity) ? '' : result.push(element)});
const GAMES = result.concat([game])
$prefs.setValueForKey(JSON.stringify(GAMES),"games");
//$prefs.setValueForKey(JSON.stringify($request.headers),"gameheaders");
//$prefs.removeValueForKey("games");
console.log(`Số lượng Game:  ${GAMES.length}`);
console.log($prefs.valueForKey("games") +'\n\n'+ "Add new" +'\n\n'+ JSON.stringify([game]));
//console.log(JSON.stringify($request.headers));
$done()

function check(value) { 
return ( value === undefined || value =="[]") ? value = undefined : JSON.parse(value)
}

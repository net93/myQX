
function randomString(lenRandom, type) {
     //define a variable consisting alphabets in small and capital letter
	var characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZ";                     
     //specify the length for the new string
	var randomstring = '';
	var lenCharacters;
	if (typeof(type) == 'number') {
characters = characters.substring(0,10)} else if (typeof(type) == 'string') {characters= characters.substring(10)} else {};
	lenCharacters = characters.length;
            //loop to select a new character in each iteration
	for (var i=0; i<lenRandom; i++){
		var rnum = Math.floor(Math.random() * lenCharacters);
		randomstring += characters.substring(rnum, rnum+1);
	};
	return randomstring;
};
console.log(randomString(6));
$done();

let headers = $request.headers;
/*
const headers = {
'X-RevenueCat-ETag' : `vi`,
'If-None-Match' : `keep-alive`,
'Accept-Encoding' : `gzip, deflate, br`,
'entrance' : ``,
'If-Modified-Since' : `application/x-www-form-urlencoded`,
'Origin' : `https://pages.lazada.vn`,
'User-Agent' : `hshsh`,
'traffic' : ``
}
*/

const headersList = ["X-RevenueCat-ETag", "If-None-Match", "If-Modified-Since", "segments"];
let len = headersList.length;
for ( let i = 0; i < len; ++i){
     if(headersList[i] in headers){ 
         delete headers[headersList[i]];
         console.log(headersList[i])
    }
}

//console.log(JSON.stringify(headers));
$done({headers: headers})
//$done()

/*
let obj = {
  "product_ids" : [
    "pro_year"
  ],
  "receipt_creation_timestamp" : Math.round(new Date().getTime()/1e3)
}

obj = JSON.stringify(obj)
*/
let url = $request.url
let stt = $response.statusCode
let body = $response.body
console.log(stt+'\n'+url+'\n<==>'+body)
$done()

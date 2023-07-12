
//var obj = JSON.parse($response.body);
let obj= {
 "response": {
  "id": "full",
  "title": "TRỌN ĐỜI",
  "orderId": 87543,
  "unlockGift": false,
  "prepaid": false
 }
};
//let stt = $response.statusCode;
$done({status: 'HTTP/1.1 200 OK', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(obj)});
//$done(JSON.stringify(obj))

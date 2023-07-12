

let body = JSON.parse($request.body);
body.pro = 1;
console.log(JSON.stringify(body));
$done(JSON.stringify(body))
//$done()
/*

{
  "device_name" : "iPhone",
  "app_version" : "2.3.6",
  "country" : "VN",
  "uuid" : "592D1A9D-0CB2-4A6F-B9A6-0CA562303C86",
  "os_version" : "15.7",
  "device_type" : "iphone",
  "pro" : "",
  "is_extension" : false
}

*/

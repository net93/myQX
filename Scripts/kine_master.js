

let body = JSON.parse($response.body)
body.expiresDate = 4103514183000
body.isSubscribed = true
body.productId = "com.kinemaster.kios.annual.ia4"
body = JSON.stringify(body)
//console.log(body)
$done(body)






/*

{
  "expiresDate" : 1703514183000,
  "isSubscribed" : true,
  "productId" : "com.kinemaster.kios.annual.ia4",
  "isAutoRenew" : false,
  "platform" : "APPSTORE"
}


*/

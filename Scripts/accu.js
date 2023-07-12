
let obj = {"isValid":true,"autoRenewalStatus":"1","productId":"com.accuweather.annual.subscription","expiryDateEpoch":4089792950,"expirationDate":"2099-07-19T18:55:50+00:00","expirationIntent":null,"expirationRetry":null,"purchaseDateEpoch":1689188150000,"isTrial":true,"isIntro":false,"status":0,"usedTrial":[],"usedIntro":[]}
console.log($response.body)
console.log(JSON.stringify(obj))
$done(JSON.stringify(obj))


//{"isValid":true,"autoRenewalStatus":"1","productId":"com.accuweather.annual.subscription","expiryDateEpoch":1689792950,"expirationDate":"2023-07-19T18:55:50+00:00","expirationIntent":null,"expirationRetry":null,"purchaseDateEpoch":1689188150000,"isTrial":true,"isIntro":false,"status":0,"usedTrial":[],"usedIntro":[]}

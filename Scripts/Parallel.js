let obj = JSON.parse($response.body)
obj.purchase = 1
console.log(JSON.stringify(obj))
$done(JSON.stringify(obj))

let obj = JSON.parse($response.body)
obj.maxCircuits = 1000
obj.maxDevices = 1000
$done(JSON.stringify(obj))

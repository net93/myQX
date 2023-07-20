let obj = JSON.parse($response.body)
obj.maxCircuits = -1
obj.maxDevices = -1
$done(JSON.stringify(obj))

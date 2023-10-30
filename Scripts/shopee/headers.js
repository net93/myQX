let hShopee = JSON.stringify($request.headers)
$prefs.setValueForKey(hShopee, "shopeeHeaders")
//console.log($prefs.valueForKey("shopeeHeaders"))
$done()

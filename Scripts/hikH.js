let headers = $request.headers
$prefs.setValueForKey(headers.Cookie, 'hik')
console.log($prefs.valueForKey('hik'))

$done()

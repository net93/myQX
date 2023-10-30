let url = $request.url

if(url.includes('indream.app')){
  const obj = {
    "data": {
      "premiumAccess": true
    }
  };
  $done({status: 'HTTP/1.1 200 OK', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(obj)})
}
if(url.includes('nicegram.cloud')){
  let headers = $request.headers
  delete headers['X-timestamp']
  $prefs.setValueForKey(JSON.stringify(headers), 'nicegram')
  $done()
}

$done()
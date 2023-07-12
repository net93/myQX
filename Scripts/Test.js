let hShopee = JSON.parse($prefs.valueForKey("shopeeHeaders"))
let cookie = hShopee['Cookie']
let csrftoken = cookie.match(/csrftoken=\w{32}/)
csrftoken = csrftoken[0].split('=')
csrftoken = csrftoken[1]
const szToken = hShopee['af-ac-enc-sz-token']
const dat = hShopee['af-ac-enc-dat']


$done()

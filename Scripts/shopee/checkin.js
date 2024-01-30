/*
 @ Checkin on Shopee by Aite

 */
let hShopee = $prefs.valueForKey("shopeeHeaders")
if (hShopee === undefined) {
	$notify("No headers","Open app Shopee to get headers");
	$done();
};
hShopee = JSON.parse(hShopee)
const userAgent = hShopee['User-Agent']
let cookie = hShopee['Cookie']
let dci = hShopee['dci-version']
let csrftoken = cookie.match(/csrftoken=\w+/)
csrftoken = csrftoken[0].split('=')
csrftoken = csrftoken[1]
const szToken = hShopee['af-ac-enc-sz-token']
const dat = hShopee['af-ac-enc-dat']
let spcF = cookie.match(/SPC_F=\w+/)
spcF = spcF[0].split('=')
spcF = spcF[1]
const headers = {
'Referer' : `https://games-dailycheckin.shopee.vn/mkt/coins/api/`,
'Cookie' : cookie,
'User-Agent' : userAgent,
'dci-version' : dci,
'x-csrftoken' : csrftoken,
'x-api-source' : `rn`,
'af-ac-enc-sz-token' : szToken,
'X-Shopee-Client-Timezone' : `Asia/Ho_Chi_Minh`,
'Connection' : `keep-alive`,
'Accept-Language' : `vi-VN,vi;q=0.9`,
'Accept' : `application/json`,
'Content-Type' : `application/json`,
'af-ac-enc-dat' : dat,

'Accept-Encoding' : `gzip, deflate, br`,
};
const body = {
  "device_fingerprint" : spcF,
  "entrance" : 2,
  "dfp" : szToken,
  "tongdun_blackbox" : "td_sdk_uninitialized"
}



const myRequest = {
	url: 'https://games-dailycheckin.shopee.vn/mkt/coins/api/v2/checkin_new',
	method: 'POST',
     headers: headers,
     body: JSON.stringify(body)
};

$task.fetch(myRequest).then(response => {
    // response.statusCode, response.headers, response.body
    let obj = JSON.parse(response.body)
    let msg = obj.msg
    console.log(response.body);
    $notify('SP Checkin', msg)
    $done();
}, reason => {
    // reason.error
    console.log(reason.error); // Error!
    $notyfi('Error')
    $done();
});


/**


const url = `https://games-dailycheckin.shopee.vn/mkt/coins/api/v2/settings`;
const method = `GET`;
const headers = {
'799b9476' : `qUXvBDQMBJj97CU+nOozhXP0/5s=`,
'af-ac-enc-sz-token' : `9LhdaAbhsszK7QK9Zuk6pw==|gzlGyPvfnwtzkjhCZSV5XBq/XMtbwWtnVvWVhqQKfA1WNV0j8QzcS+KH80X+lbY/kuCm7o+TDjgGUCPI4DGR3bpR|zbogXRRV6NN9cVU/|08|2`,
'Connection' : `keep-alive`,
'Accept-Encoding' : `gzip, deflate, br`,
'7ccf6135' : `2xgTKdJdoL4u6dkvLlAF8TCyBUQ=`,
'if-none-match-' : `55b03-46505d3694b084756c7cd505ddc17fcf`,
'X-Shopee-Client-Timezone' : `Asia/Ho_Chi_Minh`,
'x-api-source' : `rn`,
'e07a7212' : `6mkQuyfDjuPQI/AVOwqu3T6ug9PUm2ZwCs0ru0xLsPpVRYHqt5NQQGL5ONvKSMHRJieF1U6h0004gvxlGqH/d9oW2X37oPKi2Y+e1B0ffQKvWrR1bTPtm0GIKK83rR7L3MPRBlfQubOZz9XmrZKiBhb5Ap8gwEKIfbz6dHkowPs8T/sfitbGmkoZf0VR8x8R+/AebZP1WwYxMwkMUypm8ojNzN3xs8Zg+Y5jqj11FxGFckpb3aqqB6tpaXhGnp1tbag4LMZB/XdV3fbjjkRnipY9jx453GL/qaC9JN1Qr6EfhMh9aVsu+NPKPeAgsFZJ9jXG3pPbpknKBLzBWOiVizAcMVQP1YEPfeWiudEHLQiu0HTaxN0zGF/AQizPA1QIT3on1KF9l5wIu/rUraFYWQQLLVTEnxK1ORC2BQb+k98EV7TFNuP6cuWDP/gYZqrT42cfZkRIYLCS7+UHxBW6PZ6AXVFVAKSlLItK2l/1xXYzxGUNaBwghsVbrBn+so7N8Q7aQ0wLIhmt4Bcny2yI1MBEo+ShhFR/k4WDloGx7haBqb/aG/Ch1tTHy9YxSEQoD4GA84l4oQz+ptQvgjvwK2zmFmLLZdFvnXtBXL1k/Nr62N+e8i7CDmTw0zafbt+8`,
'af-ac-enc-id' : `Gaulr7hDNrVWVVI9/JyHHP0pbR6U0wWSKrKfE65G5LQT32MQJEXPp3i9+mG/TnSExaQphQ==`,
 'User-Agent' : `iOS app iPhone Shopee appver=31421 language=vi app_type=1`,
'dci-version' : `2004000`,
'Cookie' : `SPC_F=E182B37318FF4976A280E8B476D5EA64; SPC_EC=.b0kyaWtOdTRhN0M5T0xvMbCIZRlzH457BoMfaJCSiJL6tQHqM2vXfYlBEDSt0RecJMdvFcXioEZRWBQnWuQjoNh3VN891QXEbGNLjTfpPS5V1gjbdnm0UdUb3H0utmQc69yN4uDuEDTZ29ZJigBbGOEuWvHYHis6d5u9z7zYK5Zy+u8ILTCY5jFdjK1LTaB4t/Io8AabQJbL0wEJTyiwUQ==; SPC_R_T_ID=bSTdM7SafOBgrbQ5sTTM5c38O5omzsO0XI/6M3HWJcdWRK6p7L/tjuB63ZCO9hST6aRi6oTy5reLkGSV3Ee+JKMuEDpJ+8QvfKzSCP4ETZ/WwZ8EPzStJXCVpCAiTE9vAd4rbuchQ1SpyMbA75TDVwSdQeKd39SgG9LnnH+Vuzw=; SPC_R_T_IV=NFA2MlF0S0xheTdmbXVDZw==; SPC_SI=crVlZQAAAABNN2M2Z3ZrYyDwagIAAAAAY3F4UlQyaGg=; SPC_ST=.b0kyaWtOdTRhN0M5T0xvMbCIZRlzH457BoMfaJCSiJL6tQHqM2vXfYlBEDSt0RecJMdvFcXioEZRWBQnWuQjoNh3VN891QXEbGNLjTfpPS5V1gjbdnm0UdUb3H0utmQc69yN4uDuEDTZ29ZJigBbGOEuWvHYHis6d5u9z7zYK5Zy+u8ILTCY5jFdjK1LTaB4t/Io8AabQJbL0wEJTyiwUQ==; SPC_T_ID=bSTdM7SafOBgrbQ5sTTM5c38O5omzsO0XI/6M3HWJcdWRK6p7L/tjuB63ZCO9hST6aRi6oTy5reLkGSV3Ee+JKMuEDpJ+8QvfKzSCP4ETZ/WwZ8EPzStJXCVpCAiTE9vAd4rbuchQ1SpyMbA75TDVwSdQeKd39SgG9LnnH+Vuzw=; SPC_T_IV=NFA2MlF0S0xheTdmbXVDZw==; SPC_U=44279768; SPC_AFTID=LAT; SPC_CLIENTID=RTE4MkIzNzMxOEZGrxoitdgofumragpe; SPC_F=E182B37318FF4976A280E8B476D5EA64; shopee_app_version=31421; shopee_rn_bundle_version=5096014; shopee_rn_version=1699506207; SPC_B_SI=crVlZQAAAABOSVdsTWlEVlYIawIAAAAASU9uamlXelA=; shopee_token=8tdZ55XW2aqIcMsVv7mXsgaVyawMHO5CFhVC85SU3eJ4mm26Q2LBQyu2o1NOK+5G; shopid=44278382; userid=44279768; username=net93vip; csrftoken=EKireGruaDCfN4n1E2Y2EE6r3SsCImDJ; REC_T_ID=85c57bfb-42ed-11ee-a403-347379167e64`,
'Host' : `games-dailycheckin.shopee.vn`,
'Referer' : `https://games-dailycheckin.shopee.vn/mkt/coins/api/`,
'af-ac-enc-dat' : `YWNzCjAwNACLTJ+c54rQa4wBAAABAgEAoAAAAJikJGdvNakBheCk2OnOBcUjJqQQ66MNnHbIUZ7VzMZO3/ZXMRplqRi8dm5pttefJu2JjIpoM/VD7Wv06a1K0nOqWlYSdqNuC5pBHYA3HkEF4gexCLseS3ZeGFsL3rK1idzA9iURYHCUKQizNpNNUzQbxxlSX6aRotv+Lr0+flSYdF592lRvpjby3OIzR3L7fJ+AEwHfi2xqu7xowCBRQAI=`,
'Accept-Language' : `vi-VN,vi;q=0.9`,
'Accept' : `*`,
'x-sap-ri' : `4cdb7b65dd7b06c7dc5bcc23018c20b52e6bc0aaa33631c33943`
};


*/

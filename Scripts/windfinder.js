/*
let obj = [
  {
    "exp_at" : "2023-08-09T02:47:32Z",
    "active" : true,
    "orig_trans_id" : "590001308338308",
    "sku" : "freeplus_12month_tier20",
    "cncl_date" : null,
    "trial_prd" : "true",
    "cncl_rson" : null,
    "retry_prd" : false,
    "intro" : "false",
    "sandbox" : false
  }
]
*/
let obj = JSON.parse($response.body)
obj[0].exp_at = "2099-08-01T02:47:32Z"
obj[0].active = true
obj[0].trial_prd = "true"
console.log(JSON.stringify(obj[0]))
$done(JSON.stringify(obj))

/*

let obj = {
  "status" : "success",
  "response" : [
    {
      "status" : "SUBSCRIPTION_RENEWED",
      "order_id" : "180000512783913",
      "original_order_id" : "180000512783913",
      "is_trial" : false,
      "plan_meta" : {
        "storage_limit_in_mb" : 20480,
        "frequency" : "yearly",
        "scope_id" : "full",
        "id" : "com.picsart.studio.subscription_plus_yearly",
        "product_id" : "subscription_plus_yearly",
        "level" : 2000,
        "auto_renew_product_id" : "com.picsart.studio.subscription_plus_yearly",
        "type" : "renewable",
        "tier_id" : "gold_old",
        "permissions" : [
          "premium_tools_standard",
          "premium_tools_ai"
        ],
        "description" : "plus"
      },
      "reason" : "ok",
      "subscription_id" : "com.picsart.studio.subscription_plus_yearly",
      "is_eligible_for_introductory" : false,
      "purchase_date" : 1547302453000,
      "expire_date" : 4076819517000
    }
  ]
}
*/
let obj = JSON.parse($response.body)
obj.response[0].status = "SUBSCRIPTION_RENEWED"
obj.response[0].is_trial = false
obj.response[0].reason = "ok"
obj.response[0].expire_date = 4080447174000
console.log(JSON.stringify(obj))
$done(JSON.stringify(obj))
//$done({status: 'HTTP/1.1 200 OK', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(obj)})

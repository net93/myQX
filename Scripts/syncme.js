

//let obj = {"purchases": [{"product_id": "com.ultimake.smartsync.unlimited", "platform_type": 1, "purchase_date": 1677700560000, "expiration_date": 1680375359000}], "error_code": 0, "error_description": "OK"};

let obj = JSON.parse($response.body)
obj.purchases[0].product_id = "com.ultimake.smartsync.unlimited"
obj.purchases[0].expiration_date = 4080375359000

$done(JSON.stringify(obj))








/*
{
"com.ultimake.smartsync.unlimited" : {
      "default_appstore_trial_duration" : 0,
      "is_dynamic_duration" : false,
      "required_purchase_context_keys" : [

      ],
      "default_title" : "Unlimited user",
      "default_description" : "Unlimited user - all features",
      "default_expiration_duration" : 31536000,
      "is_can_have_multiple_purchases" : false,
      "product_type" : 4,
      "is_appstore_product" : true
    },
    "com.ultimake.smartsync.membership.1year.30dayTrial" : {
      "default_appstore_trial_duration" : 2592000,
      "is_dynamic_duration" : false,
      "required_purchase_context_keys" : [

      ],
      "default_title" : "Membership (1 Year AR w/ 1 Month Trial)",
      "default_description" : "Membership (1 Year AR w/ 1 Month Trial)",
      "default_expiration_duration" : 31536000,
      "is_can_have_multiple_purchases" : false,
      "product_type" : 4,
      "is_appstore_product" : true
    }
}
*/

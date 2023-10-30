/*
let obj = {
  "transactions" : {

  },
  "me" : {
    "non_consumables_ids" : [

    ],
    "active_subscriptions_ids" : [
      "com.bigwinepot.nwdn.international.1w_p9_99_ft_pro"
    ],
    "privacy_notice" : {
      "required_consents" : [

      ],
      "is_at_least_16" : "unknown",
      "last_acknowledged_version" : "1.7.0"
    },
    "unique_id" : "DBD536C5-6931-41A9-B175-326A86C50498",
    "active_bundle_subscriptions" : [

    ],
    "is_spooner" : false,
    "terms_of_service" : {
      "last_accepted_version" : "1.9.0"
    },
    "available_consumable_credits" : {

    }
  }
}
*/
let obj = JSON.parse($response.body)
obj.me.active_subscriptions_ids = ["com.bigwinepot.nwdn.international.1y_p99_99_ft_pro"]
//console.log(JSON.stringify(obj))

$done(JSON.stringify(obj))

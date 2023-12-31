let body = $response.body
let url = $request.url
if(url.includes('entitlements?encrypt=0')){
  body = JSON.parse(body)
  body.tier.code = 'premium'
  body.tier.expire_at = 4101595296
  body.transactions[0].catalog = 'premium'
  body.transactions[0].interval = 'subscription'
  body.transactions[0].status = 'granted'
  body = JSON.stringify(body)
}


if(url.includes('purchase')){
  body = JSON.parse(body)
  body.subscriptions = {
      "expire_at" : "20991222",
      "store" : "ios",
      "subscription" : "one_year.paid.trial.week.ios.v4.elsa.premium_membership",
      "days_to_end" : 8,
      "created_at" : "20231214150739"
  }
  body = JSON.stringify(body)
}



console.log(body)
$done(body)



/*

https://pool.elsanow.io/entitlement/api/v1/user/entitlements?encrypt=0

https://pool.elsanow.io/user/api/v2/purchase


{
  "entitlements" : {
    "features" : [
      {
        "code" : "elsa_speak.feature.ai_role_play",
        "expire_at" : null,
        "application" : "elsa_speak",
        "credit_total" : null,
        "start_at" : 1702565950
      }
    ],
    "contents" : [

    ],
    "memberships" : [
      {
        "code" : "elsa_speak.membership.elsa_speak",
        "expire_at" : 1703289599,
        "application" : "elsa_speak",
        "credit_total" : null,
        "start_at" : 1702684799
      },
      {
        "code" : "speech_analyzer.membership.speech_analyzer",
        "expire_at" : 1703289599,
        "application" : "speech_analyzer",
        "credit_total" : null,
        "start_at" : 1702684799
      }
    ]
  },
  "tier" : {
    "start_at" : 1702684799,
    "expire_at" : 1703289599,
    "code" : "premium"
  },
  "user_id" : "SDUIUgAaGhJAIyEHXyY0DBUMKQIsHl8tCBZvFzQzPHk=",
  "transactions" : [
    {
      "store" : "ios",
      "order_id" : "180001878292678",
      "interval" : "subscription",
      "status" : "granted",
      "created_at" : 1702684799,
      "rf_id" : "180001878292678",
      "duration" : "one_week",
      "updated_at" : 1702568320,
      "catalog" : "premium"
    }
  ]
}

########################################
{
  "subscriptions" : [
    {
      "expire_at" : "20231222",
      "store" : "ios",
      "subscription" : "one_year.paid.trial.week.ios.v4.elsa.premium_membership",
      "days_to_end" : 8,
      "created_at" : "20231214150739"
    }
  ],
  "external_id" : "SDUIUgAaGhJAIyEHXyY0DBUMKQIsHl8tCBZvFzQzPHk=",
  "one_time_products" : [

  ]
}

*/

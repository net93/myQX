let obj = $response.body
obj = JSON.parse(obj)
obj.response.userData.isPro = 1
obj.response.subscriptions[0] = {
        "status" : true,
        "is_trial_period" : 1,
        "expiration_ts" : 4089583727,
        "subscriptionId" : "co.windyapp.pro_sub_year_49_trial7d",
        "sub_cancelled" : 0
      }
console.log(JSON.stringify(obj))
$done(JSON.stringify(obj))

/*
{
  "status" : "success",
  "response" : {
    "userData" : {
      "registered" : 1,
      "isProCancelled" : false,
      "lastName" : "Lee",
      "avatarURL" : "",
      "lastAlertPushSentTimestamp" : 0,
      "business_phone" : "",
      "locale" : "vi-VN",
      "fbAvatarGrabbed" : 0,
      "firstName" : "AiT",
      "lastActivity" : -1,
      "business_description" : "",
      "app_identifier" : "co.windyapp.Windy",
      "isPro" : 1,
      "fbid" : null,
      "business_lon" : 0,
      "pushToken" : "58f7d64d-577a-4754-adf9-2067acd647af",
      "params" : null,
      "email" : "cfjk98p6fs@privaterelay.appleid.com",
      "activities" : [
        16
      ],
      "chatDisplayName" : "AiT Lee",
      "proExpirationTimestamp" : 1689583727,
      "pushTokenType" : "onesignalPushIos",
      "proType" : "buy",
      "becameProTimestamp" : 1688979105,
      "business_sport_kind" : null,
      "modificationTimestamp" : 1688979105,
      "fb" : 0,
      "isBanned" : false,
      "userID" : "8EFEAF9B-4999-415C-BF51-AC5CE364E95D",
      "showMyFavorites" : 0,
      "business_lat" : 0,
      "isBusiness" : 1,
      "firstVisitTimestamp" : 1688972602,
      "unisender_sync_hash" : null,
      "onesignal_sync_hash" : null,
      "business_social_networks" : null,
      "showMyReports" : 0,
      "business_name" : "Aite",
      "business_type" : null
    },
    "subscriptions" : [
      {
        "status" : true,
        "is_trial_period" : 1,
        "expiration_ts" : 1689583727,
        "subscriptionId" : "co.windyapp.pro_sub_year_49_trial7d",
        "sub_cancelled" : null
      }
    ]
  },
  "time" : 0.016127109527587891
}
*/

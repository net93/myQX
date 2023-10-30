/*let a = {
  "originalTransactionId" : 180001530604744,
  "inAppStates" : [
    {
      "productId" : "com.readdle.ReaddleDocsIPad.subscription.month10_allusers",
      "subscriptionExpirationIntent" : "userCancelled",
      "subscriptionExpirationDate" : "19:33 21/02/2023",
      "originalTransactionId" : 180001530604744,
      "productName" : "subscription",
      "isEligibleForIntroPeriod" : false,
      "isInBillingRetryPeriod" : false,
      "type" : "subscription",
      "entitlements" : [
        "ios.documents.pdf"
      ],
      "subscriptionGroupId" : "20555224",
      "subscriptionState" : "lapsed",
      "subscriptionAutoRenewStatus" : "autoRenewOff",
      "isInGracePeriod" : false
    },
    {
      "originalTransactionId" : "0000",
      "entitlements" : [

      ],
      "type" : "custom purchase",
      "productId" : "documents6-user"
    }
  ],
  "chargingPlatform" : "iOS AppStore",
  "receiptStatus" : "ok",
  "bundleId" : "com.readdle.ReaddleDocsIPad",
  "receiptId" : 1549971782000,
  "statisticsInfo" : {
    "events" : [

    ]
  },
  "externalId" : "d12614ec-87a5-438a-9c47-397e9a283ad0"
}
*/

let b= {
  "originalTransactionId" : 590001328370104,
  "inAppStates" : [
    {
      "productId" : "com.readdle.ReaddleDocsIPad.subscription.month10_hybrid",
      "subscriptionExpirationDate" : "02:45 31/08/2023",
      "originalTransactionId" : 590001328370104,
      "productName" : "subscription",
      "isEligibleForIntroPeriod" : false,
      "isInBillingRetryPeriod" : false,
      "type" : "subscription",
      "entitlements" : [
        "ios.documents.pdf"
      ],
      "subscriptionGroupId" : "20555224",
      "subscriptionState" : "trial",
      "subscriptionAutoRenewStatus" : "autoRenewOn",
      "isInGracePeriod" : false
    },
    {
      "originalTransactionId" : "0000",
      "entitlements" : [

      ],
      "type" : "custom purchase",
      "productId" : "documents6-user"
    }
  ],
  "chargingPlatform" : "iOS AppStore",
  "receiptStatus" : "ok",
  "bundleId" : "com.readdle.ReaddleDocsIPad",
  "receiptId" : 1549971782000,
  "statisticsInfo" : {
    "events" : [

    ]
  },
  "externalId" : "8ba323fe-5505-4990-abe6-8dd53f53d9e9"
}

let a = JSON.parse($response.body)
//delete a.inAppStates[0].subscriptionExpirationIntent
a.inAppStates[0].subscriptionExpirationDate = "19:33 21/02/2099"
a.inAppStates[0].subscriptionState = "trial"
console.log(JSON.stringify(a.inAppStates[0]))

$done(JSON.stringify(a))

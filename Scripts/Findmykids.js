let body = JSON.parse($response.body)
body.result.licenseTo = "2099-01-05 21:11:17+03:00"
body.result.billingInformation = {
      "id" : 131631643,
      "state" : 1,
      "productType" : 1,
      "period" : 365,
      "productID" : "49",
      "basis" : 0,
      "activeFrom" : "2023-12-29 21:14:08+03:00",
      "lastPaid" : "2023-12-29 21:14:03+03:00",
      "autoRenewing" : 1,
      "minutesState" : 0,
      "nextPaid" : "2024-01-05 21:14:03+03:00",
      "paidTill" : "2024-01-05 21:14:03+03:00",
      "billingType" : 3,
      "externalProductID" : "trial_year_8x_month_4",
      "tarifficationCount" : 0,
      "hadTrial" : true,
      "features" : null,
      "cost" : "559000.00 VND"
    }
//console.log(JSON.stringify(body))
$done(JSON.stringify(body))

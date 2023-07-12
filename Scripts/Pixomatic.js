/*
let obj = {
  "msg" : "Completed successfully",
  "profile" : {
    "account" : 6593481,
    "cutouts" : 0,
    "language" : "en",
    "tariff" : "premium",
    "plan" : "monthly",
    "subscription_date_create" : {
      "date" : "2023-04-04 14:24:33.000000",
      "timezone" : "UTC",
      "timezone_type" : 3
    },
    "mosaicToken" : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoicGl4b21hdGljLWlkLTY1OTM0ODEiLCJlbWFpbCI6Im5ldDkzdmlwQGdtYWlsLmNvbSIsImRhdGFfY29sbGVjdGlvbl9jb25zZW50Ijoibm90X2RldGVybWluZWQifQ.7m1Qq8tHmCgXz-d4-m3YcIQEiutOcZzPeV5PW4421_0",
    "registration_platform" : "ios",
    "creation_date" : "2023-04-04T14:20:18.0Z",
    "cut_counter" : 0,
    "marketing" : {
      "email_marketing" : null,
      "emailAgreement" : null
    },
    "authorization_type" : "google",
    "name" : "Vô Danh (net93vip)",
    "type" : "apple",
    "subscription_status" : "Cancel",
    "export_size" : 2048,
    "seconds" : 280,
    "email" : "net93vip@gmail.com",
    "permissions" : "newsletter",
    "photos" : 0,
    "confirmed" : true,
    "sessions" : 0,
    "subscription_date_end" : {
      "date" : "2023-04-11 14:22:59.000000",
      "timezone" : "UTC",
      "timezone_type" : 3
    },
    "user_name" : "artist_168061801802020"
  }
}

{
  "msg" : "Completed successfully",
  "profile" : {
    "account" : 6549246,
    "cutouts" : 0,
    "language" : "en",
    "tariff" : null,
    "plan" : null,
    "subscription_date_create" : null,
    "mosaicToken" : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoicGl4b21hdGljLWlkLTY1NDkyNDYiLCJlbWFpbCI6InMycG5tcm1rYnNAcHJpdmF0ZXJlbGF5LmFwcGxlaWQuY29tIiwiZGF0YV9jb2xsZWN0aW9uX2NvbnNlbnQiOiJub3RfZGV0ZXJtaW5lZCJ9.Qpz78Fcm9xTcDhD49-W2gYG9VjjqfUPfG4Myv58uRdE",
    "registration_platform" : "ios",
    "creation_date" : "2023-03-25T16:48:53.0Z",
    "cut_counter" : 0,
    "marketing" : {
      "email_marketing" : null,
      "emailAgreement" : null
    },
    "authorization_type" : "apple",
    "name" : "s2pnmrmkbs",
    "type" : null,
    "subscription_status" : "Cancel",
    "export_size" : 2048,
    "seconds" : 6491,
    "email" : "s2pnmrmkbs@privaterelay.appleid.com",
    "permissions" : "newsletter",
    "photos" : 0,
    "confirmed" : true,
    "sessions" : 0,
    "subscription_date_end" : null,
    "user_name" : "s2pnmrmkbs_privaterelay_appleid_com"
  }
}




*/
let obj = JSON.parse($response.body)
obj.profile.tariff = "premium"
obj.profile.plan = "monthly"
obj.profile.ubscription_date_create = {
      "date" : "2023-04-04 14:24:33.000000",
      "timezone" : "UTC",
      "timezone_type" : 3
}
obj.profile.subscription_date_end = {
      "date" : "2023-06-11 14:22:59.000000",
      "timezone" : "UTC",
      "timezone_type" : 3
}


$done(JSON.stringify(obj))

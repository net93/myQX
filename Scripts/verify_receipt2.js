

let o =JSON.parse($response.body)
o.data.attributes.paid_access_levels = {"premium" : {
          "id" : "premium",
          "is_lifetime" : false,
          "vendor_product_id" : "com.impalastudios.thecalculator.premium.try.yearly.budget.2020",
          "active_promotional_offer_type" : null,
          "cancellation_reason" : "voluntarily_cancelled",
          "billing_issue_detected_at" : null,
          "unsubscribed_at" : "2023-08-04T01:44:03.000000+0000",
          "expires_at" : "2023-08-04T01:44:03.000000+0000",
          "will_renew" : false,
          "is_active" : false,
          "offer_id" : null,
          "is_in_grace_period" : false,
          "activated_at" : "2023-08-01T01:44:03.000000+0000",
          "active_promotional_offer_id" : null,
          "renewed_at" : "2023-08-01T01:44:03.000000+0000",
          "is_refund" : false,
          "active_introductory_offer_type" : "free_trial",
          "store" : "app_store",
          "starts_at" : null
        }}

re('("is_lifetime"):false@("is_active"):false@("expires_at"):"\\w{4}@("expires_date"):"\\w{4}@("expires_date_pst"):"\\w{4}@("expires_date_ms"):"\\w+"@("is_trial_period"):"\\w+"','$1:true@$1:true@$1:"2099@$1:"2099@$1:"2099@$1:"4096019658000"@$1:"true"')

function re(){
    let body = JSON.stringify(o)
    if(!body){$done()}
    if(arguments[0].includes("@")) {
        let regs = arguments[0].split("@");
        let strs = arguments[1].split("@");
        for (i = 0;i < regs.length;i++) {
            let reg = new RegExp(regs[i],"g");
            body = body.replace(reg, strs[i]);
        }
    }else {
        let reg = new RegExp(arguments[0],"g");
        body = body.replace(reg, arguments[1]);
    }
    console.log(body)
    $done(body)
}

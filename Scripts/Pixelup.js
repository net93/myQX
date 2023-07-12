/**
 * App Pixelup
 *res.payload.purchased_product_identifiers = "pixelup.pro.lifetime";
 *res.payload.product_id = "pixelup.pro.lifetime";
 * res.payload.active = true;
 * res.payload.expires_at = 4099374586000;
 * res.payload.auto_renew_status = "1";
 * res.payload.is_trial = false;
 *delete res.payload.is_in_billing_retry_period;
 **/
let res = typeof($response.body) == typeof("") ? JSON.parse($response.body) : $response.body; 
res.payload.active = true;
res.payload.expires_at = 4099374586000;
res.payload.auto_renew_status = "1";
res.payload.is_trial = false;
delete res.payload.is_in_billing_retry_period
console.log(JSON.stringify(res));
$done(JSON.stringify(res));
//$done()

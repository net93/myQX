let obj = JSON.parse($response.body)
obj.data.user_products[0] = {  
  "id" : "unlimited_lifetime",
  "type" : 2,
  "store_id" : "de.nicolostanciu.nfcing.unlimited.lifetime",
  "duration" : null
  }
let pro = obj.data.products_permissions.unlimited_lifetime
let perm = obj.data.permissions
for( let i in pro){ perm.push({
        "active" : 1,
        "current_period_type" : "lifetime",
        "source" : "appstore",
        "id" : pro[i],
        "started_timestamp" : 1689673025,
        "expiration_timestamp" : null,
        "renew_state" : 0,
        "associated_product" : "unlimited_liftetime"
      })
}

//console.log(JSON.stringify(perm))
$done(JSON.stringify(obj))
